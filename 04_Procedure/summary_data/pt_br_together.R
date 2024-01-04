# Libraries ---------------------------------------------------------------

library(rio)
library(RSQLite)
library(dplyr)
library(tidyverse)
library(jsonlite)
library(janitor)
library(widyr)

# Functions ---------------------------------------------------------------

processData <- function(database) {
  con <- dbConnect(
    drv=RSQLite::SQLite(),
    dbname=database
  )
  
  # Extract main table
  if(con %>% DBI::dbExistsTable("labjs")){
    d <- dbGetQuery(
      conn=con,
      statement='SELECT * FROM labjs'
    )
    
    # Close connection
    dbDisconnect(
      conn=con
    )
    
    # Discard connection
    rm(con)
    
    d.meta <- map_dfr(d$metadata, fromJSON) %>%
      dplyr::rename(
        observation=id
      )
    
    d <- d %>%
      bind_cols(d.meta) %>%
      select(
        -metadata # Remove metadata column
      )
    
    # Remove temporary data frame
    rm(d.meta)
    
    count_unique <- function(x) {
      return(length(unique(x)))
    }
    
    information_preserved <- function(x, length) {
      return(
        count_unique(str_sub(x, end=i)) ==
          count_unique(x)
      )
    }
    
    # Figure out the length of the random ids needed
    # to preserve the information therein. (five characters
    # should usually be enougth, but better safe)
    for (i in 5:36) {
      if (
        information_preserved(d$session, i) &&
        information_preserved(d$observation, i)
      ) {
        break()
      }
    }
    
    d <- d %>%
      dplyr::mutate(
        session=str_sub(session, end=i),
        observation=str_sub(observation, end=i)
      )
    
    rm(i, count_unique, information_preserved)
    
    parseJSON <- function(input) {
      return(input %>%
               fromJSON(flatten=T) %>% {
                 # Coerce lists
                 if (class(.) == 'list') {
                   discard(., is.null) %>%
                     as_tibble()
                 } else {
                   .
                 } } %>%
               # Sanitize names
               janitor::clean_names() %>%
               # Use only strings for now, and re-encode types later
               mutate_all(as.character)
      )
    }
    
    d.full <- d %>%
      dplyr::filter(payload == 'full')
    
    if (nrow(d.full) > 0) {
      d.full %>%
        group_by(observation, id) %>%
        do(
          { map_dfr(.$data, parseJSON) } %>%
            bind_rows()
        ) %>%
        ungroup() %>%
        select(-id) -> d.full
    } else {
      # If there are no full datasets, start from an entirely empty df
      # in order to avoid introducing unwanted columns into the following
      # merge steps.
      d.full <- tibble()
    }
    
    d %>%
      dplyr::filter(payload %in% c('incremental', 'latest')) %>%
      group_by(observation, id) %>%
      do(
        { map_dfr(.$data, parseJSON) } %>%
          bind_rows()
      ) %>%
      ungroup() %>%
      select(-id) -> d.incremental
    
    if (nrow(d.full) > 0){
      
      d.output <- d.full %>%
        bind_rows(
          d.incremental %>% filter(!(observation %in% d.full$observation))
        ) %>%
        type_convert()
      
    } else {
      
      d.output <- d.incremental %>% type_convert()
      
    }
    
    d.output %>%
      group_by(observation) %>%
      fill(matches('code'), .direction='down') %>%
      fill(matches('code'), .direction='up') %>%
      ungroup() -> d.output
    
    return(d.output)
  } else {
    DF <- data.frame(url_lab = as.character())
    return(DF)
  }
}

# Data --------------------------------------------------------------------

# original word lists
pt_data_stimuli <- import("/var/www/html/pt/pt_words.csv") %>% 
  mutate(where_pt = 1) %>% 
  mutate(pt_cue = gsub("seqüestrar", "sequestrar", pt_cue),
         word_combo = paste0(pt_cue, pt_target))
br_data_stimuli <- import("/var/www/html/br_pt/br_pt_words.csv") %>% 
  mutate(where_br = 1) %>% 
  mutate(pt_cue = gsub("seqüestrar", "sequestrar", pt_cue),
         word_combo = paste0(pt_cue, pt_target))

