#!/bin/bash
# ---- japanese -----
# summarize the data
#Rscript /var/www/html/summary_data/ja_summarize_stim_backup.R

# move the data file
#mv /var/www/html/ja/data/data.sqlite /var/www/html/ja/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja1/data/data.sqlite /var/www/html/ja1/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja2/data/data.sqlite /var/www/html/ja2/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja3/data/data.sqlite /var/www/html/ja3/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja4/data/data.sqlite /var/www/html/ja4/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja5/data/data.sqlite /var/www/html/ja5/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja6/data/data.sqlite /var/www/html/ja6/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja7/data/data.sqlite /var/www/html/ja7/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja8/data/data.sqlite /var/www/html/ja8/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja9/data/data.sqlite /var/www/html/ja9/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja10/data/data.sqlite /var/www/html/ja10/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja11/data/data.sqlite /var/www/html/ja11/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja12/data/data.sqlite /var/www/html/ja12/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ja13/data/data.sqlite /var/www/html/ja13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja1/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja2/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja3/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja4/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja5/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja6/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja7/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja8/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja9/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja10/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja11/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja12/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja13/data/

# give the data the right permissions
#chmod 777 /var/www/html/ja/data/data.sqlite
#chmod 777 /var/www/html/ja1/data/data.sqlite
#chmod 777 /var/www/html/ja2/data/data.sqlite
#chmod 777 /var/www/html/ja3/data/data.sqlite
#chmod 777 /var/www/html/ja4/data/data.sqlite
#chmod 777 /var/www/html/ja5/data/data.sqlite
#chmod 777 /var/www/html/ja6/data/data.sqlite
#chmod 777 /var/www/html/ja7/data/data.sqlite
#chmod 777 /var/www/html/ja8/data/data.sqlite
#chmod 777 /var/www/html/ja9/data/data.sqlite
#chmod 777 /var/www/html/ja10/data/data.sqlite
#chmod 777 /var/www/html/ja11/data/data.sqlite
#chmod 777 /var/www/html/ja12/data/data.sqlite
#chmod 777 /var/www/html/ja13/data/data.sqlite

# ---- turkish -----
# summarize the data
Rscript /var/www/html/summary_data/tr_summarize_stim_backup.R

# move the data file
mv /var/www/html/tr/data/data.sqlite /var/www/html/tr/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr1/data/data.sqlite /var/www/html/tr1/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr2/data/data.sqlite /var/www/html/tr2/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr3/data/data.sqlite /var/www/html/tr3/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr4/data/data.sqlite /var/www/html/tr4/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr5/data/data.sqlite /var/www/html/tr5/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr6/data/data.sqlite /var/www/html/tr6/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr7/data/data.sqlite /var/www/html/tr7/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr8/data/data.sqlite /var/www/html/tr8/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr9/data/data.sqlite /var/www/html/tr9/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr10/data/data.sqlite /var/www/html/tr10/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr11/data/data.sqlite /var/www/html/tr11/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr12/data/data.sqlite /var/www/html/tr12/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/tr13/data/data.sqlite /var/www/html/tr13/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr14/data/data.sqlite /var/www/html/tr14/data/data_$(date +"%FT%H%M").sqlite


# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr1/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr2/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr3/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr4/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr5/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr6/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr7/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr8/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr9/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr10/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr11/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr12/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr13/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr14/data/

# give the data the right permissions
chmod 777 /var/www/html/tr/data/data.sqlite
#chmod 777 /var/www/html/tr1/data/data.sqlite
#chmod 777 /var/www/html/tr2/data/data.sqlite
#chmod 777 /var/www/html/tr3/data/data.sqlite
#chmod 777 /var/www/html/tr4/data/data.sqlite
#chmod 777 /var/www/html/tr5/data/data.sqlite
#chmod 777 /var/www/html/tr6/data/data.sqlite
#chmod 777 /var/www/html/tr7/data/data.sqlite
#chmod 777 /var/www/html/tr8/data/data.sqlite
#chmod 777 /var/www/html/tr9/data/data.sqlite
#chmod 777 /var/www/html/tr10/data/data.sqlite
#chmod 777 /var/www/html/tr11/data/data.sqlite
#chmod 777 /var/www/html/tr12/data/data.sqlite
#chmod 777 /var/www/html/tr13/data/data.sqlite
chmod 777 /var/www/html/tr14/data/data.sqlite

