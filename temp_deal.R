target_table <- ja_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(ja_target) %>% 
  filter(n != 2)

weird_trials <- ja_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  filter(ja_target %in% target_table$ja_target)

write.csv(weird_trials, "ja_fix.csv")

target_table <- ja_words %>% 
  filter(target_type == "word") %>% 
  filter(type != "nonword") %>% 
  count(ja_target, type) %>% 
  group_by(ja_target) %>% 
  mutate(total_trial = sum(n))
