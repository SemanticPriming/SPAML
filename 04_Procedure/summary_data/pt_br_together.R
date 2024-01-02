
# Portuguese Merge --------------------------------------------------------
library(rio)
library(dplyr)

# grab the current summaries
list_pt_data <- lapply(list.files(path = "/var/www/html/summary_data",
                                  pattern = "^pt_summary.csv", full.names = T),
                       import)
list_br_pt_data <- lapply(list.files(path = "/var/www/html/summary_data",
                                     pattern = "br_pt_summary.csv", full.names = T),
                          import)

pt_data_stimuli <- import("/var/www/html/pt/pt_words.csv") %>% 
  mutate(where_pt = 1)
br_data_stimuli <- import("/var/www/html/br_pt/br_pt_words.csv") %>% 
  mutate(where_br = 1)

pt_summaries <- bind_rows(list_pt_data, list_br_pt_data)
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

