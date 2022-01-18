# Information -------------------------------------------------------------

# This R script reads in the data from the SPAML experiment and then:
  # removes incorrect trials since they don't count
  # removes participants who could not get 80% correct on 100 minimum trials
  # z scores each participants data 
  # calculates word, sample size, SE, "done" with <= .09 SE 
  # creates participant ID list by lab 

# From this data, the R script:
  # Writes out 6 blocks of 100 words that are probabilistically selected
    # half non-words
    # quarter unrelated
    # quarter related 
  # Writes out summary table
  # Writes out participant summary 

# Libraries ---------------------------------------------------------------

library(rio)
library(RSQLite)
library(dplyr)
library(tidyverse)
library(jsonlite)
library(janitor)
library(reshape)
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
  
  d.output <- d.full %>%
    bind_rows(
      d.incremental %>% filter(!(observation %in% d.full$observation))
    ) %>%
    type_convert()
  
  d.output %>%
    group_by(observation) %>%
    fill(matches('code'), .direction='down') %>%
    fill(matches('code'), .direction='up') %>%
    ungroup() -> d.output
  
  return(d.output)
}

# Data --------------------------------------------------------------------

# original word lists
en_words <- import("./04_Procedure/en/en_words.csv")

# collected data
en_data <- processData("./04_Procedure/en/data/data.sqlite")

# Clean Up ----------------------------------------------------------------

# figure out trial type 
en_real_trials <- en_data %>% 
  filter(sender == "Stimulus Real")

en_real_trials$trial_code <- NA

for (person in unique(en_real_trials$observation)){
  
  en_real_trials$trial_code[en_real_trials$observation == person] <- 
    rep(1:300, each = 2, length.out = length(en_real_trials$trial_code[en_real_trials$observation == person]))
  
}

en_real_trials$trial_code <- paste0(en_real_trials$observation, en_real_trials$trial_code)

trial_pairs <-  en_real_trials %>% 
  pairwise_count(word, trial_code)










# only real trials
en_real <- subset(en_data, 
                  grepl("Stimulus Real", sender))

# participants with 100 trials + 80% 
participant_summary <- en_real %>% 
  group_by(observation) %>% 
  summarize(trials = length(duration), 
            correct = sum(correct == TRUE, na.rm = T))
participant_summary$percent <- participant_summary$correct / participant_summary$trials

### HERE YOU WILL TURN ON ###
# use_data <- participant_summary$observation[participant_summary$percent >= .80]
# en_real <- subset(en_real, observation %in% use_data)

# z scores each participants data
en_Z <- en_real %>% 
  group_by(observation) %>% 
  filter(!is.na(correct)) %>% 
  mutate(Z_RT = scale(duration))

# only correct answers for checking stimuli counts
en_Z <- subset(en_Z, correct == TRUE)

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE 
en_Z_summary <- en_Z %>% 
  group_by(word) %>% 
  summarize(M_Z = mean(Z_RT),
            SD_Z = sd(Z_RT),
            SE_Z = sd(Z_RT) / sqrt(length(Z_RT)),
            sampleN = length(Z_RT))

# are we done?
en_Z_summary$done <- (en_Z_summary$sampleN >=50 & en_Z_summary$SE_Z <= .09) | en_Z_summary$sampleN >= 320

# merge with complete stimuli list
en_words_long <- melt(en_words[ , -5], 
                      measure.vars = colnames(en_words[ , -5]))
colnames(en_words_long) <- c("Type", "Stimuli")

en_merged <- merge(en_words_long, en_Z_summary, by.x = "Stimuli", 
                   by.y = "word", all.x = T)

# use data
en_use <- subset(en_merged, is.na(done) | done == FALSE)
en_sample <- subset(en_merged, done == TRUE)

# Generate ----------------------------------------------------------------

# 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1
# ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2
# 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3
# 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4
# 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5
# cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
# db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice

# From this data, the R script:
# Writes out 6 blocks of 100 words that are probabilistically selected
# half non-words
# quarter unrelated
# quarter related 
# Writes out summary table
# Writes out participant summary 

# sample quarter related to get cue-targets to exclude

  # tabulate the number of times each cue-target paired together
  # tabulate the number of times each not paired together
  # tabulate the number of unrelated pairs


  trial_pairs$related <- tolower(paste(trial_pairs$item1, trial_pairs$item2,
                                       sep = "-"))
  en_words$related <- paste(en_words$en_cue, en_words$en_target, 
                            sep = "-")
  

  