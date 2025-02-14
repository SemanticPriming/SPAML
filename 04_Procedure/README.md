# Procedure Folder

NOTE: All data stored in the `data` folders of this file are examples or pilot test data. The real data is too big to store here. We use releases to share the real data. This setup is meant to show you how the workflow was set up online while the study was running.

You can find the real data [here](https://github.com/SemanticPriming/SPAML/releases).

This folder contains:

-   `consent_spaml.docx` is the English version of the consent form that is linked through OSF for people to download. The language specific versions of the consent are linked in the `03_Materials` folder.
-   `debug.php` is a file provided by the labjs team that helps you identify if your experimental setup on your own server with php and sql is set up properly.
-   `example/` folder includes the example .json that you can use to build the experiment in labjs, the pictures included in the proposal for the study.
-   `shiny/` folder contains the scripts used to build our shiny tracking app. Please note that to make this app work on a local machine, you should change the import file paths in `load_summary.R`.
-   `summary_data/` is a folder that demonstrates how the summaries were calculated for the shiny app and the algorithm. These files mirror the data analysis workflow, however, these R files also include the selection algorithm that writes/rewrites the embedded json stimuli files for the experiment to re-randomize every few minutes. Included in this folder:
    -   `lang_participants.csv`: examples of how we kept track of the total number of usable participants, their "participation" codes given to researchers who needed them, and the total number that each lab contributed.
    -   `lang_summarize_stim_local.R`: this file shows you how the summarization works on a local machine given this repo's file structure.
    -   `lang_summarize_stim.R`: this file version runs on our server to summarize the stimuli - variables may be manipulated at the top depending on what version of randomization we needed (see below).
    -   `lang_summary.csv`: a summary file that helped us track what stimuli were "done" that was presented on our shiny app.

NOTE: One more time! This is pilot or test data! These files allow you to see what we were doing and look for bugs. The real data was processed from SQLite files into the text versions presented in our releases because 1) we needed to remove participant codes and 2) these files are not the greatest setup for all researchers.

All other folders include the language setup - the files are coded with the two-letter language `en` or `ja`. On the server, sometimes there were multiple copies of these folders (i.e., `en1`, `en2`, etc.). The purpose of multiple copies was to ensure that collective testing (in the classroom, Mturk, respondi, etc.) did not all come to the same randomization of the study at the same time. For big paid data collections, words were randomly distributed evenly across 14 copies until that data collection was done to ensure equal distribution to real word conditions. After that, the randomization and selection algorithm was turned back on as described in our paper. You can see that selection algorithm and data sorting in the `summary_data` folder. Within these folders, you will find the labjs set up and a few other files:

-   `lang_words.csv` which included the trials used and how the selection algorithm knew what to look for.
-   `lang.json` which was the labjs setup file created for each experiment. Different versions maybe also be included depending on special setups.

These folders only show one copy of each version of the experiment to save space.
