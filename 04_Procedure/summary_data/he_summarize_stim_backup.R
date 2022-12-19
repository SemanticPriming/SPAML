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

# # set working directory
# setwd("/Users/erinbuchanan/GitHub/Research/2_projects/SPAML/SPAML-PSA")

# original word lists
he_words <- import("/var/www/html/he/he_words.csv")

# collected data
he_data_all <-
  bind_rows(processData("/var/www/html/he/data/data.sqlite") %>%
              mutate(url_lab = as.character(url_lab))) %>% unique()

# delete stuff before we started
he_data_all <- he_data_all %>%
  filter(timestamp > as.POSIXct("2022-10-26")) %>%
  # this was a tester on 10-26
  filter(observation != "43143") # check no duplicates at the end

# fix the issue of double displays that happened before 2022-09-01
  # 13_0_98 == 15_0_0
  # 13_0_99 == 15_0_1
  # figure out everyone who saw 15_100 and 15_101 which means extra
  obs_extra <- he_data_all %>%
    filter(grepl("15_0_100", sender_id)) %>%
    pull(observation) %>%
    unique()
  # remove second instance of trials so 15_0_0* or 15_0_1*
  # be specific because regex coding

  he_data_all <- he_data_all %>%
    filter(!(observation %in% obs_extra &
               grepl("15_0_0_0$|15_0_0_1$|15_0_0$|15_0_1_0$|15_0_1_1$|15_0_1$", sender_id)
    ))

    # timestamp is somewhat unreliable fix up sender_id
  sender_ids <- import("/var/www/html/summary_data/sender_id.csv")
  he_data_all <- he_data_all %>%
    left_join(sender_ids, by = "sender_id")

# Clean Up ----------------------------------------------------------------

  # Participant did not indicate at least 18 years of age.
  # Participant did not complete at least 100 trials.
  # Participant did not achieve 80% correct.
  current_year <- 2022
  number_folders <- 1

  ##create demographics only data
  demos <- he_data_all %>% #data frame
    filter(sender == "Demographics Form") #filter out only demographics lines

  ##create experiment information data
  exp <- he_data_all %>%
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
  number_trials <- he_data_all %>% #data frame
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
  real_trials <- he_data_all %>% #data frame
    filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
    select(observation, fix_sender, response, response_action, ended_on, duration,
           colnames(he_data_all)[grep("^time", colnames(he_data_all))],
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
  he_real_wide <- merge(
    real_trials[real_trials$which == "cue" , ], #just cues
    real_trials[real_trials$which == "target" , ], #just targets
    by = "unique_trial",
    all = T
  )
  # take just what we need
  he_real_wide <- he_real_wide[ , c("unique_trial", "observation.x", "word.x",
                                    "class.x", "correct.x", "trial_code.x",
                                    "duration.y", "word.y", "class.y", "correct.y",
                                    "Z_RT.y", "keep.y", "keep_participant.y",
                                    "ended_on.x", "ended_on.y")]
  # good names
  colnames(he_real_wide) <- c("unique_trial", "observation", "cue_word",
                              "cue_type", "cue_correct", "trial_order",
                              "target_duration", "target_word", "target_type",
                              "target_correct", "target_Z_RT",
                              "keep_trial", "keep_participant",
                              "cue_end_of_trial", "target_end_of_trial")

  # only focus on related-unrelated
  he_focus <- subset(he_real_wide, target_type == "word" & cue_type == "word")
  he_focus$word_combo <- paste0(he_focus$cue_word, he_focus$target_word)

  # add if it's related or unrelated
  he_words$word_combo <- paste0(he_words$he_cue, he_words$he_target)
  he_focus <- merge(he_focus, he_words[ , c("type", "word_combo")],
                    by = "word_combo", all.x = T)

  ### HERE YOU WILL TURN ON ###
  # subset out NAs at some point they will be practice trials
  he_focus <- subset(he_focus, !is.na(type))

  # calculate the total N versus timeout N
  he_num_trials <- he_focus %>%
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
  he_focus <- subset(he_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
  he_Z <- subset(he_focus, target_correct == TRUE)
  he_Z <- subset(he_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
  he_Z_summary <- he_Z %>%
    group_by(word_combo) %>%
    summarize(M_Z = mean(target_Z_RT),
              SD_Z = sd(target_Z_RT),
              SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
              sampleN = length(target_Z_RT))

# merge with complete stimuli list ----
  he_merged <- merge(he_words, he_Z_summary,
                     by = "word_combo", all.x = T)

  he_merged <- merge(he_merged, he_num_trials,
                     by = "word_combo", all.x = T)

# are we done? ----
  he_merged$done_both <- (he_merged$target_answeredN >= 50 & he_merged$SE_Z <= .09) | he_merged$target_answeredN >= 320
  he_merged$done_totalN <- he_merged$target_answeredN >= 50
  he_merged$done <- he_merged$sampleN >= 50

# use data ----
  he_use <- subset(he_merged, is.na(done_totalN) | done_totalN == FALSE)
  he_sample <- subset(he_merged, done_totalN == TRUE)

# Generate ----------------------------------------------------------------

  # generate summary chart for shiny ----
  write.csv(he_merged,
            paste("/var/www/html/summary_data/he_summary_",
                  Sys.time(), ".csv", sep = ""),
            row.names = F)

# generate participant report for shiny ----
  p_end <- he_data_all %>%
    filter(sender == "Stimulus Real") %>%
    group_by(observation) %>%
    summarize(n = n()) %>%
    filter(n >= 100) %>%
    pull(observation)

  p_lab <- he_data_all[he_data_all$observation %in% p_end, ]
  p_lab <- p_lab[!is.na(p_lab$url_lab), ]
  p_lab <- p_lab %>%
    left_join(participant_DF %>%
                select(keep, n_trials, correct, n_answered, observation,
                       start, end, study_length),
              by = c("observation" = "observation"))
  p_lab <- p_lab[ , c("url_lab", "timestamp", "uuid", "url_special_code",
                      "keep", "n_trials", "correct.y", "n_answered",
                      "start", "end", "study_length")]

  write.csv(p_lab,
            paste("/var/www/html/summary_data/he_participants_",
                  Sys.time(), ".csv", sep = ""),
            row.names = F)