# ---- russian -----
# summarize the data
Rscript /var/www/html/summary_data/ru_summarize_stim_backup.R

# move the data file
mv /var/www/html/ru/data/data.sqlite /var/www/html/ru/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru1/data/data.sqlite /var/www/html/ru1/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru2/data/data.sqlite /var/www/html/ru2/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru3/data/data.sqlite /var/www/html/ru3/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru4/data/data.sqlite /var/www/html/ru4/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru5/data/data.sqlite /var/www/html/ru5/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru6/data/data.sqlite /var/www/html/ru6/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru7/data/data.sqlite /var/www/html/ru7/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru8/data/data.sqlite /var/www/html/ru8/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru9/data/data.sqlite /var/www/html/ru9/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru10/data/data.sqlite /var/www/html/ru10/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru11/data/data.sqlite /var/www/html/ru11/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru12/data/data.sqlite /var/www/html/ru12/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ru13/data/data.sqlite /var/www/html/ru13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru1/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru2/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru3/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru4/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru5/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru6/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru7/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru8/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru9/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru10/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru11/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru12/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru13/data/

# give the data the right permissions
chmod 777 /var/www/html/ru/data/data.sqlite
#chmod 777 /var/www/html/ru1/data/data.sqlite
#chmod 777 /var/www/html/ru2/data/data.sqlite
#chmod 777 /var/www/html/ru3/data/data.sqlite
#chmod 777 /var/www/html/ru4/data/data.sqlite
#chmod 777 /var/www/html/ru5/data/data.sqlite
#chmod 777 /var/www/html/ru6/data/data.sqlite
#chmod 777 /var/www/html/ru7/data/data.sqlite
#chmod 777 /var/www/html/ru8/data/data.sqlite
#chmod 777 /var/www/html/ru9/data/data.sqlite
#chmod 777 /var/www/html/ru10/data/data.sqlite
#chmod 777 /var/www/html/ru11/data/data.sqlite
#chmod 777 /var/www/html/ru12/data/data.sqlite
#chmod 777 /var/www/html/ru13/data/data.sqlite

# ---- korean -----
# summarize the data
#Rscript /var/www/html/summary_data/ko_summarize_stim_backup.R

# move the data file
#mv /var/www/html/ko/data/data.sqlite /var/www/html/ko/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko1/data/data.sqlite /var/www/html/ko1/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko2/data/data.sqlite /var/www/html/ko2/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko3/data/data.sqlite /var/www/html/ko3/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko4/data/data.sqlite /var/www/html/ko4/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko5/data/data.sqlite /var/www/html/ko5/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko6/data/data.sqlite /var/www/html/ko6/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko7/data/data.sqlite /var/www/html/ko7/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko8/data/data.sqlite /var/www/html/ko8/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko9/data/data.sqlite /var/www/html/ko9/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko10/data/data.sqlite /var/www/html/ko10/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko11/data/data.sqlite /var/www/html/ko11/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko12/data/data.sqlite /var/www/html/ko12/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/ko13/data/data.sqlite /var/www/html/ko13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko1/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko2/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko3/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko4/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko5/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko6/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko7/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko8/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko9/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko10/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko11/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko12/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko13/data/

# give the data the right permissions
#chmod 777 /var/www/html/ko/data/data.sqlite
#chmod 777 /var/www/html/ko1/data/data.sqlite
#chmod 777 /var/www/html/ko2/data/data.sqlite
#chmod 777 /var/www/html/ko3/data/data.sqlite
#chmod 777 /var/www/html/ko4/data/data.sqlite
#chmod 777 /var/www/html/ko5/data/data.sqlite
#chmod 777 /var/www/html/ko6/data/data.sqlite
#chmod 777 /var/www/html/ko7/data/data.sqlite
#chmod 777 /var/www/html/ko8/data/data.sqlite
#chmod 777 /var/www/html/ko9/data/data.sqlite
#chmod 777 /var/www/html/ko10/data/data.sqlite
#chmod 777 /var/www/html/ko11/data/data.sqlite
#chmod 777 /var/www/html/ko12/data/data.sqlite
#chmod 777 /var/www/html/ko13/data/data.sqlite

# ---- czech -----
# summarize the data
Rscript /var/www/html/summary_data/cs_summarize_stim_backup.R

