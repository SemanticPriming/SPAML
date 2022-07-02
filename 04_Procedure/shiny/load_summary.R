# English -----------------------------------------------------------------

# en_participants <- import("/Users/erinbuchanan/GitHub/Research/2 projects/SPAML/SPAML-PSA/04_Procedure/en/data/en_participants.csv")
# en_summary <- import("/Users/erinbuchanan/GitHub/Research/2 projects/SPAML/SPAML-PSA/04_Procedure/en/data/en_summary.csv")
 
en_participants <- import("/var/www/html/en/data/en_participants.csv")
en_summary <- import("/var/www/html/en/data/en_summary.csv")

# en_participants <- rbind(en_participants, en_participants2)
# en_summary <- rbind(en_summary, en_summary2)

# Russian -----------------------------------------------------------------

ru_participants <- import("/var/www/html/ru/data/ru_participants.csv")
ru_summary <- import("/var/www/html/ru/data/ru_summary.csv") 

# Turkish -----------------------------------------------------------------

tr_participants <- import("/var/www/html/tr/data/tr_participants.csv")
tr_summary <- import("/var/www/html/tr/data/tr_summary.csv") 

# Korean -----------------------------------------------------------------

ko_participants <- import("/var/www/html/ko/data/ko_participants.csv")
ko_summary <- import("/var/www/html/ko/data/ko_summary.csv") 