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
  # should usually be enough, but better safe)
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
tr_words <- import("/var/www/html/tr/tr_words.csv")

# collected data
tr_data_all <-
  list(processData("/var/www/html/tr/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr1/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr2/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr3/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr4/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr5/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr6/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr7/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr8/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr9/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr10/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr11/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr12/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr13/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/tr14/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character))

  for (i in 1:length(tr_data_all)){
    tr_data_all[[i]] <- tr_data_all[[i]] %>% mutate_at(vars(one_of("url_special_code")), as.character)
  }

  tr_data_all <- bind_rows(tr_data_all) %>% unique()

# delete stuff before we started ----
tr_data_all <- tr_data_all %>%
  filter(timestamp > as.POSIXct("2022-08-27"))

# fix the issue of double displays that happened before 2022-09-01
# 13_0_98 == 15_0_0
# 13_0_99 == 15_0_1
# figure out everyone who saw 15_100 and 15_101 which means extra
obs_extra <- tr_data_all %>%
  filter(grepl("15_0_100", sender_id)) %>%
  pull(observation) %>%
  unique()
# remove second instance of trials so 15_0_0* or 15_0_1*
# be specific because regex coding

tr_data_all <- tr_data_all %>%
  filter(!(observation %in% obs_extra &
             grepl("15_0_0_0$|15_0_0_1$|15_0_0$|15_0_1_0$|15_0_1_1$|15_0_1$", sender_id)
  ))

  # timestamp is somewhat unreliable fix up sender_id
sender_ids <- import("/var/www/html/summary_data/sender_id.csv")
tr_data_all <- tr_data_all %>%
  left_join(sender_ids, by = "sender_id")

# Clean Up ----------------------------------------------------------------

# Participant did not indicate at least 18 years of age.
# Participant did not complete at least 100 trials.
# Participant did not achieve 80% correct.
current_year <- 2023
number_folders <- 15
static <- FALSE
adaptive <- TRUE

##create demographics only data
demos <- tr_data_all %>% #data frame
  filter(sender == "Demographics Form") #filter out only demographics lines

##create experiment information data
exp <- tr_data_all %>%
  filter(sender == "Consent Form")

demo_cols <- c("observation", "duration",
               colnames(demos)[grep("^time", colnames(demos))],
               "please_tell_us_your_gender", "which_year_were_you_born",
               "please_tell_us_your_education_level", "native_language",
               "url_special_code")
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
number_trials <- tr_data_all %>% #data frame
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

# grab only real trials ----
real_trials <- tr_data_all %>% #data frame
  filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
  select(observation, fix_sender, response, response_action, ended_on, duration,
         colnames(tr_data_all)[grep("^time", colnames(tr_data_all))],
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
            by = c("observation" = "observation")) %>%
  # sort this so the trial type is right
  arrange(observation, fix_sender)

# figure out trial type ----

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
tr_real_wide <- merge(
  real_trials[real_trials$which == "cue" , ], #just cues
  real_trials[real_trials$which == "target" , ], #just targets
  by = "unique_trial",
  all = T
)
# take just what we need
tr_real_wide <- tr_real_wide[ , c("unique_trial", "observation.x", "word.x",
                                  "class.x", "correct.x", "trial_code.x",
                                  "duration.y", "word.y", "class.y", "correct.y",
                                  "Z_RT.y", "keep.y", "keep_participant.y",
                                  "ended_on.x", "ended_on.y")]
# good names
colnames(tr_real_wide) <- c("unique_trial", "observation", "cue_word",
                            "cue_type", "cue_correct", "trial_order",
                            "target_duration", "target_word", "target_type",
                            "target_correct", "target_Z_RT",
                            "keep_trial", "keep_participant",
                            "cue_end_of_trial", "target_end_of_trial")

# only focus on related-unrelated
tr_focus <- subset(tr_real_wide, target_type == "word" & cue_type == "word")
tr_focus$word_combo <- paste0(tr_focus$cue_word, tr_focus$target_word)

# add if it's related or unrelated
tr_words$word_combo <- paste0(tr_words$tr_cue, tr_words$tr_target)
tr_focus <- merge(tr_focus, tr_words[ , c("type", "word_combo")],
                  by = "word_combo", all.x = T)

### HERE YOU WILL TURN ON ###
# subset out NAs at some point they will be practice trials
tr_focus <- subset(tr_focus, !is.na(type))

# calculate the total N versus timeout N
tr_num_trials <- tr_focus %>%
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
tr_focus <- subset(tr_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
tr_Z <- subset(tr_focus, target_correct == TRUE)
tr_Z <- subset(tr_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
tr_Z_summary <- tr_Z %>%
  group_by(word_combo) %>%
  summarize(M_Z = mean(target_Z_RT),
            SD_Z = sd(target_Z_RT),
            SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
            sampleN = length(target_Z_RT))

# merge with complete stimuli list ----
tr_merged <- merge(tr_words, tr_Z_summary,
                   by = "word_combo", all.x = T)

tr_merged <- merge(tr_merged, tr_num_trials,
                   by = "word_combo", all.x = T)

# merge with old data ----
# pull in other information from previous weeks
list_tr_data <- lapply(list.files(path = "/var/www/html/summary_data",
                                  pattern = "tr_summary_[0-9].*.csv", full.names = T),
                       import)
tr_summaries <- bind_rows(list_tr_data, tr_merged)
tr_merged <- tr_summaries %>%
  select(-done_both, -done_totalN, -done) %>%
  group_by(word_combo, tr_cue, tr_target, type, cue_type,
           target_type, tr_cosine) %>%
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
            cue_prop_correct = cue_correct/cue_answeredN * 100,
            across(), .groups  = "keep")

# are we done? ----
tr_merged$done_both <- (tr_merged$target_answeredN >= 50 & tr_merged$SE_Z <= .09) | tr_merged$target_answeredN >= 320
tr_merged$done_totalN <- tr_merged$target_answeredN >= 50
tr_merged$done <- tr_merged$sampleN >= 50

# use data ----
tr_use <- subset(tr_merged, is.na(done_both) | done_both == FALSE)
tr_sample <- subset(tr_merged, done_both == TRUE)

# Generate ----------------------------------------------------------------

# generate summary chart for shiny ----
write.csv(tr_merged, "/var/www/html/summary_data/tr_summary.csv", row.names = F)

# generate participant report for shiny ----
p_end <- tr_data_all %>%
  filter(sender == "Stimulus Real") %>%
  group_by(observation) %>%
  summarize(n = n()) %>%
  filter(n >= 100) %>%
  pull(observation)

p_lab <- tr_data_all[tr_data_all$observation %in% p_end, ]
p_lab <- p_lab[!is.na(p_lab$url_lab), ]
p_lab <- p_lab %>%
  left_join(participant_DF %>%
              select(keep, n_trials, correct, n_answered, observation,
                     start, end, study_length),
            by = c("observation" = "observation"))
p_lab <- p_lab[ , c("url_lab", "timestamp", "uuid", "url_special_code",
                    "keep", "n_trials", "correct.y", "n_answered",
                    "start", "end", "study_length")]

# merge with old data ----
# pull in other information from previous weeks
list_tr_data <- lapply(list.files(path = "/var/www/html/summary_data",
                                  pattern = "tr_participants_[0-9].*.csv", full.names = T),
                       import)

list_tr_data <- lapply(list_tr_data, function(df) dplyr::mutate_at(df, vars(matches("url_lab")), as.character))
list_tr_data <- lapply(list_tr_data, function(df) dplyr::mutate_at(df, vars(matches("url_special_code")), as.character))
list_tr_data <- list_tr_data[lapply(list_tr_data, nrow) > 0]

if (nrow(p_lab) > 0){
  if (length(list_tr_data) > 0){
  p_lab <- unique(bind_rows(bind_rows(list_tr_data) %>%
                              mutate(url_lab = as.character(url_lab),
                                     url_special_code = as.character(url_special_code)),
                            p_lab %>%
                              mutate(url_special_code = as.character(url_special_code),
                                     study_length = as.numeric(study_length))))
                                     }
} else {
  p_lab <- unique(bind_rows(list_tr_data))
}


write.csv(p_lab, "/var/www/html/summary_data/tr_participants.csv", row.names = F)

# generate new stimuli STATIC ----

if (static == TRUE){

  # loop over the number of random folders you need
  # create 14 different versions
  # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
  # 150 non word non word = 300 trials
  temp <- subset(tr_merged,
                 tr_merged$cue_type == "nonword" &
                   tr_merged$target_type == "nonword")
  # shuffle the words
  nonwords <- temp[sample(1:nrow(temp), nrow(temp), replace = F), ]

  # 100 non word non word = 200 trials
  temp <- subset(tr_merged,
                 (tr_merged$cue_type == "nonword" &
                    tr_merged$target_type == "word") |
                   (tr_merged$cue_type == "word" &
                      tr_merged$target_type == "nonword"))
  # shuffle the words
  nonwords_mix <- temp[sample(1:nrow(temp), nrow(temp), replace = F), ]

  # 75 related pairs = 150 trials
  temp <- subset(tr_merged, type == "related")
  # shuffle the words
  related <- temp[sample(1:nrow(temp), nrow(temp), replace = F), ]

  # 75 unrelated pairs = 150 trials
  temp <- subset(tr_merged, type == "unrelated") %>% unique()
  unrelated <- temp[sample(1:nrow(temp), nrow(temp), replace = F), ]

  # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice
  # write practice to all folders
  practice <- '[
  {"word": "nefsg", "class": "nonword"},
  {"word": "dudaklar", "class": "word"},
  {"word": "katran", "class": "word"},
  {"word": "traklı", "class": "nonword"},
  {"word": "yenipiş", "class": "nonword"},
  {"word": "hediye", "class": "word"},
  {"word": "hesmak", "class": "nonword"},
  {"word": "atış", "class": "word"},
  {"word": "sonhar", "class": "nonword"},
  {"word": "çizme", "class": "word"}]'

  temp_all <- list()

  for (i in 1:number_folders){
    if (i == 1){ folder_num <- "" } else { folder_num <- i-1 }
    writeLines(practice, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))

    # partition them out
    if (i == 1){
      all_trials <- rbind(nonwords[1:150, ], related[1:75, ],
                          unrelated[1:75, ], nonwords_mix[1:100, ])
    } else if (i == 2){
      all_trials <- rbind(nonwords[151:300, ], related[76:150, ],
                          unrelated[76:150, ], nonwords_mix[101:200, ])
    } else if (i == 3){
      all_trials <- rbind(nonwords[301:450, ], related[151:225, ],
                          unrelated[151:225, ], nonwords_mix[201:300, ])
    } else if (i == 4){
      all_trials <- rbind(nonwords[451:600, ], related[226:300, ],
                          unrelated[226:300, ], nonwords_mix[301:400, ])
    } else if (i == 5){
      all_trials <- rbind(nonwords[601:750, ], related[301:375, ],
                          unrelated[301:375, ], nonwords_mix[401:500, ])
    } else if (i == 6){
      all_trials <- rbind(nonwords[751:900, ], related[376:450, ],
                          unrelated[376:450, ], nonwords_mix[501:600, ])
    } else if (i == 7){
      nonwords <- nonwords[sample(1:nrow(nonwords), nrow(nonwords), replace = F), ]
      all_trials <- rbind(nonwords[1:150, ], related[451:525, ],
                          unrelated[451:525, ], nonwords_mix[601:700, ])
    } else if (i == 8){
      all_trials <- rbind(nonwords[151:300, ], related[526:600, ],
                          unrelated[526:600, ], nonwords_mix[701:800, ])
    } else if (i == 9){
      all_trials <- rbind(nonwords[301:450, ], related[601:675, ],
                          unrelated[601:675, ], nonwords_mix[801:900, ])
    } else if (i == 10){
      all_trials <- rbind(nonwords[451:600, ], related[676:750, ],
                          unrelated[676:750, ], nonwords_mix[901:1000, ])
    } else if (i == 11){
      nonwords_mix <- nonwords_mix[sample(1:nrow(nonwords_mix), nrow(nonwords_mix), replace = F), ]
      all_trials <- rbind(nonwords[601:750, ], related[751:825, ],
                          unrelated[751:825, ], nonwords_mix[1:100, ])
    } else if (i == 12){
      all_trials <- rbind(nonwords[751:900, ], related[826:900, ],
                          unrelated[826:900, ], nonwords_mix[101:200, ])
    } else if (i == 13){
      nonwords <- nonwords[sample(1:nrow(nonwords), nrow(nonwords), replace = F), ]
      all_trials <- rbind(nonwords[1:150, ], related[901:975, ],
                          unrelated[901:975, ], nonwords_mix[201:300, ])
    } else if (i == 14){
      all_trials <- rbind(nonwords[151:300, ], related[c(976:1000, sample(1:974, 50, replace = F)), ],
                          unrelated[c(976:1000, sample(1:974, 50, replace = F)), ], nonwords_mix[301:400, ])
    }

    all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]

    # double check
    cat("\n", i, ": ", nrow(all_trials))
    cat(table(all_trials$cue_type, all_trials$target_type, all_trials$type))
    temp_all[[i]] <- all_trials


    all_trials$together <- paste('{"word": "',
                                 all_trials$tr_cue,
                                 '", "class": "',
                                 all_trials$cue_type,
                                 '"}, ', #cue
                                 '{"word": "',
                                 all_trials$tr_target,
                                 '", "class": "',
                                 all_trials$target_type,
                                 '"}', sep = "")


    # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1

    # remember these come in pairs
    real <- paste('[',
                  paste(all_trials$together[1:50], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))

    # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2

    real <- paste('[',
                  paste(all_trials$together[51:100], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))

    # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3

    real <- paste('[',
                  paste(all_trials$together[101:150], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))

    # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4

    real <- paste('[',
                  paste(all_trials$together[151:200], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))

    # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5

    real <- paste('[',
                  paste(all_trials$together[201:250], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))

    # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
    real <- paste('[',
                  paste(all_trials$together[251:300], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))

    # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
    real <- paste('[',
                  paste(all_trials$together[301:350], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))

    # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
    real <- paste('[',
                  paste(all_trials$together[351:400], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))

  }

  temp_all <- bind_rows(temp_all)
  nrow(temp_all)
  temp_all %>%
    group_by(word_combo, type) %>%
    summarize(n = n())

}

