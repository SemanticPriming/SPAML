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
en_words <- import("/var/www/html/en-z/en_words.csv")

# collected data
en_data_all <- processData("/var/www/html/en-z/data/data.sqlite")

# Clean Up ----------------------------------------------------------------

# z scores each participants data ----
en_data <- en_data_all %>% # data set
  filter(sender == "Stimulus Real") %>% # only on trials not other information
  group_by(observation) %>% 
  filter(!is.na(correct)) %>% 
  mutate(Z_RT = scale(duration))

# figure out trial type ----

  # only real trials
  en_real_trials <- en_data %>% 
    select(observation, duration, word, class, correct, Z_RT)
  # add trial code and if it's cue/target
  en_real_trials$trial_code <- NA
  en_real_trials$which <- NA
  # add that information 
  for (person in unique(en_real_trials$observation)){
    
    en_real_trials$trial_code[en_real_trials$observation == person] <- 
      rep(1:300, each = 2, length.out = length(en_real_trials$trial_code[en_real_trials$observation == person]))
    
    en_real_trials$which[en_real_trials$observation == person] <-
      rep(c("cue", "target"), times = 2, 
          length.out = length(en_real_trials$trial_code[en_real_trials$observation == person]))
    
  }
  
  # pivot wider with information you need
  en_real_trials$unique_trial <- paste(en_real_trials$observation, 
                                        en_real_trials$trial_code, sep = "_")
  # do it with merge because ugh pivot
  en_real_wide <- merge(
    en_real_trials[en_real_trials$which == "cue" , ], #just cues
    en_real_trials[en_real_trials$which == "target" , ], #just targets
    by = "unique_trial",
    all = T
  )
  # take just what we need
  en_real_wide <- en_real_wide[ , c("unique_trial", "observation.x", "word.x", 
                                    "class.x", "correct.x", "trial_code.x", 
                                    "duration.y", "word.y", "class.y", "correct.y", 
                                    "Z_RT.y")]
  # good names
  colnames(en_real_wide) <- c("unique_trial", "observation", "cue_word", 
                              "cue_type", "cue_correct", "trial_order", 
                              "target_duration", "target_word", "target_type", 
                              "target_correct", "target_Z_RT")
  
  # only focus on related-unrelated
  en_focus <- subset(en_real_wide, target_type == "word" & cue_type == "word")
  en_focus$word_combo <- paste0(en_focus$cue_word, en_focus$target_word)
  
  # add if it's related or unrelated
  en_words$word_combo <- paste0(en_words$en_cue, en_words$en_target)
  en_focus <- merge(en_focus, en_words[ , c("type", "word_combo")], 
                    by = "word_combo", all.x = T)
  
  ### HERE YOU WILL TURN ON ###
  # subset out NAs at some point they will be practice trials
  # en_focus <- subset(en_focus, !is.na(type))


# participants with 100 trials + 80% ----
  participant_summary <- en_data %>% 
    filter(sender == "Stimulus Real") %>% 
    group_by(observation) %>% 
    summarize(trials = length(duration), 
              correct = sum(correct == TRUE, na.rm = T))
  participant_summary$percent <- participant_summary$correct / participant_summary$trials

  ### HERE YOU WILL TURN ON ###
  # use_data <- participant_summary$observation[participant_summary$percent >= .80]
  # en_focus <- subset(en_focus, observation %in% use_data)

# only correct answers for checking stimuli counts ----
  en_Z <- subset(en_focus, target_correct == TRUE)

# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE ----
  en_Z_summary <- en_Z %>% 
    group_by(word_combo) %>% 
    summarize(M_Z = mean(target_Z_RT),
              SD_Z = sd(target_Z_RT),
              SE_Z = sd(target_Z_RT) / sqrt(length(target_Z_RT)),
              sampleN = length(target_Z_RT))

# are we done? ---- 
  en_Z_summary$done <- (en_Z_summary$sampleN >=50 & en_Z_summary$SE_Z <= .09) | en_Z_summary$sampleN >= 320

# merge with complete stimuli list ---- 
  en_merged <- merge(en_words, en_Z_summary, 
                     by = "word_combo", all.x = T)

# use data ----
  en_use <- subset(en_merged, is.na(done) | done == FALSE)
  en_sample <- subset(en_merged, done == TRUE)

