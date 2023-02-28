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
en_words <- import("/var/www/html/en/en_words.csv")

# collected data
en_data_all <-
  list(processData("/var/www/html/en/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en1/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en2/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en3/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en4/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en5/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en6/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en7/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en8/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en9/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en10/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
            processData("/var/www/html/en11/data/data.sqlite") %>%
              mutate_at(vars(one_of("url_lab")), as.character,
                          vars(one_of("url_special_code")), as.character),
           processData("/var/www/html/en12/data/data.sqlite") %>%
             mutate_at(vars(one_of("url_lab")), as.character,
                       vars(one_of("url_special_code")), as.character))
    
  for (i in 1:length(en_data_all)){
    en_data_all[[i]] <- en_data_all[[i]] %>% mutate_at(vars(one_of("url_special_code")), as.character)
  }

  en_data_all <- bind_rows(en_data_all) %>% unique()

# delete stuff before we started
en_data_all <- en_data_all %>%
  filter(timestamp > as.POSIXct("2022-08-01"))

# fix the issue of double displays that happened before 2022-09-01
  # 13_0_98 == 15_0_0
  # 13_0_99 == 15_0_1
  # figure out everyone who saw 15_100 and 15_101 which means extra
  obs_extra <- en_data_all %>%
    filter(grepl("15_0_100", sender_id)) %>%
    pull(observation) %>%
    unique()
  # remove second instance of trials so 15_0_0* or 15_0_1*
  # be specific because regex coding

  en_data_all <- en_data_all %>%
    filter(!(observation %in% obs_extra &
               grepl("15_0_0_0$|15_0_0_1$|15_0_0$|15_0_1_0$|15_0_1_1$|15_0_1$", sender_id)
    ))

  # timestamp is somewhat unreliable fix up sender_id
  sender_ids <- import("/var/www/html/summary_data/sender_id.csv")
  en_data_all <- en_data_all %>%
    left_join(sender_ids, by = "sender_id")

# Clean Up ----------------------------------------------------------------

  # Participant did not indicate at least 18 years of age.
  # Participant did not complete at least 100 trials.
  # Participant did not achieve 80% correct.
  current_year <- 2023
  number_folders <- 13

  ##create demographics only data
  demos <- en_data_all %>% #data frame
    filter(sender == "Demographics Form") #filter out only demographics lines

  ##create experiment information data
  exp <- en_data_all %>%
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

  # special issue with lab 91 as they made us take age question out
  # but we verified they were 18
  # get the ids
  ids_91 <- en_data_all %>%
    filter(url_lab == "91") %>%
    pull(observation)
  # make these keep
  participant_DF$keep[participant_DF$observation %in% ids_91] <- "keep"

  # at least 100 trials + 80%
  number_trials <- en_data_all %>% #data frame
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
  real_trials <- en_data_all %>% #data frame
    filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
    select(observation, fix_sender, response, response_action, ended_on, duration,
           colnames(en_data_all)[grep("^time", colnames(en_data_all))],
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
  en_real_wide <- merge(
    real_trials[real_trials$which == "cue" , ], #just cues
    real_trials[real_trials$which == "target" , ], #just targets
    by = "unique_trial",
    all = T
  )
  # take just what we need
  en_real_wide <- en_real_wide[ , c("unique_trial", "observation.x", "word.x",
                                    "class.x", "correct.x", "trial_code.x",
                                    "duration.y", "word.y", "class.y", "correct.y",
                                    "Z_RT.y", "keep.y", "keep_participant.y",
                                    "ended_on.x", "ended_on.y")]
  # good names
  colnames(en_real_wide) <- c("unique_trial", "observation", "cue_word",
                              "cue_type", "cue_correct", "trial_order",
                              "target_duration", "target_word", "target_type",
                              "target_correct", "target_Z_RT",
                              "keep_trial", "keep_participant",
                              "cue_end_of_trial", "target_end_of_trial")

  # only focus on related-unrelated
  en_focus <- subset(en_real_wide, target_type == "word" & cue_type == "word")
  en_focus$word_combo <- paste0(en_focus$cue_word, en_focus$target_word)

  # add if it's related or unrelated
  en_words$word_combo <- paste0(en_words$en_cue, en_words$en_target)
  en_focus <- merge(en_focus, en_words[ , c("type", "word_combo")],
                    by = "word_combo", all.x = T)

  ### HERE YOU WILL TURN ON ###
  # subset out NAs at some point they will be practice trials
  en_focus <- subset(en_focus, !is.na(type))

  # calculate the total N versus timeout N
  en_num_trials <- en_focus %>%
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
  en_focus <- subset(en_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
  en_Z <- subset(en_focus, target_correct == TRUE)
  en_Z <- subset(en_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
  en_Z_summary <- en_Z %>%
    group_by(word_combo) %>%
    summarize(M_Z = mean(target_Z_RT),
              SD_Z = sd(target_Z_RT),
              SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
              sampleN = length(target_Z_RT))

# merge with complete stimuli list ----

  en_merged <- merge(en_words, en_Z_summary,
                     by = "word_combo", all.x = T)

  en_merged <- merge(en_merged, en_num_trials,
                     by = "word_combo", all.x = T)

# are we done? ----
  en_merged$done_both <- (en_merged$target_answeredN >= 50 & en_merged$SE_Z <= .09) | en_merged$target_answeredN >= 320
  en_merged$done_totalN <- en_merged$target_answeredN >= 50
  en_merged$done <- en_merged$sampleN >= 50

# use data ----
  en_use <- subset(en_merged, is.na(done_both) | done_both == FALSE)
  en_sample <- subset(en_merged, done_both == TRUE)

# Generate ----------------------------------------------------------------

  # generate summary chart for shiny ----
  write.csv(en_merged,
            paste("/var/www/html/summary_data/en_summary_",
                  Sys.time(), ".csv", sep = ""),
            row.names = F)

# generate participant report for shiny ----
  p_end <- en_data_all %>%
    filter(sender == "Stimulus Real") %>%
    group_by(observation) %>%
    summarize(n = n()) %>%
    filter(n >= 100) %>%
    pull(observation)

  p_lab <- en_data_all[en_data_all$observation %in% p_end, ]
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
            paste("/var/www/html/summary_data/en_participants_",
                  Sys.time(), ".csv", sep = ""),
            row.names = F)