if (adaptive == TRUE){

  # generate new stimuli ADAPTIVE ----

  # loop over the number of random folders you need
  for (i in 1:number_folders){

    if (i == 1){ folder_num <- "" } else { folder_num <- i-1 }

    # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
    # 150 non word non word = 300 trials
    if (nrow(tr_use[tr_use$cue_type == "nonword" &
                    tr_use$target_type == "nonword", ]) >= 150){

      temp <- subset(tr_use,
                     tr_use$cue_type == "nonword" &
                       tr_use$target_type == "nonword")
      nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]

    }else{

      nonwords <- tr_use[tr_use$cue_type == "nonword" &
                           tr_use$target_type == "nonword", ]
      temp <- subset(tr_sample,
                     tr_use$cue_type == "nonword" &
                       tr_use$target_type == "nonword")
      nonwords <- rbind(nonwords,
                        temp[sample(1:nrow(temp),
                                    150-nrow(nonwords),
                                    replace = F), ])
    }

    # 100 non word non word = 200 trials
    if (nrow(tr_use[(tr_use$cue_type == "nonword" &
                     tr_use$target_type == "word") |
                    (tr_use$cue_type == "word" &
                     tr_use$target_type == "nonword"), ]) >= 100){

      temp <- subset(tr_use,
                     (tr_use$cue_type == "nonword" &
                        tr_use$target_type == "word") |
                       (tr_use$cue_type == "word" &
                          tr_use$target_type == "nonword"))
      nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]

    }else{

      nonwords_mix <- tr_use[(tr_use$cue_type == "nonword" &
                                tr_use$target_type == "word") |
                               (tr_use$cue_type == "word" &
                                  tr_use$target_type == "nonword"), ]
      temp <- subset(tr_sample,
                     (tr_use$cue_type == "nonword" &
                        tr_use$target_type == "word") |
                       (tr_use$cue_type == "word" &
                          tr_use$target_type == "nonword"))
      nonwords_mix <- rbind(nonwords_mix,
                            temp[sample(1:nrow(temp),
                                        100-nrow(nonwords_mix),
                                        replace = F), ])
    }

    # 75 related pairs = 150 trials
    if (nrow(tr_use[tr_use$type == "related" , ]) >= 75){

      temp <- subset(tr_use, type == "related")
      related <- temp[sample(1:nrow(temp), 75, replace = F), ]

    }else{

      related <- tr_use[tr_use$type == "related", ]
      temp <- subset(tr_sample, type == "related")
      related <- rbind(related,
                       temp[sample(1:nrow(temp),
                                   75-nrow(related),
                                   replace = F), ])
    }

    # 75 unrelated pairs = 150 trials
    if (nrow(tr_use[tr_use$type == "unrelated" , ]) >= 75){

      temp <- subset(tr_use, type == "unrelated")
      unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]

    }else{

      unrelated <- tr_use[tr_use$type == "unrelated", ]
      temp <- subset(tr_sample, type == "unrelated")
      unrelated <- rbind(unrelated,
                         temp[sample(1:nrow(temp),
                                     75-nrow(unrelated),
                                     replace = F), ])
    }

    # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice

    practice <- '[
  {"word": "nefsg", "class": "nonword"},
  {"word": "dudaklar", "class": "word"},
  {"word": "katran", "class": "word"},
  {"word": "traklı", "class": "nonword"},
  {"word": "yenipiş", "class": "nonword"},
  {"word": "hediye", "class": "word"},
  {"word": "hesmak", "class": "nonword"},
  {"word": "atış", "class": "word"},
  {"word": "sonhar", "class": "nonword"},
  {"word": "çizme", "class": "word"}]'

    writeLines(practice, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))

    all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
    all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
    all_trials$together <- paste('{"word": "',
                                 all_trials$tr_cue,
                                 '", "class": "',
                                 all_trials$cue_type,
                                 '"}, ', #cue
                                 '{"word": "',
                                 all_trials$tr_target,
                                 '", "class": "',
                                 all_trials$target_type,
                                 '"}', sep = "")


    # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1

    # remember these come in pairs
    real <- paste('[',
                  paste(all_trials$together[1:50], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))

    # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2

    real <- paste('[',
                  paste(all_trials$together[51:100], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))

    # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3

    real <- paste('[',
                  paste(all_trials$together[101:150], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))

    # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4

    real <- paste('[',
                  paste(all_trials$together[151:200], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))

    # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5

    real <- paste('[',
                  paste(all_trials$together[201:250], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))

    # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
    real <- paste('[',
                  paste(all_trials$together[251:300], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))

    # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
    real <- paste('[',
                  paste(all_trials$together[301:350], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))

    # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
    real <- paste('[',
                  paste(all_trials$together[351:400], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "/var/www/html/tr", folder_num,
      "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))

  }

}
