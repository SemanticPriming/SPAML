target_table <- cs_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(cs_target) %>% 
  filter(n != 2)

weird_trials <- cs_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  filter(cs_target %in% target_table$cs_target)

write.csv(weird_trials, "cs_fix.csv")

target_table <- cs_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(cs_target, type) %>% 
  group_by(cs_target) %>% 
  mutate(total_trial = sum(n))
