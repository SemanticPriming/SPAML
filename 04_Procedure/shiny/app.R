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
                            menuItem(tags$b("Japanese"), tabName = "japanese_tab"),
                            menuItem(tags$b("Danish"), tabName = "danish_tab"),
                            menuItem(tags$b("Spanish"), tabName = "spanish_tab"),
                            menuItem(tags$b("German"), tabName = "german_tab"),
                            menuItem(tags$b("Portuguese"), tabName = "portuguese_tab"),
                            menuItem(tags$b("Simplified Chinese"), tabName = "s_chinese_tab"),
                            menuItem(tags$b("Arabic"), tabName = "arabic_tab"),
                            menuItem(tags$b("Farsi"), tabName = "farsi_tab"),
                            menuItem(tags$b("Finnish"), tabName = "finnish_tab"),
                            menuItem(tags$b("French"), tabName = "french_tab"),
                            menuItem(tags$b("Greek"), tabName = "greek_tab"),
                            menuItem(tags$b("Hungarian"), tabName = "hungarian_tab"),
                            menuItem(tags$b("Norwegian"), tabName = "norwegian_tab"),
                            menuItem(tags$b("Brazilian Portuguese"), tabName = "b_portuguese_tab"),
                            menuItem(tags$b("Romanian"), tabName = "romanian_tab"),
                            menuItem(tags$b("Serbian"), tabName = "serbian_tab"),
                            menuItem(tags$b("Urdu"), tabName = "urdu_tab")
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
                          korean_tab,
                          czech_tab,
                          japanese_tab,
                          danish_tab,
                          spanish_tab, 
                          german_tab, 
                          portuguese_tab, 
                          s_chinese_tab, 
                          arabic_tab, 
                          farsi_tab, 
                          finnish_tab, 
                          french_tab, 
                          greek_tab, 
                          hungarian_tab, 
                          norwegian_tab,
                          b_portuguese_tab,
                          romanian_tab,
                          serbian_tab,
                          urdu_tab
                        ) # end tabItems
                    ) # end dashboardBody
                ) # end dashboardPage

