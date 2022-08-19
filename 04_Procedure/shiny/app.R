# Load Libraries ----------------------------------------------------------
library(shiny)
library(shinydashboard)
library(DT)
library(rio)

# Load Stuff --------------------------------------------------------------

source("tabs.R")
source("load_summary.R")

# Define the UI -----------------------------------------------------------

ui <- dashboardPage(skin = 'purple',
                    dashboardHeader(title = "PSA 007 Tracker"),
                    dashboardSidebar(
                        sidebarMenu(
                            menuItem(tags$b("Overall"), tabName = "overall_tab"),
                            menuItem(tags$b("English"), tabName = "english_tab"),
                            menuItem(tags$b("Russian"), tabName = "russian_tab"),
                            menuItem(tags$b("Turkish"), tabName = "turkish_tab"),
                            menuItem(tags$b("Korean"), tabName = "korean_tab")
                            )
                        ),
                    dashboardBody(
                        
                        ## add a custom css file
                        tags$head(tags$style(HTML('
      .main-header .logo {
        font-weight: bold;
        font-size: 16px;
      }
      .box.box-solid.box-primary>.box-header {
        color:#fff;
        background:#666666
      }
      .box.box-solid.box-primary {
        border-bottom-color:#666666;
        border-left-color:#666666;
        border-right-color:#666666;
        border-top-color:#666666;
      }'))),
                        
                        ## show the tab items
                        tabItems(
                          overall_tab,
                          english_tab,
                          russian_tab,
                          turkish_tab, 
                          korean_tab
                        ) # end tabItems
                    ) # end dashboardBody
                ) # end dashboardPage

# Define the Server Logic -------------------------------------------------
server <- function(input, output) {
    
  # english ----
    output$en_participant_data <- renderDT({

        colnames(en_participants) <- c("PSA_ID", "Time", "Participant_ID")
        datatable(en_participants, rownames = F,
                  filter = "top",
                  options = list(dom = 'tp'))
    })
    
    output$en_participant_table <- renderDT({
      
      temp <- as.data.frame(table(en_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$en_summary_table <- renderDT({
      
      datatable(en_summary[en_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$englishN_total <- renderInfoBox({
      infoBox(
        "English", sum(grepl("keep", en_totals$keep)), 
        icon = icon("list"), color = "purple")
    })
    
    output$englishWORD_total <- renderInfoBox({
      infoBox(
        "English", sum(en_summary$done, na.rm = T), 
        icon = icon("list"), color = "purple")
    })
    
    # russian ----
    output$ru_participant_data <- renderDT({
      
      colnames(ru_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ru_participants, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ru_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ru_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ru_summary_table <- renderDT({
      
      datatable(ru_summary[ru_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    # turkish ----
    output$tr_participant_data <- renderDT({
      
      colnames(tr_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(tr_participants, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$tr_participant_table <- renderDT({
      
      temp <- as.data.frame(table(tr_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$tr_summary_table <- renderDT({
      
      datatable(tr_summary[tr_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
 
    # korean ----
    output$ko_participant_data <- renderDT({
      
      colnames(ko_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ko_participants, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ko_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ko_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ko_summary_table <- renderDT({
      
      datatable(ko_summary[ko_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$ko_zpid_summary <- renderDT({
      
      datatable(as.data.frame(unique(ko_totals[ , "url_special_code"])), rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$koreanN_total <- renderInfoBox({
      infoBox(
        "korean", sum(grepl("keep", ko_totals$keep)), 
        icon = icon("list"), color = "green")
    })
    
    output$koreanWORD_total <- renderInfoBox({
      infoBox(
        "korean", sum(ko_summary$done, na.rm = T), 
        icon = icon("list"), color = "green")
    })
       
}


# Run the App -------------------------------------------------------------
shinyApp(ui = ui, server = server)