pt_words_together <- bind_rows(pt_data_stimuli, br_data_stimuli) %>% 
  select(-pt_cosine, -pt_br_cosine, -where_br, -where_pt) %>% 
  unique()

# get only the new data
pt_files <- list.files(path = "/var/www/html",
                       pattern = "data.sqlite",
                       full.names = TRUE,
                       recursive = TRUE)

pt_files <- pt_files[grepl("pt", pt_files)]

pt_data <- list()

# open all files
for (i in 1:length(pt_files)){
  pt_data[[i]] <- processData(pt_files[i])
  pt_data[[i]] <- pt_data[[i]] %>%
    mutate(across(matches(c("portuguese_sona", "url_portuguese_sona")), as.character)) %>%
    mutate_at(vars(one_of("url_lab")), as.character,
              vars(one_of("url_special_code")), as.character)
  pt_data[[i]] <- pt_data[[i]] %>% 
    mutate_at(vars(one_of("url_special_code")), as.character)
}

pt_data_all <- bind_rows(pt_data) %>% unique()

pt_data_all$word[pt_data_all$word == "seqüestrar"] <- "sequestrar"

# Summarize Stuff ---------------------------------------------------------

# deal with issues of two weird time stamps 
pt_data_all$timestamp[ pt_data_all$observation == "ec83f"] <- gsub("2010-08-11 04", "2023-02-10 15", pt_data_all$timestamp[ pt_data_all$observation == "ec83f"])
pt_data_all$timestamp[ pt_data_all$observation == "92b6a"] <- gsub("2010-08-11 04", "2023-02-09 15", pt_data_all$timestamp[ pt_data_all$observation == "92b6a"])

pt_data_all$observation[ pt_data_all$observation == "56443" &
                           # one is 2022, one is 2023
                           pt_data_all$timestamp > as.POSIXct("2023-02-01")] <- "56443a"

# delete stuff before we started
pt_data_all <- pt_data_all %>%
  filter(timestamp > as.POSIXct("2022-12-06"))

# fix the issue of double displays that happened before 2022-09-01
# 13_0_98 == 15_0_0
# 13_0_99 == 15_0_1
# figure out everyone who saw 15_100 and 15_101 which means extra
obs_extra <- pt_data_all %>%
  filter(grepl("15_0_100", sender_id)) %>%
  pull(observation) %>%
  unique()
# remove second instance of trials so 15_0_0* or 15_0_1*
# be specific because regex coding

pt_data_all <- pt_data_all %>%
  filter(!(observation %in% obs_extra &
             grepl("15_0_0_0$|15_0_0_1$|15_0_0$|15_0_1_0$|15_0_1_1$|15_0_1$", sender_id)
  ))

# timestamp is somewhat unreliable fix up sender_id
sender_ids <- import("/var/www/html/summary_data/sender_id.csv")
pt_data_all <- pt_data_all %>%
  left_join(sender_ids, by = "sender_id")

current_year <- 2024

##create demographics only data
demos <- pt_data_all %>% #data frame
  filter(sender == "Demographics Form") #filter out only demographics lines

pt_data_all$url_lab[is.na(pt_data_all$url_lab) & pt_data_all$sender == "Consent Form"] <- "2926"

##create experiment information data
exp <- pt_data_all %>%
  filter(sender == "Consent Form")

demo_cols <- c("observation", "duration",
               colnames(demos)[grep("^time", colnames(demos))],
               "please_tell_us_your_gender", "which_year_were_you_born",
               "please_tell_us_your_education_level", "native_language")
exp_cols <- c("observation", "duration",
              colnames(exp)[grep("^time", colnames(exp))],
              "url_lab",
              colnames(exp)[grep("meta", colnames(exp))])

participant_DF <- merge(demos[ , demo_cols],
                        exp[ , exp_cols],
                        by = "observation",
                        all = T)

colnames(participant_DF) <- gsub(".x$", "_demographics", colnames(participant_DF))
colnames(participant_DF) <- gsub(".y$", "_consent", colnames(participant_DF))

