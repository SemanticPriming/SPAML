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
hu_words <- import("./04_Procedure/hu/hu_words.csv")

# collected data
hu_data_all <-
  bind_rows(processData("./04_Procedure/hu/data/data.sqlite") %>%
              mutate(url_lab = as.character(url_lab))) %>% unique()

# # delete stuff before we started
# hu_data_all <- hu_data_all %>%
#   filter(timestamp > as.POSIXct("2022-10-26"))

# fix the issue of double displays that happened before 2022-09-01
  # 13_0_98 == 15_0_0
  # 13_0_99 == 15_0_1
  # figure out everyone who saw 15_100 and 15_101 which means extra
  obs_extra <- hu_data_all %>%
    filter(grepl("15_0_100", sender_id)) %>%
    pull(observation) %>%
    unique()
  # remove second instance of trials so 15_0_0* or 15_0_1*
  # be specific because regex coding

  hu_data_all <- hu_data_all %>%
    filter(!(observation %in% obs_extra &
               grepl("15_0_0_0$|15_0_0_1$|15_0_0$|15_0_1_0$|15_0_1_1$|15_0_1$", sender_id)
    ))

    # timestamp is somewhat unreliable fix up sender_id
  sender_ids <- import("./04_Procedure/summary_data/sender_id.csv")
  hu_data_all <- hu_data_all %>%
    left_join(sender_ids, by = "sender_id")

