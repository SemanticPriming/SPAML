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
                            menuItem(tags$b("English"), tabName = "english_tab"),
                            menuItem(tags$b("Russian"), tabName = "russian_tab")
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
                          english_tab,
                          russian_tab
                        ) # end tabItems
                    ) # end dashboardBody
                ) # end dashboardPage

# Define the Server Logic -------------------------------------------------
server <- function(input, output) {
    
  # english ----
    output$en_participant_data <- renderDT({

        colnames(en_participants) <- c("PSA_ID", "Time")
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
                options = list(dom = 'tp'))
    })
    
    # russian ----
    output$ru_participant_data <- renderDT({
      
      colnames(ru_participants) <- c("PSA_ID", "Time")
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
                options = list(dom = 'tp'))
    })
    
}


# Run the App -------------------------------------------------------------
shinyApp(ui = ui, server = server)
