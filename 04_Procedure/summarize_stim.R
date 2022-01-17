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

# Data --------------------------------------------------------------------

# original word lists
en_words <- import("./04_Procedure/en/en_words.csv")

# collected data


# Clean Up ----------------------------------------------------------------

# removes incorrect trials since they don't count
# removes participants who could not get 80% correct on 100 minimum trials
# z scores each participants data 


# Calculate Statistics ----------------------------------------------------

# calculates word, sample size, SE, "done" with <= .09 SE 
# creates participant ID list by lab 

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


