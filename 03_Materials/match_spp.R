library(rio)
SPP <- import("./06_Analysis/spp_ldt_prime.xlsx")

ours <- import("./03_Materials/finalize_stimuli/en/en_trials.csv")

library(dplyr)
library(tidyr)

SPP1 <- SPP %>% 
  select(target, prime_1st_assoc, prime_other_related) %>% 
  pivot_longer(cols = c(prime_1st_assoc, prime_other_related)) 

SPP1$target <- tolower(SPP1$target)
SPP1$value <- tolower(SPP1$value)

ours <- ours %>% 
  left_join(SPP1, 
            by = c("en_cue" = "value", "en_target" = "target")) %>% 
  left_join(SPP1, 
            by = c("en_cue" = "target", "en_target" = "value"))

ours$included <- paste0(ours$name.x, ours$name.y)

sum(ours$included != "NANA")
