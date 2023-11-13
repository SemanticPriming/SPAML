# Overall Data ------------------------------------------------------------

overall_tab <- 
  tabItem(tabName = "overall_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This information bax gives you the total number of people we 
                can use in each language. Please note that the specific 
                language tab will show you total numbers from your lab, 
                which may be higher (i.e., this excludes people who do not 
                meet criteria)."), 
              
              infoBoxOutput("ArabicN_total"),
              infoBoxOutput("czechN_total"), 
              infoBoxOutput("danishN_total"),
              infoBoxOutput("DutchN_total"),
              infoBoxOutput("GermanN_total"),
              infoBoxOutput("GreekN_total"),
              infoBoxOutput("englishN_total"),
              infoBoxOutput("SpanishN_total"),
              infoBoxOutput("FarsiN_total"),
              infoBoxOutput("FinnishN_total"),
              infoBoxOutput("FrenchN_total"),
              infoBoxOutput("hebrewN_total"),
              infoBoxOutput("HungarianN_total"),
              infoBoxOutput("ItalianN_total"),
              infoBoxOutput("japaneseN_total"),
              infoBoxOutput("koreanN_total"), 
              infoBoxOutput("NorwegianN_total"),
              infoBoxOutput("PortugueseN_total"),
              infoBoxOutput("Brazilian_PortugueseN_total"),
              infoBoxOutput("PolishN_total"),
              infoBoxOutput("RomanianN_total"),
              infoBoxOutput("russianN_total"), 
              infoBoxOutput("SerbianN_total"),
              infoBoxOutput("SlovakN_total"),
              infoBoxOutput("slovenianN_total"),
              infoBoxOutput("thaiN_total"),
              infoBoxOutput("turkishN_total"),
              infoBoxOutput("UrduN_total"),
              infoBoxOutput("Simplified_ChineseN_total"),
              infoBoxOutput("Traditional_ChineseN_total")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This information box gives you an overview of the percent 
                of 'completed' words for each langauge. There are three 
                numbers presented for each language:"), 
              p("1) The percent of words that have 50 people who have 
                answered the word (total sample target >= 50 AND 
                the SE for the word is less than .09 OR at least 
                320 people have answered the word (the pre-registered 
                stopping and maximum rules)"), 
              p("2) The percent of words with at least 50 people who
              have gotten the answer right 
                for the word (target answered correctly, a slightly 
                better minimum value we hope to achieve)"), 
              p("3) The percent of words with at least 50 
              people have answered the word (the 
                pre-registered minimum)"), 
              infoBoxOutput("ArabicWORD_total"),
              infoBoxOutput("czechWORD_total"), 
              infoBoxOutput("danishWORD_total"),
              infoBoxOutput("DutchWORD_total"),
              infoBoxOutput("GermanWORD_total"),
              infoBoxOutput("GreekWORD_total"),
              infoBoxOutput("englishWORD_total"),
              infoBoxOutput("SpanishWORD_total"),
              infoBoxOutput("FarsiWORD_total"),
              infoBoxOutput("FinnishWORD_total"),
              infoBoxOutput("FrenchWORD_total"),
              infoBoxOutput("hebrewWORD_total"),
              infoBoxOutput("HungarianWORD_total"),
              infoBoxOutput("ItalianWORD_total"),
              infoBoxOutput("japaneseWORD_total"),
              infoBoxOutput("koreanWORD_total"), 
              infoBoxOutput("NorwegianWORD_total"),
              infoBoxOutput("PortugueseWORD_total"),
              infoBoxOutput("Brazilian_PortugueseWORD_total"),
              infoBoxOutput("PolishWORD_total"),
              infoBoxOutput("RomanianWORD_total"),
              infoBoxOutput("russianWORD_total"), 
              infoBoxOutput("SerbianWORD_total"),
              infoBoxOutput("SlovakWORD_total"),
              infoBoxOutput("slovenianWORD_total"),
              infoBoxOutput("thaiWORD_total"),
              infoBoxOutput("turkishWORD_total"),
              infoBoxOutput("UrduWORD_total"),
              infoBoxOutput("Simplified_ChineseWORD_total"),
              infoBoxOutput("Traditional_ChineseWORD_total"),
              infoBoxOutput("Portuguese_TogetherWORD_total")
              
            )  # close box
          ) #close row
  ) #close tab

# English ------------------------------------------------------------------
english_tab <- 
  tabItem(tabName = "english_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("en_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
            DTOutput("en_participant_table")
            ),  # close box
          
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("en_summary_table")  
              
            )  # close box
        ) #close row
  ) #close tab

# Russian ------------------------------------------------------------------
russian_tab <- 
  tabItem(tabName = "russian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ru_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ru_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ru_summary_table")  
              
            ) # close box 
          ) #close row
  ) #close tab