# Define the Server Logic -------------------------------------------------
server <- function(input, output) {
    
  # english ----
    output$en_participant_data <- renderDT({

        colnames(en_participants) <- c("PSA_ID", "Time", "Participant_ID")
        datatable(en_participants[ , 1:3], rownames = F,
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
        "English", sum(grepl("keep", en_participants$keep)), 
        icon = icon("list"), color = "purple")
    })
    
    output$englishWORD_total <- renderInfoBox({
      infoBox(
        "English", paste(round(sum(en_summary$done_both, na.rm = T)/2000*100,1),
                         round(sum(en_summary$done, na.rm = T)/2000*100,1), 
                         round(sum(en_summary$done_totalN, na.rm = T)/2000*100,1), 
                         sep = " - "), 
        icon = icon("list"), color = "purple")
    })
    
    # russian ----
    output$ru_participant_data <- renderDT({
      
      colnames(ru_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ru_participants[ , 1:3], rownames = F,
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
    
    output$russianN_total <- renderInfoBox({
      infoBox(
        "Russian", sum(grepl("keep", ru_participants$keep)), 
        icon = icon("list"), color = "aqua")
    })
    
    output$russianWORD_total <- renderInfoBox({
      infoBox(
        "Russian", paste(round(sum(ru_summary$done_both, na.rm = T)/2000*100,1), 
                         round(sum(ru_summary$done, na.rm = T)/2000*100,1), 
                         round(sum(ru_summary$done_totalN, na.rm = T)/2000*100,1), 
                         sep = " - "), 
        icon = icon("list"), color = "aqua")
    })
    
    # turkish ----
    output$tr_participant_data <- renderDT({
      
      colnames(tr_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(tr_participants[ , 1:3], rownames = F,
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
    
    output$turkishN_total <- renderInfoBox({
      infoBox(
        "Turkish", sum(grepl("keep", tr_participants$keep)), 
        icon = icon("list"), color = "red")
    })
    
    output$turkishWORD_total <- renderInfoBox({
      infoBox(
        "Turkish", paste(round(sum(tr_summary$done_both, na.rm = T)/2000*100,1), 
                         round(sum(tr_summary$done, na.rm = T)/2000*100,1), 
                         round(sum(tr_summary$done_totalN, na.rm = T)/2000*100,1), 
                         sep = " - "), 
        icon = icon("list"), color = "red")
    })
 
    # korean ----
    output$ko_participant_data <- renderDT({
      
      colnames(ko_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ko_participants[ , 1:3], rownames = F,
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
    
    output$koreanN_total <- renderInfoBox({
      infoBox(
        "Korean", sum(grepl("keep", ko_participants$keep)), 
        icon = icon("list"), color = "teal")
    })
    
    output$koreanWORD_total <- renderInfoBox({
      infoBox(
        "Korean", paste(round(sum(ko_summary$done_both, na.rm = T)/2033*100,1), 
                        round(sum(ko_summary$done, na.rm = T)/2033*100,1), 
                        round(sum(ko_summary$done_totalN, na.rm = T)/2033*100,1), 
                        sep = " - "),
        icon = icon("list"), color = "teal")
    })
       
    # Japanese ----
    output$ja_participant_data <- renderDT({
      
      colnames(ja_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ja_participants[ , 1:3], rownames = F,
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
    
    output$japaneseN_total <- renderInfoBox({
      infoBox(
        "Japanese", sum(grepl("keep", ja_participants$keep)), 
        icon = icon("list"), color = "light-blue")
    })
    
    output$japaneseWORD_total <- renderInfoBox({
      infoBox(
        "Japanese", paste(round(sum(ja_summary$done_both, na.rm = T)/2000*100,1), 
                          round(sum(ja_summary$done, na.rm = T)/2000*100,1), 
                          round(sum(ja_summary$done_totalN, na.rm = T)/2000*100,1), 
                          sep = " - "), 
        icon = icon("list"), color = "light-blue")
    })
    
    # Czech ----
    output$cs_participant_data <- renderDT({
      
      colnames(cs_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(cs_participants[ , 1:3], rownames = F,
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
    
    output$czechN_total <- renderInfoBox({
      infoBox(
        "Czech", sum(grepl("keep", cs_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$czechWORD_total <- renderInfoBox({
      infoBox(
        "Czech", paste(round(sum(cs_summary$done_both, na.rm = T)/2000*100,1), 
                       round(sum(cs_summary$done, na.rm = T)/2000*100,1), 
                       round(sum(cs_summary$done_totalN, na.rm = T)/2000*100,1), 
                       sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # danish ----
    output$da_participant_data <- renderDT({
      
      colnames(da_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(da_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$da_participant_table <- renderDT({
      
      temp <- as.data.frame(table(da_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$da_summary_table <- renderDT({
      
      datatable(da_summary[da_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$danishN_total <- renderInfoBox({
      infoBox(
        "Danish", sum(grepl("keep", da_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$danishWORD_total <- renderInfoBox({
      infoBox(
        "Danish", paste(round(sum(da_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(da_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(da_summary$done_totalN, na.rm = T)/2000*100,1), 
                       sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Spanish ----
    output$es_participant_data <- renderDT({
      
      colnames(es_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(es_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$es_participant_table <- renderDT({
      
      temp <- as.data.frame(table(es_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$es_summary_table <- renderDT({
      
      datatable(es_summary[es_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$SpanishN_total <- renderInfoBox({
      infoBox(
        "Spanish", sum(grepl("keep", es_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$SpanishWORD_total <- renderInfoBox({
      infoBox(
        "Spanish", paste(round(sum(es_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(es_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(es_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # German ----
    output$de_participant_data <- renderDT({
      
      colnames(de_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(de_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$de_participant_table <- renderDT({
      
      temp <- as.data.frame(table(de_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$de_summary_table <- renderDT({
      
      datatable(de_summary[de_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$GermanN_total <- renderInfoBox({
      infoBox(
        "German", sum(grepl("keep", de_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$GermanWORD_total <- renderInfoBox({
      infoBox(
        "German", paste(round(sum(de_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(de_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(de_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Portuguese ----
    output$pt_participant_data <- renderDT({
      
      colnames(pt_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(pt_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$pt_participant_table <- renderDT({
      
      temp <- as.data.frame(table(pt_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$pt_summary_table <- renderDT({
      
      datatable(pt_summary[pt_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$PortugueseN_total <- renderInfoBox({
      infoBox(
        "Portuguese", sum(grepl("keep", pt_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$PortugueseWORD_total <- renderInfoBox({
      infoBox(
        "Portuguese", paste(round(sum(pt_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(pt_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(pt_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Simplified Chinese ----
    output$zh_participant_data <- renderDT({
      
      colnames(zh_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(zh_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$zh_participant_table <- renderDT({
      
      temp <- as.data.frame(table(zh_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$zh_summary_table <- renderDT({
      
      datatable(zh_summary[zh_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$Simplified_ChineseN_total <- renderInfoBox({
      infoBox(
        "Simplified Chinese", sum(grepl("keep", zh_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$Simplified_ChineseWORD_total <- renderInfoBox({
      infoBox(
        "Simplified Chinese", paste(round(sum(zh_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(zh_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(zh_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Arabic ----
    output$ar_participant_data <- renderDT({
      
      colnames(ar_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ar_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ar_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ar_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ar_summary_table <- renderDT({
      
      datatable(ar_summary[ar_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$ArabicN_total <- renderInfoBox({
      infoBox(
        "Arabic", sum(grepl("keep", ar_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$ArabicWORD_total <- renderInfoBox({
      infoBox(
        "Arabic", paste(round(sum(ar_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(ar_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(ar_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Farsi ----
    output$fa_participant_data <- renderDT({
      
      colnames(fa_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(fa_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fa_participant_table <- renderDT({
      
      temp <- as.data.frame(table(fa_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fa_summary_table <- renderDT({
      
      datatable(fa_summary[fa_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$FarsiN_total <- renderInfoBox({
      infoBox(
        "Farsi", sum(grepl("keep", fa_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$FarsiWORD_total <- renderInfoBox({
      infoBox(
        "Farsi", paste(round(sum(fa_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(fa_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(fa_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Finnish ----
    output$fi_participant_data <- renderDT({
      
      colnames(fi_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(fi_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fi_participant_table <- renderDT({
      
      temp <- as.data.frame(table(fi_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fi_summary_table <- renderDT({
      
      datatable(fi_summary[fi_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$FinnishN_total <- renderInfoBox({
      infoBox(
        "Finnish", sum(grepl("keep", fi_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$FinnishWORD_total <- renderInfoBox({
      infoBox(
        "Finnish", paste(round(sum(fi_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(fi_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(fi_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # French ----
    output$fr_participant_data <- renderDT({
      
      colnames(fr_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(fr_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fr_participant_table <- renderDT({
      
      temp <- as.data.frame(table(fr_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$fr_summary_table <- renderDT({
      
      datatable(fr_summary[fr_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$FrenchN_total <- renderInfoBox({
      infoBox(
        "French", sum(grepl("keep", fr_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$FrenchWORD_total <- renderInfoBox({
      infoBox(
        "French", paste(round(sum(fr_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(fr_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(fr_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Greek ----
    output$el_participant_data <- renderDT({
      
      colnames(el_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(el_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$el_participant_table <- renderDT({
      
      temp <- as.data.frame(table(el_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$el_summary_table <- renderDT({
      
      datatable(el_summary[el_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$GreekN_total <- renderInfoBox({
      infoBox(
        "Greek", sum(grepl("keep", el_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$GreekWORD_total <- renderInfoBox({
      infoBox(
        "Greek", paste(round(sum(el_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(el_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(el_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Hungarian ----
    output$hu_participant_data <- renderDT({
      
      colnames(hu_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(hu_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$hu_participant_table <- renderDT({
      
      temp <- as.data.frame(table(hu_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$hu_summary_table <- renderDT({
      
      datatable(hu_summary[hu_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$HungarianN_total <- renderInfoBox({
      infoBox(
        "Hungarian", sum(grepl("keep", hu_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$HungarianWORD_total <- renderInfoBox({
      infoBox(
        "Hungarian", paste(round(sum(hu_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(hu_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(hu_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Norwegian ----
    output$no_participant_data <- renderDT({
      
      colnames(no_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(no_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$no_participant_table <- renderDT({
      
      temp <- as.data.frame(table(no_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$no_summary_table <- renderDT({
      
      datatable(no_summary[no_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$NorwegianN_total <- renderInfoBox({
      infoBox(
        "Norwegian", sum(grepl("keep", no_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$NorwegianWORD_total <- renderInfoBox({
      infoBox(
        "Norwegian", paste(round(sum(no_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(no_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(no_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Brazilian Portuguese ----
    output$br_pt_participant_data <- renderDT({
      
      colnames(br_pt_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(br_pt_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$br_pt_participant_table <- renderDT({
      
      temp <- as.data.frame(table(br_pt_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$br_pt_summary_table <- renderDT({
      
      datatable(br_pt_summary[br_pt_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$Brazilian_PortugueseN_total <- renderInfoBox({
      infoBox(
        "Brazilian Portuguese", sum(grepl("keep", br_pt_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$Brazilian_PortugueseWORD_total <- renderInfoBox({
      infoBox(
        "Brazilian Portuguese", paste(round(sum(br_pt_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(br_pt_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(br_pt_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Romanian ----
    output$ro_participant_data <- renderDT({
      
      colnames(ro_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ro_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ro_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ro_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ro_summary_table <- renderDT({
      
      datatable(ro_summary[ro_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$RomanianN_total <- renderInfoBox({
      infoBox(
        "Romanian", sum(grepl("keep", ro_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$RomanianWORD_total <- renderInfoBox({
      infoBox(
        "Romanian", paste(round(sum(ro_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(ro_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(ro_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Serbian ----
    output$sr_participant_data <- renderDT({
      
      colnames(sr_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(sr_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$sr_participant_table <- renderDT({
      
      temp <- as.data.frame(table(sr_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$sr_summary_table <- renderDT({
      
      datatable(sr_summary[sr_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$SerbianN_total <- renderInfoBox({
      infoBox(
        "Serbian", sum(grepl("keep", sr_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$SerbianWORD_total <- renderInfoBox({
      infoBox(
        "Serbian", paste(round(sum(sr_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(sr_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(sr_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
    # Urdu ----
    output$ur_participant_data <- renderDT({
      
      colnames(ur_participants) <- c("PSA_ID", "Time", "Participant_ID")
      datatable(ur_participants[ , 1:3], rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ur_participant_table <- renderDT({
      
      temp <- as.data.frame(table(ur_participants$url_lab))
      
      colnames(temp) <- c("PSA_ID", "Frequency")
      datatable(temp, rownames = F,
                filter = "top",
                options = list(dom = 'tp'))
    })
    
    output$ur_summary_table <- renderDT({
      
      datatable(ur_summary[ur_summary$type != "nonword", ], rownames = F,
                filter = "top",
                options = list(dom = 'tp', scrollX = TRUE))
    })
    
    output$UrduN_total <- renderInfoBox({
      infoBox(
        "Urdu", sum(grepl("keep", ur_participants$keep)), 
        icon = icon("list"), color = "navy")
    })
    
    output$UrduWORD_total <- renderInfoBox({
      infoBox(
        "Urdu", paste(round(sum(ur_summary$done_both, na.rm = T)/2000*100,1), 
                        round(sum(ur_summary$done, na.rm = T)/2000*100,1), 
                        round(sum(ur_summary$done_totalN, na.rm = T)/2000*100,1), 
                        sep = " - "), 
        icon = icon("list"), color = "navy")
    })
    
}


# Run the App -------------------------------------------------------------
shinyApp(ui = ui, server = server)
