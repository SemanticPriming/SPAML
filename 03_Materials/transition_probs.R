
# Transition Probabilities ------------------------------------------------

library(dplyr)

# make the data
related <- rep("WW", 1000)
unrelated <- rep("WW", 1000)
mix <- rep(c("NW", "WN"), 1000)
nonwords <- rep("NN", 1000)

DF <- data.frame("NN" = rep(NA, 1000),
                 "NW" = rep(NA, 1000),
                 "WN" = rep(NA, 1000),
                 "WW" = rep(NA, 1000))

for (i in 1:1000){
  
  # select the data
  trials <- c(sample(related, 150, replace = F), 
              sample(unrelated, 150, replace = F),
              sample(mix, 200, replace = F),
              sample(nonwords, 300, replace = F))
  
  # shuffle the trials
  trials <- sample(trials, 800, replace = F)
  
  # calculate the prob
  trials_paste <- paste0(trials, collapse = "")
  trials_order <- unlist(strsplit(trials_paste, ""))
  
  pair_list <- paste(trials_order, lead(trials_order, 1), sep = "-")
  pair_list <- pair_list[1:1599]
  
  DF[i, ] <- unname(table(pair_list))
  
}

apply(DF, 2, mean) / 1599