# move the data file
mv /var/www/html/cs/data/data.sqlite /var/www/html/cs/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs1/data/data.sqlite /var/www/html/cs1/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs2/data/data.sqlite /var/www/html/cs2/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs3/data/data.sqlite /var/www/html/cs3/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs4/data/data.sqlite /var/www/html/cs4/data/data_$(date +"%FT%H%M").sqlite
#v /var/www/html/cs5/data/data.sqlite /var/www/html/cs5/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs6/data/data.sqlite /var/www/html/cs6/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs7/data/data.sqlite /var/www/html/cs7/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs8/data/data.sqlite /var/www/html/cs8/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs9/data/data.sqlite /var/www/html/cs9/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs10/data/data.sqlite /var/www/html/cs10/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs11/data/data.sqlite /var/www/html/cs11/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs12/data/data.sqlite /var/www/html/cs12/data/data_$(date +"%FT%H%M").sqlite
#mv /var/www/html/cs13/data/data.sqlite /var/www/html/cs13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs1/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs2/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs3/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs4/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs5/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs6/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs7/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs8/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs9/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs10/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs11/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs12/data/
#cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs13/data/

# give the data the right permissions
chmod 777 /var/www/html/cs/data/data.sqlite
#chmod 777 /var/www/html/cs1/data/data.sqlite
#chmod 777 /var/www/html/cs2/data/data.sqlite
#chmod 777 /var/www/html/cs3/data/data.sqlite
#chmod 777 /var/www/html/cs4/data/data.sqlite
#chmod 777 /var/www/html/cs5/data/data.sqlite
#chmod 777 /var/www/html/cs6/data/data.sqlite
#chmod 777 /var/www/html/cs7/data/data.sqlite
#chmod 777 /var/www/html/cs8/data/data.sqlite
#chmod 777 /var/www/html/cs9/data/data.sqlite
#chmod 777 /var/www/html/cs10/data/data.sqlite
#chmod 777 /var/www/html/cs11/data/data.sqlite
#chmod 777 /var/www/html/cs12/data/data.sqlite
#chmod 777 /var/www/html/cs13/data/data.sqlite

# ---- english -----
# summarize the data
Rscript /var/www/html/summary_data/en_summarize_stim_backup.R

# move the data file
mv /var/www/html/en/data/data.sqlite /var/www/html/en/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en1/data/data.sqlite /var/www/html/en1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en2/data/data.sqlite /var/www/html/en2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en3/data/data.sqlite /var/www/html/en3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en4/data/data.sqlite /var/www/html/en4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en5/data/data.sqlite /var/www/html/en5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en6/data/data.sqlite /var/www/html/en6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en7/data/data.sqlite /var/www/html/en7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en8/data/data.sqlite /var/www/html/en8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en9/data/data.sqlite /var/www/html/en9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en10/data/data.sqlite /var/www/html/en10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en11/data/data.sqlite /var/www/html/en11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en12/data/data.sqlite /var/www/html/en12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en13/data/data.sqlite /var/www/html/en13/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en14/data/data.sqlite /var/www/html/en14/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en15/data/data.sqlite /var/www/html/en15/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en16/data/data.sqlite /var/www/html/en16/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en17/data/data.sqlite /var/www/html/en17/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en18/data/data.sqlite /var/www/html/en18/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en13/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en14/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en15/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en16/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en17/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en18/data/

# give the data the right permissions
chmod 777 /var/www/html/en/data/data.sqlite
chmod 777 /var/www/html/en1/data/data.sqlite
chmod 777 /var/www/html/en2/data/data.sqlite
chmod 777 /var/www/html/en3/data/data.sqlite
chmod 777 /var/www/html/en4/data/data.sqlite
chmod 777 /var/www/html/en5/data/data.sqlite
chmod 777 /var/www/html/en6/data/data.sqlite
chmod 777 /var/www/html/en7/data/data.sqlite
chmod 777 /var/www/html/en8/data/data.sqlite
chmod 777 /var/www/html/en9/data/data.sqlite
chmod 777 /var/www/html/en10/data/data.sqlite
chmod 777 /var/www/html/en11/data/data.sqlite
chmod 777 /var/www/html/en12/data/data.sqlite
chmod 777 /var/www/html/en13/data/data.sqlite
chmod 777 /var/www/html/en14/data/data.sqlite
chmod 777 /var/www/html/en15/data/data.sqlite
chmod 777 /var/www/html/en16/data/data.sqlite
chmod 777 /var/www/html/en17/data/data.sqlite
chmod 777 /var/www/html/en18/data/data.sqlite