if (nrow(participant_DF) > 0){participant_DF$keep <- "keep"}

# only above 18
participant_DF$keep[(current_year - as.numeric(participant_DF$which_year_were_you_born)) < 18] <- "exclude"

# at least 100 trials + 80%
number_trials <- pt_data_all %>% #data frame
  filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
  group_by(observation) %>%
  summarize(n_trials = n(),
            correct = sum(correct, na.rm = T) / n(),
            n_answered = sum(!is.na(response_action)),
            start = min(timestamp),
            end = max(timestamp)) %>%
  mutate(study_length = difftime(end, start, units = "mins"))

# merge with participant data
participant_DF <- merge(participant_DF,
                        number_trials,
                        by = "observation")

# mark those last few as excluded
participant_DF$keep[participant_DF$n_trials < 100] <- "exclude"
participant_DF$keep[participant_DF$correct < .80] <- "exclude"

# grab only real trials
real_trials <- pt_data_all %>% #data frame
  filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
  select(observation, fix_sender, response, response_action, ended_on, duration,
         colnames(pt_data_all)[grep("^time", colnames(pt_data_all))],
         word, class, correct_response, correct)

# z score participant data
real_trials$original_duration <- real_trials$duration #hang on to original time

##Separate out NA data for the z-score part
##this mostly controls for timeouts
real_trials_NA <- real_trials %>% #data frame
  filter(is.na(correct) | #grab time out trials OR
           correct == FALSE | #grab incorrect trials OR
           duration < 160) %>%  #grab short rts
  mutate(Z_RT = NA, #set all Z_RTs to NA for these trials
         duration = NA,
         keep = "exclude")

##this section z-scores the rest of the data
##just not time outs
real_trials_nonNA <-
  real_trials %>% #data frame
  group_by(observation) %>% #group by participant
  filter(!is.na(correct)) %>% #take out the NA timeouts
  filter(correct == TRUE) %>% #only correct trials
  filter(duration >= 160) %>% #longer response latencies
  mutate(Z_RT = as.vector(scale(duration)), #create a z-score RT
         keep = "keep")

##put the time outs with the answered trials
real_trials <- bind_rows(real_trials_NA, real_trials_nonNA)

##indicate what participants to exclude
real_trials <- real_trials %>%
  left_join((participant_DF %>%
               select(observation, keep) %>%
               rename(keep_participant = keep)),
            by = c("observation" = "observation")) %>%
  # sort this so the trial type is right
  arrange(observation, fix_sender)

# figure out trial type

real_trials$trial_code <- NA
real_trials$which <- NA
# add that information
for (person in unique(real_trials$observation)){
  
  real_trials$trial_code[real_trials$observation == person] <-
    rep(1:401, each = 2, length.out = length(real_trials$trial_code[real_trials$observation == person]))
  
  real_trials$which[real_trials$observation == person] <-
    rep(c("cue", "target"), times = 2,
        length.out = length(real_trials$trial_code[real_trials$observation == person]))
  
}

# pivot wider with information you need
real_trials$unique_trial <- paste(real_trials$observation,
                                  real_trials$trial_code, sep = "_")
# do it with merge because ugh pivot
pt_real_wide <- merge(
  real_trials[real_trials$which == "cue" , ], #just cues
  real_trials[real_trials$which == "target" , ], #just targets
  by = "unique_trial",
  all = T
)
# take just what we need
pt_real_wide <- pt_real_wide[ , c("unique_trial", "observation.x", "word.x",
                                  "class.x", "correct.x", "trial_code.x",
                                  "duration.y", "word.y", "class.y", "correct.y",
                                  "Z_RT.y", "keep.y", "keep_participant.y",
                                  "ended_on.x", "ended_on.y")]
# good names
colnames(pt_real_wide) <- c("unique_trial", "observation", "cue_word",
                            "cue_type", "cue_correct", "trial_order",
                            "target_duration", "target_word", "target_type",
                            "target_correct", "target_Z_RT",
                            "keep_trial", "keep_participant",
                            "cue_end_of_trial", "target_end_of_trial")

