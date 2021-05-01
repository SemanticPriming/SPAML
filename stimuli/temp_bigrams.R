library(lexicon)
library(quanteda)
data("pos_action_verb")
DF <- as.data.frame(pos_action_verb)

bigrams <- as.data.frame(
  table(char_ngrams(
    unlist(tokens(DF$pos_action_verb, "character")), 
    concatenator = "")))

bigrams <- subset(bigrams, Freq > 1)

# pick a random letter
num_replace <- sample(1:nchar(word), 1)
char_replace <- substr(word, num_replace, num_replace)

# if the first letter
if (num_replace == 1){
  
  examine_replace <- substr(word, num_replace + 1, num_replace + 1)
  poss_replace <- sample(substr(
    bigrams$Var1[grepl(paste0(examine_replace, "$"), bigrams$Var1)], 1, 1),1)
  word <- gsub(char_replace, poss_replace, word)
  
  # if the last letter
} else if (num_replace == nchar(word)){
  
  examine_replace <- substr(word, num_replace - 1, num_replace - 1)
  poss_replace <- sample(substr(
    bigrams$Var1[grepl(paste0("^", examine_replace), bigrams$Var1)], 2, 2),1)
  word <- gsub(char_replace, poss_replace, word)
  
  # if anything else 
} else {
  
  examine_replace_before <- substr(word, num_replace - 1, num_replace - 1)
  examine_replace_after <- substr(word, num_replace + 1, num_replace + 1)
  
  poss_replace <- sample(
    intersect(substr(bigrams$Var1[
    grepl(paste0("^", examine_replace_before), 
          bigrams$Var1)], 2, 2),
    substr(bigrams$Var1[
      grepl(paste0(examine_replace_after, "$"), 
            bigrams$Var1)], 1, 1)), 1)
  
  word <- gsub(char_replace, poss_replace, word)
  
}