# ---- danish -----
# summarize the data
Rscript /var/www/html/summary_data/da_summarize_stim_backup.R

# move the data file
mv /var/www/html/da/data/data.sqlite /var/www/html/da/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/da/data/

# give the data the right permissions
chmod 777 /var/www/html/da/data/data.sqlite

# ---- spanish -----
# summarize the data
Rscript /var/www/html/summary_data/es_summarize_stim_backup.R

# move the data file
mv /var/www/html/es/data/data.sqlite /var/www/html/es/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/es1/data/data.sqlite /var/www/html/es1/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/es/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/es1/data/

# give the data the right permissions
chmod 777 /var/www/html/es/data/data.sqlite
chmod 777 /var/www/html/es1/data/data.sqlite

# ---- german -----
# summarize the data
Rscript /var/www/html/summary_data/de_summarize_stim_backup.R

# move the data file
mv /var/www/html/de/data/data.sqlite /var/www/html/de/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/de1/data/data.sqlite /var/www/html/de1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/de2/data/data.sqlite /var/www/html/de2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/de3/data/data.sqlite /var/www/html/de3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/de4/data/data.sqlite /var/www/html/de4/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/de/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/de1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/de2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/de3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/de4/data/

# give the data the right permissions
chmod 777 /var/www/html/de/data/data.sqlite
chmod 777 /var/www/html/de1/data/data.sqlite
chmod 777 /var/www/html/de2/data/data.sqlite
chmod 777 /var/www/html/de3/data/data.sqlite
chmod 777 /var/www/html/de4/data/data.sqlite

# ---- portuguese -----
# summarize the data
Rscript /var/www/html/summary_data/pt_summarize_stim_backup.R

# move the data file
mv /var/www/html/pt/data/data.sqlite /var/www/html/pt/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/pt/data/

# give the data the right permissions
chmod 777 /var/www/html/pt/data/data.sqlite

# ---- simple chinese -----
# summarize the data
Rscript /var/www/html/summary_data/zh_summarize_stim_backup.R

# move the data file
mv /var/www/html/zh/data/data.sqlite /var/www/html/zh/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/zh1/data/data.sqlite /var/www/html/zh1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/zh2/data/data.sqlite /var/www/html/zh2/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/zh/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/zh1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/zh2/data/

# give the data the right permissions
chmod 777 /var/www/html/zh/data/data.sqlite
chmod 777 /var/www/html/zh1/data/data.sqlite
chmod 777 /var/www/html/zh2/data/data.sqlite

# ---- arabic -----
# summarize the data
Rscript /var/www/html/summary_data/ar_summarize_stim_backup.R

# move the data file
mv /var/www/html/ar/data/data.sqlite /var/www/html/ar/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ar/data/

# give the data the right permissions
chmod 777 /var/www/html/ar/data/data.sqlite

# ---- farsi -----
# summarize the data
Rscript /var/www/html/summary_data/fa_summarize_stim_backup.R

# move the data file
mv /var/www/html/fa/data/data.sqlite /var/www/html/fa/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/fa/data/

# give the data the right permissions
chmod 777 /var/www/html/fa/data/data.sqlite

# ---- finnish -----
# summarize the data
Rscript /var/www/html/summary_data/fi_summarize_stim_backup.R

# move the data file
mv /var/www/html/fi/data/data.sqlite /var/www/html/fi/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/fi/data/

# give the data the right permissions
chmod 777 /var/www/html/fi/data/data.sqlite

# ---- french -----
# summarize the data
Rscript /var/www/html/summary_data/fr_summarize_stim_backup.R

# move the data file
mv /var/www/html/fr/data/data.sqlite /var/www/html/fr/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/fr1/data/data.sqlite /var/www/html/fr1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/fr2/data/data.sqlite /var/www/html/fr2/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/fr/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/fr1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/fr2/data/

# give the data the right permissions
chmod 777 /var/www/html/fr/data/data.sqlite
chmod 777 /var/www/html/fr1/data/data.sqlite
chmod 777 /var/www/html/fr2/data/data.sqlite

# ---- greek -----
# summarize the data
Rscript /var/www/html/summary_data/el_summarize_stim_backup.R

# move the data file
mv /var/www/html/el/data/data.sqlite /var/www/html/el/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/el/data/

# give the data the right permissions
chmod 777 /var/www/html/el/data/data.sqlite

# ---- hungarian -----
# summarize the data
Rscript /var/www/html/summary_data/hu_summarize_stim_backup.R