# Generate ----------------------------------------------------------------

# generate summary chart for shiny ----
  write.csv(en_merged, "/var/www/html/en-z/data/en_summary.csv", row.names = F)

# generate participant report for shiny ----
  p_end <- en_data_all$observation[en_data_all$sender == "Real Frame Task 6"]
  p_lab <- en_data_all[en_data_all$observation %in% p_end, ]
  p_lab <- p_lab[!is.na(p_lab$url_lab), ]
  p_lab <- p_lab[ , c("url_lab", "timestamp")]
  write.csv(p_lab, "/var/www/html/en-z/data/en_participants.csv", row.names = F)
  
# generate new stimuli ----
  
  # six blocks of 100 trials = 600 trials = 300 pairs or 6 blocks of 50
  # 150 non word pairs = 300 trials
  if (nrow(en_use[en_use$type == "nonword" , ]) >= 150){
    
    temp <- subset(en_use, type == "nonword")
    nonwords <- temp[sample(1:nrow(temp), 150, replace = F), ]
    
  }else{
    
    nonwords <- en_use[en_use$type == "nonword", ]
    temp <- subset(en_sample, type == "nonword")
    nonwords <- rbind(nonwords, 
                      temp[sample(1:nrow(temp), 
                                  150-nrow(nonwords), 
                                  replace = F), ])
  }
  
  # 75 related pairs = 150 trials
  if (nrow(en_use[en_use$type == "related" , ]) >= 75){
    
    temp <- subset(en_use, type == "related")
    related <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    related <- en_use[en_use$type == "related", ]
    temp <- subset(en_sample, type == "related")
    related <- rbind(related, 
                      temp[sample(1:nrow(temp), 
                                  75-nrow(related), 
                                  replace = F), ])
  }  
    
  # 75 unrelated pairs = 150 trials
  if (nrow(en_use[en_use$type == "unrelated" , ]) >= 75){
    
    temp <- subset(en_use, type == "unrelated")
    unrelated <- temp[sample(1:nrow(temp), 75, replace = F), ]
    
  }else{
    
    unrelated <- en_use[en_use$type == "unrelated", ]
    temp <- subset(en_sample, type == "unrelated")
    unrelated <- rbind(unrelated, 
                      temp[sample(1:nrow(temp), 
                                  75-nrow(unrelated), 
                                  replace = F), ])
  }  

  # db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json is practice
  
  practice <- '[
  {"word": "snef", "class": "nonword"},
  {"word": "lips", "class": "word"},
  {"word": "tar", "class": "word"},
  {"word": "curi", "class": "nonword"},
  {"word": "resh", "class": "nonword"},
  {"word": "gift", "class": "word"},
  {"word": "cuke", "class": "nonword"},
  {"word": "shot", "class": "word"},
  {"word": "foll", "class": "nonword"},
  {"word": "boot", "class": "word"}]'
  writeLines(practice, con = "/var/www/html/en-z/embedded/db6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json")
  
  all_trials <- rbind(nonwords, related, unrelated)
  all_trials <- all_trials[sample(1:nrow(all_trials), nrow(all_trials), replace = F), ]
  all_trials$together <- paste('{"word": "',
                               all_trials$en_cue, 
                               '", "class": "',
                               all_trials$cue_type, 
                               '"}, ', #cue
                               '{"word": "',
                               all_trials$en_target, 
                               '", "class": "',
                               all_trials$target_type, 
                               '"}', sep = "")
  
  
  # 3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json is real1
  
  # remember these come in pairs
  real <- paste('[', 
                paste(all_trials$together[1:50], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json")
  
  # ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json is real2
  
  real <- paste('[', 
                paste(all_trials$together[51:100], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/ae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json")
  
  # 3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json is real3
  
  real <- paste('[', 
                paste(all_trials$together[101:150], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json")
  
  # 994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json is real4
  
  real <- paste('[', 
                paste(all_trials$together[151:200], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json")
  
  # 9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json is real5
  
  real <- paste('[', 
                paste(all_trials$together[201:250], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json")
  
  # cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json is real6
  real <- paste('[', 
                paste(all_trials$together[250:300], collapse = ",", sep = ""),
                ']', collapse = "", sep = "")
  writeLines(real, con = "/var/www/html/en-z/embedded/cd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json")
  