# Turkish ------------------------------------------------------------------
turkish_tab <- 
  tabItem(tabName = "turkish_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("tr_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("tr_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("tr_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# Korean ------------------------------------------------------------------
korean_tab <- 
  tabItem(tabName = "korean_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ko_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ko_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ko_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# Japanese ------------------------------------------------------------------
japanese_tab <- 
  tabItem(tabName = "japanese_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ja_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ja_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ja_summary_table")  
              
            )  # close box
          ) #close row
  ) #close tab

# Czech ------------------------------------------------------------------
czech_tab <- 
  tabItem(tabName = "czech_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("cs_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("cs_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("cs_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# Danish ------------------------------------------------------------------
danish_tab <- 
  tabItem(tabName = "danish_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("da_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("da_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("da_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# dutch ------------------------------------------------------------------
dutch_tab <- 
  tabItem(tabName = "dutch_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("nl_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("nl_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("nl_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# spanish ------------------------------------------------------------------
spanish_tab <- 
  tabItem(tabName = "spanish_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("es_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("es_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("es_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# german ------------------------------------------------------------------
german_tab <- 
  tabItem(tabName = "german_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("de_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("de_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("de_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# portuguese ------------------------------------------------------------------
portuguese_tab <- 
  tabItem(tabName = "portuguese_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("pt_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("pt_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("pt_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# s_chinese ------------------------------------------------------------------
s_chinese_tab <- 
  tabItem(tabName = "s_chinese_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("zh_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("zh_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("zh_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# arabic ------------------------------------------------------------------
arabic_tab <- 
  tabItem(tabName = "arabic_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ar_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ar_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ar_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# farsi ------------------------------------------------------------------
farsi_tab <- 
  tabItem(tabName = "farsi_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("fa_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("fa_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("fa_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# finnish ------------------------------------------------------------------
finnish_tab <- 
  tabItem(tabName = "finnish_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("fi_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("fi_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("fi_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# french ------------------------------------------------------------------
french_tab <- 
  tabItem(tabName = "french_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("fr_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("fr_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("fr_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# greek ------------------------------------------------------------------
greek_tab <- 
  tabItem(tabName = "greek_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("el_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("el_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("el_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# hungarian ------------------------------------------------------------------
hungarian_tab <- 
  tabItem(tabName = "hungarian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("hu_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("hu_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("hu_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# norwegian ------------------------------------------------------------------
norwegian_tab <- 
  tabItem(tabName = "norwegian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("no_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("no_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("no_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# brazilian portuguese ------------------------------------------------------------------
b_portuguese_tab <- 
  tabItem(tabName = "b_portuguese_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("br_pt_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("br_pt_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("br_pt_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# romanian ------------------------------------------------------------------
romanian_tab <- 
  tabItem(tabName = "romanian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ro_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ro_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ro_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# serbian ------------------------------------------------------------------
serbian_tab <- 
  tabItem(tabName = "serbian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("sr_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("sr_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("sr_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# urdu ------------------------------------------------------------------
urdu_tab <- 
  tabItem(tabName = "urdu_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("ur_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("ur_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("ur_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# italian ------------------------------------------------------------------
italian_tab <- 
  tabItem(tabName = "italian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("it_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("it_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("it_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# polish ------------------------------------------------------------------
polish_tab <- 
  tabItem(tabName = "polish_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("pl_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("pl_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("pl_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# trad chinese ------------------------------------------------------------------
t_chinese_tab <- 
  tabItem(tabName = "t_chinese_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("zh_hk_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("zh_hk_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("zh_hk_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# slovak ------------------------------------------------------------------
slovak_tab <- 
  tabItem(tabName = "slovak_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("sk_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("sk_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("sk_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# hebrew ------------------------------------------------------------------
hebrew_tab <- 
  tabItem(tabName = "hebrew_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("he_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("he_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("he_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# thai ------------------------------------------------------------------
thai_tab <- 
  tabItem(tabName = "thai_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("th_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("th_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("th_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# slovenian ------------------------------------------------------------------
slovenian_tab <- 
  tabItem(tabName = "slovenian_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("sl_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("sl_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("sl_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab

# hindi ------------------------------------------------------------------
hindi_tab <- 
  tabItem(tabName = "hindi_tab",
          fluidRow(
            # Overall --------
            box(
              title = tags$b("Participant Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("You can use this information to determine when your 
                participants were completing the study based on your 
                individual lab link. Participant codes will be 
                shown below with time completed."), 
              DTOutput("hi_participant_data"),  
              p(" "),
              p("You can view the summary of total lab participants in 
                this section."),
              DTOutput("hi_participant_table")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts + Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table shows you the status of each item's data collection. 
                We are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("hi_summary_table")  
              
            ) # close box
          ) #close row
  ) #close tab