# move the data file
mv /var/www/html/hu/data/data.sqlite /var/www/html/hu/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/hu/data/

# give the data the right permissions
chmod 777 /var/www/html/hu/data/data.sqlite

# ---- norwegian -----
# summarize the data
Rscript /var/www/html/summary_data/no_summarize_stim_backup.R

# move the data file
mv /var/www/html/no/data/data.sqlite /var/www/html/no/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/no/data/

# give the data the right permissions
chmod 777 /var/www/html/no/data/data.sqlite

# ---- brazilian portuguese -----
# summarize the data
Rscript /var/www/html/summary_data/br_pt_summarize_stim_backup.R

# move the data file
mv /var/www/html/br_pt/data/data.sqlite /var/www/html/br_pt/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/br_pt/data/

# give the data the right permissions
chmod 777 /var/www/html/br_pt/data/data.sqlite

# ---- romanian -----
# summarize the data
Rscript /var/www/html/summary_data/ro_summarize_stim_backup.R

# move the data file
mv /var/www/html/ro/data/data.sqlite /var/www/html/ro/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ro/data/

# give the data the right permissions
chmod 777 /var/www/html/ro/data/data.sqlite

# ---- serbian -----
# summarize the data
Rscript /var/www/html/summary_data/sr_summarize_stim_backup.R

# move the data file
mv /var/www/html/sr/data/data.sqlite /var/www/html/sr/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/sr/data/

# give the data the right permissions
chmod 777 /var/www/html/sr/data/data.sqlite

# ---- urdu -----
# summarize the data
Rscript /var/www/html/summary_data/ur_summarize_stim_backup.R

# move the data file
mv /var/www/html/ur/data/data.sqlite /var/www/html/ur/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ur/data/

# give the data the right permissions
chmod 777 /var/www/html/ur/data/data.sqlite

# ---- polish -----
# summarize the data
Rscript /var/www/html/summary_data/pl_summarize_stim_backup.R

# move the data file
mv /var/www/html/pl/data/data.sqlite /var/www/html/pl/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/pl1/data/data.sqlite /var/www/html/pl1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/pl1/data/data.sqlite /var/www/html/pl2/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/pl/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/pl1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/pl2/data/

# give the data the right permissions
chmod 777 /var/www/html/pl/data/data.sqlite
chmod 777 /var/www/html/pl1/data/data.sqlite
chmod 777 /var/www/html/pl2/data/data.sqlite

# ---- italian -----
# summarize the data
Rscript /var/www/html/summary_data/it_summarize_stim_backup.R

# move the data file
mv /var/www/html/it/data/data.sqlite /var/www/html/it/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/it1/data/data.sqlite /var/www/html/it1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/it2/data/data.sqlite /var/www/html/it2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/it3/data/data.sqlite /var/www/html/it3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/it4/data/data.sqlite /var/www/html/it4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/it5/data/data.sqlite /var/www/html/it5/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/it5/data/

# give the data the right permissions
chmod 777 /var/www/html/it/data/data.sqlite
chmod 777 /var/www/html/it1/data/data.sqlite
chmod 777 /var/www/html/it2/data/data.sqlite
chmod 777 /var/www/html/it3/data/data.sqlite
chmod 777 /var/www/html/it4/data/data.sqlite
chmod 777 /var/www/html/it5/data/data.sqlite

# ---- dutch -----
# summarize the data
Rscript /var/www/html/summary_data/nl_summarize_stim_backup.R

# move the data file
mv /var/www/html/nl/data/data.sqlite /var/www/html/nl/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/nl/data/

# give the data the right permissions
chmod 777 /var/www/html/nl/data/data.sqlite

# ---- traditional chinese -----
# summarize the data
Rscript /var/www/html/summary_data/zh_hk_summarize_stim_backup.R

# move the data file
mv /var/www/html/zh_hk/data/data.sqlite /var/www/html/zh_hk/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/zh_hk1/data/data.sqlite /var/www/html/zh_hk1/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/zh_hk/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/zh_hk1/data/

# give the data the right permissions
chmod 777 /var/www/html/zh_hk/data/data.sqlite
chmod 777 /var/www/html/zh_hk1/data/data.sqlite

# ---- slovak -----
# summarize the data
Rscript /var/www/html/summary_data/sk_summarize_stim_backup.R

# move the data file
mv /var/www/html/sk/data/data.sqlite /var/www/html/sk/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/sk/data/

# give the data the right permissions
chmod 777 /var/www/html/sk/data/data.sqlite
