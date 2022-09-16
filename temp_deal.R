target_table <- ru_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(ru_target) %>% 
  filter(n != 2)

weird_trials <- ru_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  filter(ru_target %in% target_table$ru_target)

write.csv(weird_trials, "ru_fix.csv")

target_table <- ru_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(ru_target, type) %>% 
  group_by(ru_target) %>% 
  mutate(total_trial = sum(n))
