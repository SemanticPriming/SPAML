# Materials Folder

To create the materials, we started with `stimuli_creation`:

-   The file `stimuli_creation.Rmd` shows how the stimuli were originally generated according to our pre-print description. You can also view a picture of the process using the `selection_flowchart` files (original .drawio form or .jpg). Note that the files used from subs2vec were stored externally to this repository because they are several GB large. The links for them can be found in the stimuli options file.
-   In the `similarity` folder, the output from `stimuli_creation.Rmd` can be found. Each file is formatted as *(language code)*\_ sims.csv to indicate the two-digit language code and that they are the simulation output. These files contain the top 10,000 words by top 5 cosine values related to each word as a starting point for stimuli.
-   These files were then combined together into `translation_dict.csv`, merging all potential starting cue-target pairs into one file. These are loosely translated using Google Translate.
-   From this file `finalstimuli_list.xlsx` was created. This file contains the English word-pairs selected with the most overlap between languages, trying to avoid using words twice, avoid some direct orthographic forms, and more (this was not totally possible, but were the guidelines we followed).
-   Last, `final_selected_words.csv` was created, which was the starting point for the final stimuli: it contains all available translations for the stimuli from English to other languages. These are not the procedure stimuli, as they have not yet undergone translation checks and fixes.

Next, we created the `finalize_stimuli` folder:

-   `final_selected_words.xlsx` is a file that contains all the final words from the previous folder filled in using Google Translate to give translators a starting point from which to work.
-   Next, we used `translation_stimuli.Rmd` to create the files for translators (which are stored in individual folders within this folder). This document takes the proposed stimuli and creates the information for each one to be included in the experiment for translation purposes. This file creates the Wuggy-like fake words for most languages (but not Chinese) and originally created trial pairings for each language. We ended up reorganizing these original trial pairings in the final step, as the unrelated pairs needed to be controlled for their cosine similarity. The outputs for this document are in each subfolder. The important information is:
    -   `LANG_translate.csv`: original file given to translators to review
    -   `LANG_fake_cues.csv`: statistics information Wuggy style of the original fake cues (note that many of these changed during the translation process)
    -   `LANG_fake_targets.csv`: statistics information Wuggy style of the original fake targets (note that many of these changed during the translation process)
    -   Note that the `hyphen` folder contains the hyphenation rules used when available for our Wuggy-like algorithm.
-   Next, the `finalize_stimuli.Rmd` was used on the the files provided by translators to create the list actually shown to participants. All cues, targets, and fake words were updated from the original translate list. The trials were created by matching unrelated pairings from the English version to the current language. These were shuffled until the lowest pairings could be found. Then the related pairs were added, and the non-word pairings were created with a random shuffle. Other notes are included, as well as noting that this file is an informal record of what order the language versions were created in.

The other files in each subfolder (possibly) include:

-   `LANG_translated.xlsx`: a step between `LANG_translate.csv` and the finalized translations. Not included in all languages, but sometimes necessary when new fake words were needed be generated.
-   `LANG_update.R`: used to create new fake words when requested, this file was used to created the `_updated` file.
-   `LANG_translated_updated.xlsx`: The new fake words combined with the previous translations files given back to translators.
-   `LANG_translated_final.xlsx`: the finalized excel document that translators provided to create the trials from.
-   `LANG_trials_final.csv`: final trials information used to create the experiment copied over to procedure files.
-   `materias_LANG.docx/pdf`: materials translated into language added from translators.
-   `consent_LANG.docx/pdf`: consent form translated into language added from translators.
-   All other files come from translation teams and are used to create the finalized trials, please see code.
-   We did our best to normalize the names in this manner - please let us know if you see any issues.

Other files in this folder include:

-   `stimuli_options.xlsx`: this file includes all the possible languages we could use, links to their *subs2vec* files and *udpipe* information. This file was used in stimuli creation.
-   `match_spp.R`: this file was used during the submission process to calculate the overlap of our chosen English stimuli with the stimuli from the Semantic Priming Project. Please have the entire project open in Rstudio for the file imports to work.
-   `transition_probs.R`: this file was used during the submission process to calculate the transition probabilities between word to non-word, word to word, non-word to word, and non-word to non-word. This information was presented in the pre-print.
