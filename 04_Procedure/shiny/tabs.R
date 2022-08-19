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
              infoBoxOutput("englishN_total"),
              infoBoxOutput("koreanN_total")
            ),  # close box
            
            # words ----
            box(
              title = tags$b("Stimuli Counts"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This information box gives you an overview of the number 
                of 'completed' words for each langauge. Note that this tracks 
                the number who both have N = 50 and SE < .09, not just the 
                minimum sample size."), 
              infoBoxOutput("englishWORD_total"),
              infoBoxOutput("koreanWORD_total")
              
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
              
            )  # close box
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
              
            )  # close box
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
              
            ),  # close box
            # ZPID ----
            box(
              title = tags$b("Special Code Tracker"),
              collapsible = TRUE,
              solidHeader = TRUE,
              status = "primary",
              width = 12,
              p("This table includes information for specific data collection."), 
              DTOutput("ko_zpid_summary")  
              
            )  # close box
          ) #close row
  ) #close tab

