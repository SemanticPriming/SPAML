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
                            menuItem(tags$b("Korean"), tabName = "korean_tab"),
                            menuItem(tags$b("Czech"), tabName = "czech_tab"),
                            menuItem(tags$b("Japanese"), tabName = "japanese_tab")
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
    
    output$ru_zpid_summary <- renderDT({
      
      datatable(as.data.frame(unique(ru_totals[ , "url_special_code"])), rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$russianN_total <- renderInfoBox({
      infoBox(
        "Russian", sum(grepl("keep", ru_totals$keep)), 
        icon = icon("list"), color = "aqua")
    })
    
    output$russianWORD_total <- renderInfoBox({
      infoBox(
        "Russian", sum(ru_summary$done, na.rm = T), 
        icon = icon("list"), color = "aqua")
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
    
    output$tr_zpid_summary <- renderDT({
      
      datatable(as.data.frame(unique(tr_totals[ , "url_special_code"])), rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$turkishN_total <- renderInfoBox({
      infoBox(
        "Turkish", sum(grepl("keep", tr_totals$keep)), 
        icon = icon("list"), color = "red")
    })
    
    output$turkishWORD_total <- renderInfoBox({
      infoBox(
        "Turkish", sum(tr_summary$done, na.rm = T), 
        icon = icon("list"), color = "red")
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
        "Korean", sum(grepl("keep", ko_totals$keep)), 
        icon = icon("list"), color = "teal")
    })
    
    output$koreanWORD_total <- renderInfoBox({
      infoBox(
        "Korean", sum(ko_summary$done, na.rm = T), 
        icon = icon("list"), color = "teal")
    })
       
    # Japanese ----
    output$ja_participant_data <- renderDT({
      
      colnames(ja_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ja_participants, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ja_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ja_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ja_summary_table <- renderDT({
      
      datatable(ja_summary[ja_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$ja_zpid_summary <- renderDT({
      
      datatable(as.data.frame(unique(ja_totals[ , "url_special_code"])), rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$japaneseN_total <- renderInfoBox({
      infoBox(
        "Japanese", sum(grepl("keep", ja_totals$keep)), 
        icon = icon("list"), color = "light-blue")
    })
    
    output$japaneseWORD_total <- renderInfoBox({
      infoBox(
        "Japanese", sum(ja_summary$done, na.rm = T), 
        icon = icon("list"), color = "light-blue")
    })
    
    # Czech ----
    output$cs_participant_data <- renderDT({
      
      colnames(cs_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(cs_participants, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$cs_participant_table <- renderDT({
      
      temp <- as.data.frame(table(cs_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$cs_summary_table <- renderDT({
      
      datatable(cs_summary[cs_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$cs_zpid_summary <- renderDT({
      
      datatable(as.data.frame(unique(cs_totals[ , "url_special_code"])), rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$czechN_total <- renderInfoBox({
      infoBox(
        "Czech", sum(grepl("keep", cs_totals$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$czechWORD_total <- renderInfoBox({
      infoBox(
        "Czech", sum(cs_summary$done, na.rm = T), 
        icon = icon("list"), color = "navy")
    })
    
}


# Run the App -------------------------------------------------------------
shinyApp(ui = ui, server = server)
