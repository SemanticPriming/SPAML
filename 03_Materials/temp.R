```{r eval = F}
# get data ----
af <- words[ , c("af_cue", "af_target", "af_fake_cue", "af_fake_target", 
                 "en_cue", "en_target")]
af$af_cue <- tolower(af$af_cue)
af$af_target <- tolower(af$af_target)

# get patterns -----
af_patterns <- read.hyph.pat("hyphen/hyph-af.tex", "af")
af_subs <- import(paste0("/Volumes/SPAML Backup/subs_count/af/af.zip"))
af_subs <- af_subs[!grepl("[0-9]", af_subs$unigram), ]
af_subs <- af_subs[!grepl("[[:punct:]]", af_subs$unigram), ]
af_subs <- af_subs %>% filter(unigram != "")
af_subs <- af_subs[1:100000, ]

# create fake words based on cue
af_fake_words <- get_fake(wordlist = af_subs$unigram, #possibles
                          language_hyp = af_patterns, #hyphen rules
                          replacewords = af$af_cue) #your words

write.csv(af_fake_words, "af/af_fake_cues.csv", row.names = F)

# merge back into data
af <- merge(af, 
            af_fake_words[ , c("original_word", "replacement_word")], 
            by.x = "af_cue", by.y = "original_word")
af$af_fake_cue <- af$replacement_word
af$replacement_word <- NULL

gc()

# create fake words based on target
af_fake_words <- get_fake(wordlist = af_subs$unigram, #possibles
                          language_hyp = af_patterns, #hyphen rules
                          replacewords = af$af_target) #your words

write.csv(af_fake_words, "af/af_fake_targets.csv", row.names = F)

# merge back into data
af <- merge(af, 
            af_fake_words[ , c("original_word", "replacement_word")], 
            by.x = "af_target", by.y = "original_word")
af$af_fake_target <- af$replacement_word
af$replacement_word <- NULL

gc()

# create possible trials ----
af_trials <- af[ , c("af_cue", "af_target")]
af_trials$type <- "related"
af_trials$cue_type <- "word"
af_trials$target_type <- "word"

af_trials <- rbind(af_trials,
                   data.frame(af_cue = af$af_cue, 
                              af_target = af$af_target[sample(1:1000, 
                                                              1000)],
                              type = "unrelated",
                              cue_type = "word", 
                              target_type = "word"), 
                   data.frame(af_cue = af$af_fake_cue, 
                              af_target = af$af_target[sample(1:1000, 
                                                              1000)],
                              type = "nonword",
                              cue_type = "nonword", 
                              target_type = "word"),
                   data.frame(af_cue = af$af_cue[sample(1:1000,
                                                        1000)], 
                              af_target = af$af_fake_target,
                              type = "nonword",
                              cue_type = "word", 
                              target_type = "nonword"),
                   data.frame(af_cue = af$af_fake_cue[sample(1:1000,
                                                             1000)], 
                              af_target = af$af_fake_target[sample(1:1000,
                                                                   1000)],
                              type = "nonword",
                              cue_type = "nonword", 
                              target_type = "nonword"))

# check dups run until 0
sum(duplicated(af_trials[ , c("af_cue", "af_target")]))

af$af_cosine <- NULL
write.csv(af, "af/af_translate.csv", row.names = F)

# get cosines -----

# set up model
af_model <- read.table("/Volumes/SPAML Backup/subs_vec/af/subs.af.1e6.txt", quote="\"")
af_model <- na.omit(af_model)
af_model$V1 <- tolower(af_model$V1)
af_model <- af_model[!duplicated(af_model$V1), ]
rownames(af_model) <- af_model$V1
af_model <- af_model[ , -1]

af_trials$af_cosine <- NA

# get cosine
for (row in 1:nrow(af_trials)){
  
  if(af_trials$type[row] != "nonword") { 
    
    af_trials$af_cosine[row] <- cosine(as.matrix(t(af_model[
      c(af_trials$af_cue[row], af_trials$af_target[row]) , ])))[2]
    
  }
  
}

tapply(af_trials$af_cosine, af_trials$type, mean, na.rm = T)
tapply(af_trials$af_cosine, af_trials$type, min, na.rm = T)
tapply(af_trials$af_cosine, af_trials$type, max, na.rm = T)

rm(af_model)

gc()

# write it out 
write.csv(af_trials, "af/af_trials.csv", row.names = F)

rm(list = ls())

gc()
```