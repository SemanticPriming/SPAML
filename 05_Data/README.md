# Data Folder

Check out the real data: [here](https://github.com/SemanticPriming/SPAML/releases), as it's too big to include directly within the repository.

- `codebooks`: this folder contains the codebooks for each type of file you will find in the real data folders.
- `codebooks_zpid`: this folder contains early codebooks for the data collected through ZPID, as required by their gracious contribution to the project.
- `data_processing`: this folder has the individual markdown scripts for each language: generally, they are the same process with differences due to different start dates, slightly different column exclusions for deidentification, differ fixes for making sure ID values were unique, fixing stimuli issues, or lab codes. These files contain the full script of the process from purely raw `.sqlite` files from labJS to the output data provided in our Github release. The first several chunks are marked `eval = F` because they cannot be run without the raw data. After this point, the scripts can be checked against the full data files provided. The `sender_id.csv` file in this folder is used to make sure the trials are in order.
- `pre_registered`: this folder contains the original example processing we included in our registered report submission. The data_processing file is generally the same template as the final output with updates for things that occurred during the experiment or necessary corrections to code to ensure accuracy.
- `data_checks.xslx`: an excel file used to check the data to ensure each language was processed in a similar way, examining for known errors, and denoting excluded numbers of trials for each type of required exclusion. The original was checked by the lead author, but then after discussing a new needed step our processing (to exclude data from participants who were too young), we reran the analyses and had a second person check the files. After finding all discrepancies/fixing issues, the updated tab is the final checked versions.
- `semanticprimeR_tutorial.Rmd`: A file that gives you a walk through on how to open, process, and merge datasets from this study.
- `semanticprimeR_tutorial.html`: An HTML version of the previous file.
- `checksums`: this folder has files with checksums of all the data files in each release.
