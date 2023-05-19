library(rio)
library(dplyr)
library(sylly)
library(tidyr)
library(tidytext)
library(stringdist)
library(stringr)

DF <- import("03_materials/finalize_stimuli/he/he_translated.xlsx")

get_fake <- function(wordlist, language_hyp, replacewords){
  
  # figure out possible combinations --- 
  # figure out the syllables 
  hyp_words <- hyphen(as.character(wordlist), hyph.pattern = language_hyp)
  hyp_words <- hyp_words@hyphen
  hyp_words$word <- tolower(hyp_words$word)
  
  # for multiple syllable words
  multiple <- hyp_words %>% filter(syll > 1)
  # create pattern [blank, first] [first, second] [second, blank]
  if (nrow(multiple) >= 1){
    multiple$word <- paste("FIRST_BLANK-", multiple$word, "-LAST_BLANK", sep = "")
  }
  
  # for single syllable words 
  single <- hyp_words %>% filter(syll == 1)
  single$word <- gsub("(.{2})", "\\1-", single$word)
  single$word <- gsub("-$", "", single$word)
  single$word <- paste("FIRST_BLANK-", single$word, "-LAST_BLANK", sep = "")
  
  all <- rbind(single, multiple)
  all$word_id <- 1:nrow(all)
  
  # break them down 
  replacements <- unnest_tokens(all, 
                                output = "syllable", 
                                input = word, 
                                token = strsplit, split = "-") %>% 
    group_by(word_id) %>% 
    mutate(pair = paste(syllable, lead(syllable, 1), sep = "-")) %>% 
    filter(!grepl("NA", pair)) %>% 
    ungroup %>% 
    group_by(pair) %>%
    summarise(heequency = n()) %>% 
    separate(pair, c("first", "second"), "-", remove = F) %>% 
    mutate(first = gsub("\\s", "", first)) %>% 
    filter(first != "") %>% 
    filter(!grepl("^[[:space:]]", first)) 
  
  # break down replacement word list ---
  hyp_replace <- hyphen(as.character(replacewords), hyph.pattern = language_hyp)
  hyp_replace <- hyp_replace@hyphen
  hyp_replace$word <- tolower(hyp_replace$word)
  hyp_replace$word_id <- 1:nrow(hyp_replace)
  
  # for multiple syllable words
  multiple <- hyp_replace %>% filter(syll > 1)
  
  if (nrow(multiple) >= 1){
    # create pattern [blank, first] [first, second] [second, blank]
    multiple$word <- paste("FIRST_BLANK-", multiple$word, "-LAST_BLANK", sep = "")
  }
  
  # for single syllable words 
  single <- hyp_replace %>% filter(syll == 1)
  single$word <- gsub("(.{2})", "\\1-", single$word)
  single$word <- gsub("-$", "", single$word)
  single$word <- paste("FIRST_BLANK-", single$word, "-LAST_BLANK", sep = "")
  
  all <- rbind(single, multiple)
  
  to_replace <- unnest_tokens(all,
                              output = "syllable", 
                              input = word, 
                              token = strsplit, split = "-") %>% 
    group_by(word_id) %>% 
    mutate(pair = paste(syllable, lead(syllable, 1), sep = "-")) %>% 
    filter(!grepl("NA", pair))
  
  # merge replacements with things to replace to find heequency
  to_replace_options <- merge(to_replace, replacements, by = "pair", all.x = T) %>% 
    select(-syllable) %>% 
    separate(pair, c("first", "second"), "-", remove = FALSE)
  
  # now merge by first, then second to get possible replacements
  to_replace_options1 <- merge(to_replace_options, replacements, 
                               by = "first", all.x = T)
  colnames(to_replace_options1) <- c("first", "original_pair", "second", 
                                     "syll", "word_id", "original_heeq", 
                                     "replacement_pair", "replacement_syll", 
                                     "replacement_heeq")
  to_replace_options2 <- merge(to_replace_options, replacements, 
                               by = "second", all.x = T)
  colnames(to_replace_options2) <- c("second", "original_pair", "first", 
                                     "syll", "word_id", "original_heeq", 
                                     "replacement_pair", "replacement_syll", 
                                     "replacement_heeq")
  
  replace_options <- rbind(to_replace_options1, to_replace_options2)
  replace_options$original_heeq[is.na(replace_options$original_heeq)] <- 1
  
  replace_options$heeq_diff <- abs(replace_options$original_heeq - replace_options$replacement_heeq)
  replace_options$char_diff <- abs(nchar(replace_options$original_pair) - 
                                     nchar(replace_options$replacement_pair))
  
  replace_options$letter_diff <- stringdist(a = replace_options$original_pair, b = replace_options$replacement_pair) - replace_options$syll
  
  # replacements can't be blank
  # can't be the same replacement 
  replace_options <- replace_options %>% 
    filter(replacement_syll != "first_blank") %>% 
    filter(replacement_syll != "last_blank") %>% 
    filter(letter_diff > 0)
  
  # merge the words back in 
  replacewords <- as.data.frame(replacewords)
  colnames(replacewords) <- "original_word"
  replacewords$word_id <- 1:nrow(replacewords)
  replace_options <- merge(replace_options, replacewords,
                           by = "word_id", all = T)
  replace_options <- merge(replace_options, all[ , -1], 
                           by = "word_id", all = T)
  colnames(replace_options)[ncol(replace_options)] <- "replacement_word"
  replace_options$replacement_word <- tolower(replace_options$replacement_word)
  
  replace_options$replacement_word <- str_replace(
    string = replace_options$replacement_word, 
    pattern = replace_options$original_pair,
    replacement = replace_options$replacement_pair)
  replace_options$replacement_word <- gsub("first_blank|last_blank|-", "", replace_options$replacement_word)
  
  # remove replacement words that are in the original 
  replace_options <- replace_options %>% 
    filter(!(replacement_word %in% wordlist))
  
  # char diff to be zero 
  # letter diff to be lowest to match syllable
  # heequency diff to be < 2 but lowest
  replace_options <- replace_options %>% 
    group_by(original_word) %>% 
    arrange(char_diff, heeq_diff, letter_diff, .by_group = TRUE) %>% 
    slice(-1) # take the second for this adventure 
  
  new_words <- replace_options %>% 
    filter(!duplicated(original_word))
  
  return(new_words) 
}

he_patterns <- read.hyph.pat("03_materials/finalize_stimuli/hyphen/hyph-af.tex", "af")

# create fake words based on cue
he_fake_cue_update <- get_fake(wordlist = c(DF$he_cue, DF$he_target), #possibles
                          language_hyp = he_patterns, #hyphen rules
                          replacewords = DF$he_cue) #your words

DF <- DF %>%
  left_join(he_fake_cue_update %>% select(original_word, replacement_word),
            by = c("he_cue" = "original_word")) %>% rename("he_fake_cue_update" = "replacement_word")

he_fake_target_update <- get_fake(wordlist = c(DF$he_cue, DF$he_target), #possibles
                                  language_hyp = he_patterns, #hyphen rules
                                  replacewords = DF$he_target) #your words

DF <- DF %>% 
  left_join(he_fake_target_update %>% select(original_word, replacement_word), 
            by = c("he_target" = "original_word")) %>% 
  rename("he_fake_target_update" = "replacement_word")

export(DF, "03_materials/finalize_stimuli/he/he_translated_updated.xlsx")