# Clean Up ----------------------------------------------------------------

  # Participant did not indicate at least 18 years of age.
  # Participant did not complete at least 100 trials.
  # Participant did not achieve 80% correct.
  current_year <- 2022
  number_folders <- 1

  ##create demographics only data
  demos <- hu_data_all %>% #data frame
    filter(sender == "Demographics Form") #filter out only demographics lines

  ##create experiment information data
  exp <- hu_data_all %>%
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
  number_trials <- hu_data_all %>% #data frame
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
  real_trials <- hu_data_all %>% #data frame
    filter(sender == "Stimulus Real") %>%  #filter out only the real stimuli
    select(observation, fix_sender, response, response_action, ended_on, duration,
           colnames(hu_data_all)[grep("^time", colnames(hu_data_all))],
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
  hu_real_wide <- merge(
    real_trials[real_trials$which == "cue" , ], #just cues
    real_trials[real_trials$which == "target" , ], #just targets
    by = "unique_trial",
    all = T
  )
  # take just what we need
  hu_real_wide <- hu_real_wide[ , c("unique_trial", "observation.x", "word.x",
                                    "class.x", "correct.x", "trial_code.x",
                                    "duration.y", "word.y", "class.y", "correct.y",
                                    "Z_RT.y", "keep.y", "keep_participant.y",
                                    "ended_on.x", "ended_on.y")]
  # good names
  colnames(hu_real_wide) <- c("unique_trial", "observation", "cue_word",
                              "cue_type", "cue_correct", "trial_order",
                              "target_duration", "target_word", "target_type",
                              "target_correct", "target_Z_RT",
                              "keep_trial", "keep_participant",
                              "cue_end_of_trial", "target_end_of_trial")

  # only focus on related-unrelated
  hu_focus <- subset(hu_real_wide, target_type == "word" & cue_type == "word")
  hu_focus$word_combo <- paste0(hu_focus$cue_word, hu_focus$target_word)

  # add if it's related or unrelated
  hu_words$word_combo <- paste0(hu_words$hu_cue, hu_words$hu_target)
  hu_focus <- merge(hu_focus, hu_words[ , c("type", "word_combo")],
                    by = "word_combo", all.x = T)

  ### HERE YOU WILL TURN ON ###
  # subset out NAs at some point they will be practice trials
  hu_focus <- subset(hu_focus, !is.na(type))

  # calculate the total N versus timeout N
  hu_num_trials <- hu_focus %>%
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
  hu_focus <- subset(hu_focus, keep_participant == "keep")

# only correct answers for checking stimuli counts ----
  hu_Z <- subset(hu_focus, target_correct == TRUE)
  hu_Z <- subset(hu_Z, keep_trial == "keep")

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
  hu_Z_summary <- hu_Z %>%
    group_by(word_combo) %>%
    summarize(M_Z = mean(target_Z_RT),
              SD_Z = sd(target_Z_RT),
              SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
              sampleN = length(target_Z_RT))

# merge with complete stimuli list ----
  hu_merged <- merge(hu_words, hu_Z_summary,
                     by = "word_combo", all.x = T)

  hu_merged <- merge(hu_merged, hu_num_trials,
                     by = "word_combo", all.x = T)

# merge with old data ----
  # pull in other information from previous weeks
  list_hu_data <- lapply(list.files(path = "./04_Procedure/summary_data",
                                    pattern = "hu_summary_[0-9].*.csv", full.names = T),
                         import)
  hu_summaries <- bind_rows(list_hu_data, hu_merged)
  hu_merged <- hu_summaries %>%
    select(-any_of(c("done_both", "done_totalN", "done"))) %>%
    group_by(word_combo, hu_cue, hu_target, type, cue_type,
             target_type, hu_cosine) %>%
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
  hu_merged$done_both <- (hu_merged$target_answeredN >= 50 & hu_merged$SE_Z <= .09) | hu_merged$target_answeredN >= 320
  hu_merged$done_totalN <- hu_merged$target_answeredN >= 50
  hu_merged$done <- hu_merged$sampleN >= 50

# use data ----
  hu_use <- subset(hu_merged, is.na(done_totalN) | done_totalN == FALSE)
  hu_sample <- subset(hu_merged, done_totalN == TRUE)

# Generate ----------------------------------------------------------------

# generate summary chart for shiny ----
  write.csv(hu_merged, "./04_Procedure/summary_data/hu_summary.csv", row.names = F)

# generate participant report for shiny ----
  p_end <- hu_data_all %>%
    filter(sender == "Stimulus Real") %>%
    group_by(observation) %>%
    summarize(n = n()) %>%
    filter(n >= 100) %>%
    pull(observation)

  p_lab <- hu_data_all[hu_data_all$observation %in% p_end, ]
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
  list_hu_data <- lapply(list.files(path = "./04_Procedure/summary_data",
                                    pattern = "hu_participants_[0-9].*.csv", full.names = T),
                         import)
  list_hu_data <- lapply(list_hu_data, function(df) dplyr::mutate_at(df, vars(matches("url_lab")), as.character))
  list_hu_data <- lapply(list_hu_data, function(df) dplyr::mutate_at(df, vars(matches("url_special_code")), as.character))
  list_hu_data <- list_hu_data[lapply(list_hu_data, nrow) > 0]

  if (nrow(p_lab) > 0){
    if (length(list_hu_data) > 0){
      p_lab <- unique(bind_rows(bind_rows(list_hu_data) %>%
                        mutate(url_lab = as.character(url_lab),
                               url_special_code = as.character(url_special_code)),
                        p_lab %>%
                          mutate(url_special_code = as.character(url_special_code),
                                 study_length = as.numeric(study_length))))
    }
  } else {
    p_lab <- unique(bind_rows(list_hu_data))
  }

  write.csv(p_lab, "./04_Procedure/summary_data/hu_participants.csv", row.names = F)

# generate new stimuli ----

  # loop over the number of random folders you need
  for (i in 1:number_folders){

    if (i == 1){ folder_num <- "" } else { folder_num <- i-1 }

    # eight blocks of 100 trials = 800 trials = 400 pairs or 8 blocks of 50
    # 150 non word non word = 300 trials
    if (nrow(hu_use[hu_use$cue_type == "nonword" &
                    hu_use$target_type == "nonword", ]) >= 150){

      temp <- subset(hu_use,
                     hu_use$cue_type == "nonword" &
                       hu_use$target_type == "nonword")
      nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]

    }else{

      nonwords <- hu_use[hu_use$cue_type == "nonword" &
                           hu_use$target_type == "nonword", ]
      temp <- subset(hu_sample,
                     hu_use$cue_type == "nonword" &
                       hu_use$target_type == "nonword")
      nonwords <- rbind(nonwords,
                        temp[sample(1:nrow(temp),
                                    150-nrow(nonwords),
                                    replace = F), ])
    }

    # 100 non word non word = 200 trials
    if (nrow(hu_use[(hu_use$cue_type == "nonword" &
                     hu_use$target_type == "word") |
                    (hu_use$cue_type == "word" &
                     hu_use$target_type == "nonword"), ]) >= 100){

      temp <- subset(hu_use,
                     (hu_use$cue_type == "nonword" &
                        hu_use$target_type == "word") |
                       (hu_use$cue_type == "word" &
                          hu_use$target_type == "nonword"))
      nonwords_mix <- temp[sample(1:nrow(temp), 100, replace = F), ]

    }else{

      nonwords_mix <- hu_use[(hu_use$cue_type == "nonword" &
                                hu_use$target_type == "word") |
                               (hu_use$cue_type == "word" &
                                  hu_use$target_type == "nonword"), ]
      temp <- subset(hu_sample,
                     (hu_use$cue_type == "nonword" &
                        hu_use$target_type == "word") |
                       (hu_use$cue_type == "word" &
                          hu_use$target_type == "nonword"))
      nonwords_mix <- rbind(nonwords_mix,
                            temp[sample(1:nrow(temp),
                                        100-nrow(nonwords_mix),
                                        replace = F), ])
    }

    # 75 related pairs = 150 trials
    if (nrow(hu_use[hu_use$type == "related" , ]) >= 75){

      temp <- subset(hu_use, type == "related")
      related <- temp[sample(1:nrow(temp), 75, replace = F), ]

    }else{

      related <- hu_use[hu_use$type == "related", ]
      temp <- subset(hu_sample, type == "related")
      related <- rbind(related,
                       temp[sample(1:nrow(temp),
                                   75-nrow(related),
                                   replace = F), ])
    }

    # 75 unrelated pairs = 150 trials
    if (nrow(hu_use[hu_use$type == "unrelated" , ]) >= 75){

      temp <- subset(hu_use, type == "unrelated")
      unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]

    }else{

      unrelated <- hu_use[hu_use$type == "unrelated", ]
      temp <- subset(hu_sample, type == "unrelated")
      unrelated <- rbind(unrelated,
                         temp[sample(1:nrow(temp),
                                     75-nrow(unrelated),
                                     replace = F), ])
    }

    # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice

    practice <- '[
  {"word": "ograbol", "class": "nonword"},
  {"word": "ajkak", "class": "word"},
  {"word": "kátrány", "class": "word"},
  {"word": "eldy", "class": "nonword"},
  {"word": "elültr", "class": "nonword"},
  {"word": "ajánlat", "class": "word"},
  {"word": "fontosság", "class": "nonword"},
  {"word": "lövés", "class": "word"},
  {"word": "géhely", "class": "nonword"},
  {"word": "csomagtartó", "class": "word"}]'

    writeLines(practice, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"))

    all_trials <- rbind(nonwords, related, unrelated, nonwords_mix)
    all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
    all_trials$together <- paste('{"word": "',
                                 all_trials$hu_cue,
                                 '", "class": "',
                                 all_trials$cue_type,
                                 '"}, ', #cue
                                 '{"word": "',
                                 all_trials$hu_target,
                                 '", "class": "',
                                 all_trials$target_type,
                                 '"}', sep = "")


    # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1

    # remember these come in pairs
    real <- paste('[',
                  paste(all_trials$together[1:50], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"))

    # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2

    real <- paste('[',
                  paste(all_trials$together[51:100], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"))

    # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3

    real <- paste('[',
                  paste(all_trials$together[101:150], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"))

    # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4

    real <- paste('[',
                  paste(all_trials$together[151:200], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"))

    # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5

    real <- paste('[',
                  paste(all_trials$together[201:250], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"))

    # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
    real <- paste('[',
                  paste(all_trials$together[251:300], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"))

    # c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json is real7
    real <- paste('[',
                  paste(all_trials$together[301:350], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/c378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"))

    # 0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json is real8
    real <- paste('[',
                  paste(all_trials$together[351:400], collapse = ",", sep = ""),
                  ']', collapse = "", sep = "")
    writeLines(real, con = paste0(
      "./04_Procedure/hu", folder_num,
      "/embedded/0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"))

  }
