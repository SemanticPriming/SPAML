# Information -------------------------------------------------------------

# This R script reads in the data from the SPAML experiment and then:
# removes incorrect trials since they don't count
# removes participants who could not get 80% correct on 100 minimum trials
# z scores each participants data 
# calculates word, sample size, SE, "done" with <= .09 SE 
# creates participant ID list by lab 

# From this data, the R script:
# Writes out 8 blocks of 100 words that are probabilistically selected
# Writes out summary table
# Writes out participant summary 

# Libraries ---------------------------------------------------------------

library(rio)
library(RSQLite)
library(dplyr)
library(tidyverse)
library(jsonlite)
library(janitor)
library(widyr)

# Functions ---------------------------------------------------------------

# from labjs docs
processData <- function(database) {
  con <- dbConnect(
    drv=RSQLite::SQLite(),
    dbname=database
  )
  
  # Extract main table
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
}

# Data --------------------------------------------------------------------

# original word lists
ru_words <- import("/var/www/html/ru/ru_words.csv")

# collected data
ru_data_all <- processData("/var/www/html/ru/data/data.sqlite")

# Clean Up ----------------------------------------------------------------

# Participant did not indicate at least 18 years of age. 
# Participant did not complete at least 100 trials. 
# Participant did not achieve 80% correct.
current_year <- 2022

##create demographics only data
demos <- ru_data_all %>% #data frame
  filter(sender == "Demographics Form") #filter out only demographics lines

##create experiment information data
exp <- ru_data_all %>% 
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

participant_DF$keep <- "keep"

# only above 18
participant_DF$keep[(current_year - as.numeric(participant_DF$which_year_were_you_born)) < 18] <- "exclude"

# at least 100 trials + 80%
number_trials <- ru_data_all %>% #data frame
  filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
  group_by(observation) %>% 
  summarize(n_trials = n(), 
            correct = sum(correct, na.rm = T) / n())

# merge with participant data
participant_DF <- merge(participant_DF, 
                        number_trials,
                        by = "observation")

# mark those last few as excluded
participant_DF$keep[participant_DF$n_trials < 100] <- "exclude"
participant_DF$keep[participant_DF$correct < .80] <- "exclude"

# grab only real trials ----
real_trials <- ru_data_all %>% #data frame
  filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
  select(observation, sender_id, response, response_action, ended_on, duration,
         colnames(ru_data_all)[grep("^time", colnames(ru_data_all))], 
         word, class, correct_response, correct)

# z score participant data ----
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
            by = c("observation" = "observation"))

# figure out trial type ----

real_trials$trial_code <- NA
real_trials$which <- NA
# add that information 
for (person in unique(real_trials$observation)){
  
  real_trials$trial_code[real_trials$observation == person] <- 
    rep(1:400, each = 2, length.out = length(real_trials$trial_code[real_trials$observation == person]))
  
  real_trials$which[real_trials$observation == person] <-
    rep(c("cue", "target"), times = 2, 
        length.out = length(real_trials$trial_code[real_trials$observation == person]))
  
}

# pivot wider with information you need
real_trials$unique_trial <- paste(real_trials$observation, 
                                  real_trials$trial_code, sep = "_")
# do it with merge because ugh pivot
ru_real_wide <- merge(
  real_trials[real_trials$which == "cue" , ], #just cues
  real_trials[real_trials$which == "target" , ], #just targets
  by = "unique_trial",
  all = T
)
# take just what we need
ru_real_wide <- ru_real_wide[ , c("unique_trial", "observation.x", "word.x", 
                                  "class.x", "correct.x", "trial_code.x", 
                                  "duration.y", "word.y", "class.y", "correct.y", 
                                  "Z_RT.y", "keep.y", "keep_participant.y")]
# good names
colnames(ru_real_wide) <- c("unique_trial", "observation", "cue_word", 
                            "cue_type", "cue_correct", "trial_order", 
                            "target_duration", "target_word", "target_type", 
                            "target_correct", "target_Z_RT",
                            "keep_trial", "keep_participant")

# only focus on related-unrelated
ru_focus <- subset(ru_real_wide, target_type == "word" & cue_type == "word")
ru_focus$word_combo <- paste0(ru_focus$cue_word, ru_focus$target_word)

# add if it's related or unrelated
ru_words$word_combo <- paste0(ru_words$ru_cue, ru_words$ru_target)
ru_focus <- merge(ru_focus, ru_words[ , c("type", "word_combo")], 
                  by = "word_combo", all.x = T)

### HERE YOU WILL TURN ON ###
# subset out NAs at some point they will be practice trials
ru_focus <- subset(ru_focus, !is.na(type))