# only focus on related-unrelated
pt_focus <- subset(pt_real_wide, target_type == "word" & cue_type == "word")
pt_focus$word_combo <- paste0(pt_focus$cue_word, pt_focus$target_word)

# add if it's related or unrelated
pt_words_together$word_combo <- paste0(pt_words_together$pt_cue, pt_words_together$pt_target)
pt_focus <- merge(pt_focus, pt_words_together[ , c("type", "word_combo")],
                  by = "word_combo", all.x = T)

### HERE YOU WILL TURN ON ###
# subset out NAs at some point they will be practice trials
# don't forget about the NA words 
pt_focus <- subset(pt_focus, !is.na(type))

# calculate the total N versus timeout N
pt_num_trials <- pt_focus %>%
  group_by(word_combo) %>%
  summarize(target_correct = sum(target_correct, na.rm = T),
            target_answeredN = sum(target_end_of_trial == "response", na.rm = T),
            target_timeoutN = sum(target_end_of_trial == "timeout", na.rm = T),
            target_prop_correct = target_correct/target_answeredN,
            cue_correct = sum(cue_correct, na.rm = T),
            cue_answeredN = sum(cue_end_of_trial == "response", na.rm = T),
            cue_timeoutN = sum(cue_end_of_trial == "timeout", na.rm = T),
            cue_prop_correct = cue_correct/cue_answeredN)

