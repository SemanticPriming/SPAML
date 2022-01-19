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
                individual lab link."), 
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
                While the non-word items are shown below, we are mainly tracking 
                the related and unrelated conditions to reach 50 participants and a 
                SE <= .09 OR maximum of 320 participants. Once a pair reaches these 
                points, they will be sampled less often than the words that still 
                need participants. "), 
              DTOutput("en_summary_table")  
              
            )  # close box
        ) #close row
  ) #close tab