### HERE YOU WILL TURN ON ###
ru_focus <- subset(ru_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
ru_Z <- subset(ru_focus, target_correct == TRUE)
ru_Z <- subset(ru_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
ru_Z_summary <- ru_Z %>% 
  group_by(word_combo) %>% 
  summarize(M_Z = mean(target_Z_RT),
            SD_Z = sd(target_Z_RT),
            SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
            sampleN = length(target_Z_RT))

# are we done? ---- 
ru_Z_summary$done <- (ru_Z_summary$sampleN >= 50 & ru_Z_summary$SE_Z <= .09) | ru_Z_summary$sampleN >= 320

# merge with complete stimuli list ---- 
ru_merged <- merge(ru_words, ru_Z_summary, 
                   by = "word_combo", all.x = T)

# use data ----
ru_use <- subset(ru_merged, is.na(done) | done == FALSE)
ru_sample <- subset(ru_merged, done == TRUE)

# Generate ----------------------------------------------------------------

# generate summary chart for shiny ----
write.csv(ru_merged, "/var/www/html/ru/data/ru_summary.csv", row.names = F)

# generate participant report for shiny ----
p_end <- ru_data_all$observation[ru_data_all$sender == "Real Frame Task 6"]
p_lab <- ru_data_all[ru_data_all$observation %in% p_end, ]
p_lab <- p_lab[!is.na(p_lab$url_lab), ]
#p_lab <- p_lab[!is.na(p_lab$uuid), ]
p_lab <- p_lab[ , c("url_lab", "timestamp", "uuid")]
write.csv(p_lab, "/var/www/html/ru/data/ru_participants.csv", row.names = F)

# generate new stimuli ----

# eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
# 150 non word non word = 300 trials
if (nrow(ru_use[ru_use$cue_type == "nonword" &
                ru_use$target_type == "nonword", ]) >= 150){
  
  temp <- subset(ru_use, 
                 ru_use$cue_type == "nonword" &
                   ru_use$target_type == "nonword")
  nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]
  
}else{
  
  nonwords <- ru_use[ru_use$cue_type == "nonword" &
                       ru_use$target_type == "nonword", ]
  temp <- subset(ru_sample, 
                 ru_use$cue_type == "nonword" &
                   ru_use$target_type == "nonword")
  nonwords <- rbind(nonwords, 
                    temp[sample(1:nrow(temp), 
                                150-nrow(nonwords), 
                                replace = F), ])
}

# 100 non word non word = 200 trials
if (nrow(ru_use[(ru_use$cue_type == "nonword" &
                 ru_use$target_type == "word") | 
                (ru_use$cue_type == "word" & 
                 ru_use$target_type == "nonword"), ]) >= 100){
  
  temp <- subset(ru_use, 
                 (ru_use$cue_type == "nonword" &
                    ru_use$target_type == "word") | 
                   (ru_use$cue_type == "word" & 
                      ru_use$target_type == "nonword"))
  nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]
  
}else{
  
  nonwords_mix <- ru_use[(ru_use$cue_type == "nonword" &
                            ru_use$target_type == "word") | 
                           (ru_use$cue_type == "word" & 
                              ru_use$target_type == "nonword"), ]
  temp <- subset(ru_sample, 
                 (ru_use$cue_type == "nonword" &
                    ru_use$target_type == "word") | 
                   (ru_use$cue_type == "word" & 
                      ru_use$target_type == "nonword"))
  nonwords_mix <- rbind(nonwords_mix, 
                        temp[sample(1:nrow(temp), 
                                    100-nrow(nonwords_mix), 
                                    replace = F), ])
}

# 75 related pairs = 150 trials
if (nrow(ru_use[ru_use$type == "related" , ]) >= 75){
  
  temp <- subset(ru_use, type == "related")
  related <- temp[sample(1:nrow(temp), 75, replace = F), ]
  
}else{
  
  related <- ru_use[ru_use$type == "related", ]
  temp <- subset(ru_sample, type == "related")
  related <- rbind(related, 
                   temp[sample(1:nrow(temp), 
                               75-nrow(related), 
                               replace = F), ])
}  

# 75 unrelated pairs = 150 trials
if (nrow(ru_use[ru_use$type == "unrelated" , ]) >= 75){
  
  temp <- subset(ru_use, type == "unrelated")
  unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]
  
}else{
  
  unrelated <- ru_use[ru_use$type == "unrelated", ]
  temp <- subset(ru_sample, type == "unrelated")
  unrelated <- rbind(unrelated, 
                     temp[sample(1:nrow(temp), 
                                 75-nrow(unrelated), 
                                 replace = F), ])
}  

# db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice

practice <- '[
  {"word": "афсн", "class": "nonword"},
  {"word": "губы", "class": "word"},
  {"word": "смола", "class": "word"},
  {"word": "рику", "class": "nonword"},
  {"word": "шре", "class": "nonword"},
  {"word": "подарок", "class": "word"},
  {"word": "ккуку", "class": "nonword"},
  {"word": "выстрелил", "class": "word"},
  {"word": "следатовь", "class": "nonword"},
  {"word": "ботинок", "class": "word"}]'
writeLines(practice, con = "/var/www/html/ru/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json")

all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
all_trials$together <- paste('{"word": "',
                             all_trials$ru_cue, 
                             '", "class": "',
                             all_trials$cue_type, 
                             '"}, ', #cue
                             '{"word": "',
                             all_trials$ru_target, 
                             '", "class": "',
                             all_trials$target_type, 
                             '"}', sep = "")


# 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1

# remember these come in pairs
real <- paste('[', 
              paste(all_trials$together[1:50], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json")

# ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2

real <- paste('[', 
              paste(all_trials$together[51:100], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json")

# 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3

real <- paste('[', 
              paste(all_trials$together[101:150], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json")

# 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4

real <- paste('[', 
              paste(all_trials$together[151:200], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json")

# 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5

real <- paste('[', 
              paste(all_trials$together[201:250], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json")

# cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
real <- paste('[', 
              paste(all_trials$together[250:300], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json")

# c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
real <- paste('[', 
              paste(all_trials$together[301:350], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json")

# 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
real <- paste('[', 
              paste(all_trials$together[351:400], collapse = ",", sep = ""),
              ']', collapse = "", sep = "")
writeLines(real, con = "/var/www/html/ru/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json")