### HERE YOU WILL TURN ON ###
pt_focus <- subset(pt_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
pt_Z <- subset(pt_focus, target_correct == TRUE)
pt_Z <- subset(pt_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
pt_Z_summary <- pt_Z %>%
  group_by(word_combo) %>%
  summarize(M_Z = mean(target_Z_RT),
            SD_Z = sd(target_Z_RT),
            SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
            sampleN = length(target_Z_RT))

# merge with complete stimuli list ----
pt_merged <- merge(pt_words_together, pt_Z_summary,
                   by = "word_combo", all.x = T)

pt_merged <- merge(pt_merged, pt_num_trials,
                   by = "word_combo", all.x = T)

# Merge with Summary ------------------------------------------------------

old_pt_data <- import("/var/www/html/summary_data/pt_total_summary.csv")

pt_summaries <- bind_rows(pt_merged, old_pt_data)
# merge them together
pt_merged <- pt_summaries %>%
  select(-any_of(c("done_both", "done_totalN", "done", "pt_cosine"))) %>%
  group_by(word_combo, pt_cue, pt_target, type, cue_type,
           target_type) %>%
  summarize(M_Z = weighted.mean(M_Z, sampleN, na.rm = T),
            SD_Z = weighted.mean(SD_Z, sampleN, na.rm = T),
            SE_Z = weighted.mean(SE_Z, sampleN, na.rm = T),
            sampleN = sum(sampleN, na.rm = T),
            target_correct = sum(target_correct, na.rm = T),
            target_answeredN = sum(target_answeredN, na.rm = T),
            target_timeoutN = sum(target_timeoutN, na.rm = T),
            target_prop_correct = target_correct/target_answeredN * 100,
            cue_correct = sum(cue_correct, na.rm = T),
            cue_answeredN = sum(cue_answeredN, na.rm = T),
            cue_timeoutN = sum(cue_timeoutN, na.rm = T),
            cue_prop_correct = cue_correct/cue_answeredN * 100, .groups  = "keep")

# merge in where
pt_merged <- pt_merged %>% 
  left_join(pt_data_stimuli %>% 
              select(pt_cue, pt_target, where_pt)) %>% 
  left_join(br_data_stimuli %>% 
              select(pt_cue, pt_target, where_br))

# are we done? ----
pt_merged$done_both <- (pt_merged$target_answeredN >= 50 & pt_merged$SE_Z <= .09) | pt_merged$target_answeredN >= 320
pt_merged$done_totalN <- pt_merged$target_answeredN >= 50
pt_merged$done <- pt_merged$sampleN >= 50

# generate summary chart for shiny ----
write.csv(pt_merged, "/var/www/html/summary_data/pt_together_summary.csv", row.names = F)

# Generate ----------------------------------------------------------------

# generate for PT ----
pt_use <- subset(pt_merged, is.na(done_totalN) | done_totalN == FALSE) %>% 
  filter(where_pt == 1)
pt_sample <- subset(pt_merged, done_totalN == TRUE) %>% 
  filter(where_pt == 1)

# loop over the number of random folders you need
number_folders <- 2
for (i in 1:number_folders){
  
  if (i == 1){ folder_num <- "" } else { folder_num <- i-1 }
  
  # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
  # 150 non word non word = 300 trials
  if (nrow(pt_use[pt_use$cue_type == "nonword" &
                  pt_use$target_type == "nonword", ]) >= 150){
    
    temp <- subset(pt_use,
                   pt_use$cue_type == "nonword" &
                     pt_use$target_type == "nonword")
    nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]
    
  }else{
    
    nonwords <- pt_use[pt_use$cue_type == "nonword" &
                         pt_use$target_type == "nonword", ]
    temp <- subset(pt_sample,
                   pt_use$cue_type == "nonword" &
                     pt_use$target_type == "nonword")
    nonwords <- rbind(nonwords,
                      temp[sample(1:nrow(temp),
                                  150-nrow(nonwords),
                                  replace = F), ])
  }
  
  # 100 non word non word = 200 trials
  if (nrow(pt_use[(pt_use$cue_type == "nonword" &
                   pt_use$target_type == "word") |
                  (pt_use$cue_type == "word" &
                   pt_use$target_type == "nonword"), ]) >= 100){
    
    temp <- subset(pt_use,
                   (pt_use$cue_type == "nonword" &
                      pt_use$target_type == "word") |
                     (pt_use$cue_type == "word" &
                        pt_use$target_type == "nonword"))
    nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]
    
  }else{
    
    nonwords_mix <- pt_use[(pt_use$cue_type == "nonword" &
                              pt_use$target_type == "word") |
                             (pt_use$cue_type == "word" &
                                pt_use$target_type == "nonword"), ]
    temp <- subset(pt_sample,
                   (pt_use$cue_type == "nonword" &
                      pt_use$target_type == "word") |
                     (pt_use$cue_type == "word" &
                        pt_use$target_type == "nonword"))
    nonwords_mix <- rbind(nonwords_mix,
                          temp[sample(1:nrow(temp),
                                      100-nrow(nonwords_mix),
                                      replace = F), ])
  }
  
  # 75 related pairs = 150 trials
  if (nrow(pt_use[pt_use$type == "related" , ]) >= 75){
    
    temp <- subset(pt_use, type == "related")
    related <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    related <- pt_use[pt_use$type == "related", ]
    temp <- subset(pt_sample, type == "related")
    related <- rbind(related,
                     temp[sample(1:nrow(temp),
                                 75-nrow(related),
                                 replace = F), ])
  }
  
  # 75 unrelated pairs = 150 trials
  if (nrow(pt_use[pt_use$type == "unrelated" , ]) >= 75){
    
    temp <- subset(pt_use, type == "unrelated")
    unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    unrelated <- pt_use[pt_use$type == "unrelated", ]
    temp <- subset(pt_sample, type == "unrelated")
    unrelated <- rbind(unrelated,
                       temp[sample(1:nrow(temp),
                                   75-nrow(unrelated),
                                   replace = F), ])
  }
  
  # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice
  
  practice <- '[
  {"word": "sneife", "class": "nonword"},
  {"word": "lábios", "class": "word"},
  {"word": "alcatrão", "class": "word"},
  {"word": "sodol", "class": "nonword"},
  {"word": "nwede", "class": "nonword"},
  {"word": "presente", "class": "word"},
  {"word": "kegthe", "class": "nonword"},
  {"word": "tomada", "class": "word"},
  {"word": "ethorar", "class": "nonword"},
  {"word": "bota", "class": "word"}]'
  
  writeLines(practice, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))
  
  all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
  all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
  all_trials$together <- paste('{"word": "',
                               all_trials$pt_cue,
                               '", "class": "',
                               all_trials$cue_type,
                               '"}, ', #cue
                               '{"word": "',
                               all_trials$pt_target,
                               '", "class": "',
                               all_trials$target_type,
                               '"}', sep = "")
  
  
  # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1
  
  # remember these come in pairs
  real <- paste('[',
                paste(all_trials$together[1:50], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))
  
  # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2
  
  real <- paste('[',
                paste(all_trials$together[51:100], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))
  
  # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3
  
  real <- paste('[',
                paste(all_trials$together[101:150], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))
  
  # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4
  
  real <- paste('[',
                paste(all_trials$together[151:200], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))
  
  # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5
  
  real <- paste('[',
                paste(all_trials$together[201:250], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))
  
  # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
  real <- paste('[',
                paste(all_trials$together[251:300], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))
  
  # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
  real <- paste('[',
                paste(all_trials$together[301:350], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))
  
  # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
  real <- paste('[',
                paste(all_trials$together[351:400], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/pt", folder_num,
    "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))
  
}

# generate for BR ----
br_pt_use <- subset(pt_merged, is.na(done_totalN) | done_totalN == FALSE) %>% 
  filter(where_br == 1)
br_pt_sample <- subset(pt_merged, done_totalN == TRUE) %>% 
  filter(where_br == 1)

# loop over the number of random folders you need
number_folders <- 1
for (i in 1:number_folders){
  
  if (i == 1){ folder_num <- "" } else { folder_num <- i-1 }
  
  # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
  # 150 non word non word = 300 trials
  if (nrow(br_pt_use[br_pt_use$cue_type == "nonword" &
                     br_pt_use$target_type == "nonword", ]) >= 150){
    
    temp <- subset(br_pt_use,
                   br_pt_use$cue_type == "nonword" &
                     br_pt_use$target_type == "nonword")
    nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]
    
  }else{
    
    nonwords <- br_pt_use[br_pt_use$cue_type == "nonword" &
                            br_pt_use$target_type == "nonword", ]
    temp <- subset(br_pt_sample,
                   br_pt_use$cue_type == "nonword" &
                     br_pt_use$target_type == "nonword")
    nonwords <- rbind(nonwords,
                      temp[sample(1:nrow(temp),
                                  150-nrow(nonwords),
                                  replace = F), ])
  }
  
  # 100 non word non word = 200 trials
  if (nrow(br_pt_use[(br_pt_use$cue_type == "nonword" &
                      br_pt_use$target_type == "word") |
                     (br_pt_use$cue_type == "word" &
                      br_pt_use$target_type == "nonword"), ]) >= 100){
    
    temp <- subset(br_pt_use,
                   (br_pt_use$cue_type == "nonword" &
                      br_pt_use$target_type == "word") |
                     (br_pt_use$cue_type == "word" &
                        br_pt_use$target_type == "nonword"))
    nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]
    
  }else{
    
    nonwords_mix <- br_pt_use[(br_pt_use$cue_type == "nonword" &
                                 br_pt_use$target_type == "word") |
                                (br_pt_use$cue_type == "word" &
                                   br_pt_use$target_type == "nonword"), ]
    temp <- subset(br_pt_sample,
                   (br_pt_use$cue_type == "nonword" &
                      br_pt_use$target_type == "word") |
                     (br_pt_use$cue_type == "word" &
                        br_pt_use$target_type == "nonword"))
    nonwords_mix <- rbind(nonwords_mix,
                          temp[sample(1:nrow(temp),
                                      100-nrow(nonwords_mix),
                                      replace = F), ])
  }
  
  # 75 related pairs = 150 trials
  if (nrow(br_pt_use[br_pt_use$type == "related" , ]) >= 75){
    
    temp <- subset(br_pt_use, type == "related")
    related <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    related <- br_pt_use[br_pt_use$type == "related", ]
    temp <- subset(br_pt_sample, type == "related")
    related <- rbind(related,
                     temp[sample(1:nrow(temp),
                                 75-nrow(related),
                                 replace = F), ])
  }
  
  # 75 unrelated pairs = 150 trials
  if (nrow(br_pt_use[br_pt_use$type == "unrelated" , ]) >= 75){
    
    temp <- subset(br_pt_use, type == "unrelated")
    unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    unrelated <- br_pt_use[br_pt_use$type == "unrelated", ]
    temp <- subset(br_pt_sample, type == "unrelated")
    unrelated <- rbind(unrelated,
                       temp[sample(1:nrow(temp),
                                   75-nrow(unrelated),
                                   replace = F), ])
  }
  
  # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice
  
  practice <- '[
  {"word": "sneife", "class": "nonword"},
  {"word": "lábios", "class": "word"},
  {"word": "alcatrão", "class": "word"},
  {"word": "sodol", "class": "nonword"},
  {"word": "nwede", "class": "nonword"},
  {"word": "presente", "class": "word"},
  {"word": "kegthe", "class": "nonword"},
  {"word": "tomada", "class": "word"},
  {"word": "ethorar", "class": "nonword"},
  {"word": "bota", "class": "word"}]'
  
  writeLines(practice, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))
  
  all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
  all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
  all_trials$together <- paste('{"word": "',
                               all_trials$pt_cue,
                               '", "class": "',
                               all_trials$cue_type,
                               '"}, ', #cue
                               '{"word": "',
                               all_trials$pt_target,
                               '", "class": "',
                               all_trials$target_type,
                               '"}', sep = "")
  
  
  # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1
  
  # remember these come in pairs
  real <- paste('[',
                paste(all_trials$together[1:50], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))
  
  # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2
  
  real <- paste('[',
                paste(all_trials$together[51:100], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))
  
  # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3
  
  real <- paste('[',
                paste(all_trials$together[101:150], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))
  
  # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4
  
  real <- paste('[',
                paste(all_trials$together[151:200], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))
  
  # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5
  
  real <- paste('[',
                paste(all_trials$together[201:250], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))
  
  # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
  real <- paste('[',
                paste(all_trials$together[251:300], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))
  
  # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
  real <- paste('[',
                paste(all_trials$together[301:350], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))
  
  # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
  real <- paste('[',
                paste(all_trials$together[351:400], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/br_pt", folder_num,
    "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))
  
}

# generate for COMBO ----
combo_use <- subset(pt_merged, is.na(done_totalN) | done_totalN == FALSE) 
combo_sample <- subset(pt_merged, done_totalN == TRUE) 

# loop over the number of random folders you need
# pt3, pt4, pt5
# br_pt1, br_pt2, br_pt3
folder_list <- c("pt3", "pt4", "pt5", "br_pt1", "br_pt2", "br_pt3")
for (i in 1:length(folder_list)){
  
  folder_num <- folder_list[i]
  
  # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
  # 150 non word non word = 300 trials
  if (grepl("br", folder_num)){
    combo_use2 <- bind_rows(
      # just br nonwords
      combo_use %>% filter(where_br == 1) %>% filter(type == "nonword"),
      # all real words 
      combo_use %>% filter(type != "nonword")
    )
    
    combo_sample2 <- bind_rows(
      # just br nonwords
      combo_sample %>% filter(where_br == 1) %>% filter(type == "nonword"),
      # all real words 
      combo_sample %>% filter(type != "nonword")
    )
  } else {
    
    combo_use2 <- bind_rows(
      # just pt nonwords
      combo_use %>% filter(where_pt == 1) %>% filter(type == "nonword"),
      # all real words 
      combo_use %>% filter(type != "nonword")
    )
    
    combo_sample2 <- bind_rows(
      # just pt nonwords
      combo_sample %>% filter(where_pt == 1) %>% filter(type == "nonword"),
      # all real words 
      combo_sample %>% filter(type != "nonword")
    )
    
  }
  
  if (nrow(combo_use2[combo_use2$cue_type == "nonword" &
                  combo_use2$target_type == "nonword", ]) >= 150){
    
    temp <- subset(combo_use2,
                   combo_use2$cue_type == "nonword" &
                     combo_use2$target_type == "nonword")
    nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]
    
  }else{
    
    nonwords <- combo_use2[combo_use2$cue_type == "nonword" &
                         combo_use2$target_type == "nonword", ]
    temp <- subset(combo_sample2,
                   combo_use2$cue_type == "nonword" &
                     combo_use2$target_type == "nonword")
    nonwords <- rbind(nonwords,
                      temp[sample(1:nrow(temp),
                                  150-nrow(nonwords),
                                  replace = F), ])
  }
  
  # 100 non word non word = 200 trials
  if (nrow(combo_use2[(combo_use2$cue_type == "nonword" &
                   combo_use2$target_type == "word") |
                  (combo_use2$cue_type == "word" &
                   combo_use2$target_type == "nonword"), ]) >= 100){
    
    temp <- subset(combo_use2,
                   (combo_use2$cue_type == "nonword" &
                      combo_use2$target_type == "word") |
                     (combo_use2$cue_type == "word" &
                        combo_use2$target_type == "nonword"))
    nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]
    
  }else{
    
    nonwords_mix <- combo_use2[(combo_use2$cue_type == "nonword" &
                              combo_use2$target_type == "word") |
                             (combo_use2$cue_type == "word" &
                                combo_use2$target_type == "nonword"), ]
    temp <- subset(combo_sample2,
                   (combo_use2$cue_type == "nonword" &
                      combo_use2$target_type == "word") |
                     (combo_use2$cue_type == "word" &
                        combo_use2$target_type == "nonword"))
    nonwords_mix <- rbind(nonwords_mix,
                          temp[sample(1:nrow(temp),
                                      100-nrow(nonwords_mix),
                                      replace = F), ])
  }
  
  # 75 related pairs = 150 trials
  if (nrow(combo_use2[combo_use2$type == "related" , ]) >= 75){
    
    temp <- subset(combo_use2, type == "related")
    related <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    related <- combo_use2[combo_use2$type == "related", ]
    temp <- subset(combo_sample2, type == "related")
    related <- rbind(related,
                     temp[sample(1:nrow(temp),
                                 75-nrow(related),
                                 replace = F), ])
  }
  
  # 75 unrelated pairs = 150 trials
  if (nrow(combo_use2[combo_use2$type == "unrelated" , ]) >= 75){
    
    temp <- subset(combo_use2, type == "unrelated")
    unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    unrelated <- combo_use2[combo_use2$type == "unrelated", ]
    temp <- subset(combo_sample2, type == "unrelated")
    unrelated <- rbind(unrelated,
                       temp[sample(1:nrow(temp),
                                   75-nrow(unrelated),
                                   replace = F), ])
  }
  
  # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice
  
  practice <- '[
  {"word": "sneife", "class": "nonword"},
  {"word": "lábios", "class": "word"},
  {"word": "alcatrão", "class": "word"},
  {"word": "sodol", "class": "nonword"},
  {"word": "nwede", "class": "nonword"},
  {"word": "presente", "class": "word"},
  {"word": "kegthe", "class": "nonword"},
  {"word": "tomada", "class": "word"},
  {"word": "ethorar", "class": "nonword"},
  {"word": "bota", "class": "word"}]'
  
  writeLines(practice, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))
  
  all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
  all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
  all_trials$together <- paste('{"word": "',
                               all_trials$pt_cue,
                               '", "class": "',
                               all_trials$cue_type,
                               '"}, ', #cue
                               '{"word": "',
                               all_trials$pt_target,
                               '", "class": "',
                               all_trials$target_type,
                               '"}', sep = "")
  
  
  # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1
  
  # remember these come in pairs
  real <- paste('[',
                paste(all_trials$together[1:50], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))
  
  # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2
  
  real <- paste('[',
                paste(all_trials$together[51:100], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))
  
  # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3
  
  real <- paste('[',
                paste(all_trials$together[101:150], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))
  
  # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4
  
  real <- paste('[',
                paste(all_trials$together[151:200], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))
  
  # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5
  
  real <- paste('[',
                paste(all_trials$together[201:250], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))
  
  # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
  real <- paste('[',
                paste(all_trials$together[251:300], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))
  
  # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
  real <- paste('[',
                paste(all_trials$together[301:350], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))
  
  # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
  real <- paste('[',
                paste(all_trials$together[351:400], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = paste0(
    "/var/www/html/", folder_num,
    "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))
  
}

