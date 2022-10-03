#!/bin/bash
# ---- japanese -----
# summarize the data
Rscript /var/www/html/summary_data/ja_summarize_stim_backup.R

# move the data file
mv /var/www/html/ja/data/data.sqlite /var/www/html/ja/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja1/data/data.sqlite /var/www/html/ja1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja2/data/data.sqlite /var/www/html/ja2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja3/data/data.sqlite /var/www/html/ja3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja4/data/data.sqlite /var/www/html/ja4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja5/data/data.sqlite /var/www/html/ja5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja6/data/data.sqlite /var/www/html/ja6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja7/data/data.sqlite /var/www/html/ja7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja8/data/data.sqlite /var/www/html/ja8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja9/data/data.sqlite /var/www/html/ja9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja10/data/data.sqlite /var/www/html/ja10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja11/data/data.sqlite /var/www/html/ja11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja12/data/data.sqlite /var/www/html/ja12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ja13/data/data.sqlite /var/www/html/ja13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ja13/data/

# give the data the right permissions
chmod 777 /var/www/html/ja/data/data.sqlite
chmod 777 /var/www/html/ja1/data/data.sqlite
chmod 777 /var/www/html/ja2/data/data.sqlite
chmod 777 /var/www/html/ja3/data/data.sqlite
chmod 777 /var/www/html/ja4/data/data.sqlite
chmod 777 /var/www/html/ja5/data/data.sqlite
chmod 777 /var/www/html/ja6/data/data.sqlite
chmod 777 /var/www/html/ja7/data/data.sqlite
chmod 777 /var/www/html/ja8/data/data.sqlite
chmod 777 /var/www/html/ja9/data/data.sqlite
chmod 777 /var/www/html/ja10/data/data.sqlite
chmod 777 /var/www/html/ja11/data/data.sqlite
chmod 777 /var/www/html/ja12/data/data.sqlite
chmod 777 /var/www/html/ja13/data/data.sqlite

# ---- turkish -----
# summarize the data
Rscript /var/www/html/summary_data/tr_summarize_stim_backup.R

# move the data file
mv /var/www/html/tr/data/data.sqlite /var/www/html/tr/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr1/data/data.sqlite /var/www/html/tr1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr2/data/data.sqlite /var/www/html/tr2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr3/data/data.sqlite /var/www/html/tr3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr4/data/data.sqlite /var/www/html/tr4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr5/data/data.sqlite /var/www/html/tr5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr6/data/data.sqlite /var/www/html/tr6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr7/data/data.sqlite /var/www/html/tr7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr8/data/data.sqlite /var/www/html/tr8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr9/data/data.sqlite /var/www/html/tr9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr10/data/data.sqlite /var/www/html/tr10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr11/data/data.sqlite /var/www/html/tr11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr12/data/data.sqlite /var/www/html/tr12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/tr13/data/data.sqlite /var/www/html/tr13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/tr13/data/

# give the data the right permissions
chmod 777 /var/www/html/tr/data/data.sqlite
chmod 777 /var/www/html/tr1/data/data.sqlite
chmod 777 /var/www/html/tr2/data/data.sqlite
chmod 777 /var/www/html/tr3/data/data.sqlite
chmod 777 /var/www/html/tr4/data/data.sqlite
chmod 777 /var/www/html/tr5/data/data.sqlite
chmod 777 /var/www/html/tr6/data/data.sqlite
chmod 777 /var/www/html/tr7/data/data.sqlite
chmod 777 /var/www/html/tr8/data/data.sqlite
chmod 777 /var/www/html/tr9/data/data.sqlite
chmod 777 /var/www/html/tr10/data/data.sqlite
chmod 777 /var/www/html/tr11/data/data.sqlite
chmod 777 /var/www/html/tr12/data/data.sqlite
chmod 777 /var/www/html/tr13/data/data.sqlite

# ---- russian -----
# summarize the data
Rscript /var/www/html/summary_data/ru_summarize_stim_backup.R

# move the data file
mv /var/www/html/ru/data/data.sqlite /var/www/html/ru/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru1/data/data.sqlite /var/www/html/ru1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru2/data/data.sqlite /var/www/html/ru2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru3/data/data.sqlite /var/www/html/ru3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru4/data/data.sqlite /var/www/html/ru4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru5/data/data.sqlite /var/www/html/ru5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru6/data/data.sqlite /var/www/html/ru6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru7/data/data.sqlite /var/www/html/ru7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru8/data/data.sqlite /var/www/html/ru8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru9/data/data.sqlite /var/www/html/ru9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru10/data/data.sqlite /var/www/html/ru10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru11/data/data.sqlite /var/www/html/ru11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru12/data/data.sqlite /var/www/html/ru12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ru13/data/data.sqlite /var/www/html/ru13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ru13/data/

# give the data the right permissions
chmod 777 /var/www/html/ru/data/data.sqlite
chmod 777 /var/www/html/ru1/data/data.sqlite
chmod 777 /var/www/html/ru2/data/data.sqlite
chmod 777 /var/www/html/ru3/data/data.sqlite
chmod 777 /var/www/html/ru4/data/data.sqlite
chmod 777 /var/www/html/ru5/data/data.sqlite
chmod 777 /var/www/html/ru6/data/data.sqlite
chmod 777 /var/www/html/ru7/data/data.sqlite
chmod 777 /var/www/html/ru8/data/data.sqlite
chmod 777 /var/www/html/ru9/data/data.sqlite
chmod 777 /var/www/html/ru10/data/data.sqlite
chmod 777 /var/www/html/ru11/data/data.sqlite
chmod 777 /var/www/html/ru12/data/data.sqlite
chmod 777 /var/www/html/ru13/data/data.sqlite

# ---- korean -----
# summarize the data
Rscript /var/www/html/summary_data/ko_summarize_stim_backup.R

# move the data file
mv /var/www/html/ko/data/data.sqlite /var/www/html/ko/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko1/data/data.sqlite /var/www/html/ko1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko2/data/data.sqlite /var/www/html/ko2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko3/data/data.sqlite /var/www/html/ko3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko4/data/data.sqlite /var/www/html/ko4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko5/data/data.sqlite /var/www/html/ko5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko6/data/data.sqlite /var/www/html/ko6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko7/data/data.sqlite /var/www/html/ko7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko8/data/data.sqlite /var/www/html/ko8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko9/data/data.sqlite /var/www/html/ko9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko10/data/data.sqlite /var/www/html/ko10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko11/data/data.sqlite /var/www/html/ko11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko12/data/data.sqlite /var/www/html/ko12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/ko13/data/data.sqlite /var/www/html/ko13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/ko13/data/

# give the data the right permissions
chmod 777 /var/www/html/ko/data/data.sqlite
chmod 777 /var/www/html/ko1/data/data.sqlite
chmod 777 /var/www/html/ko2/data/data.sqlite
chmod 777 /var/www/html/ko3/data/data.sqlite
chmod 777 /var/www/html/ko4/data/data.sqlite
chmod 777 /var/www/html/ko5/data/data.sqlite
chmod 777 /var/www/html/ko6/data/data.sqlite
chmod 777 /var/www/html/ko7/data/data.sqlite
chmod 777 /var/www/html/ko8/data/data.sqlite
chmod 777 /var/www/html/ko9/data/data.sqlite
chmod 777 /var/www/html/ko10/data/data.sqlite
chmod 777 /var/www/html/ko11/data/data.sqlite
chmod 777 /var/www/html/ko12/data/data.sqlite
chmod 777 /var/www/html/ko13/data/data.sqlite

# ---- czech -----
# summarize the data
Rscript /var/www/html/summary_data/cs_summarize_stim_backup.R

# move the data file
mv /var/www/html/cs/data/data.sqlite /var/www/html/cs/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs1/data/data.sqlite /var/www/html/cs1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs2/data/data.sqlite /var/www/html/cs2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs3/data/data.sqlite /var/www/html/cs3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs4/data/data.sqlite /var/www/html/cs4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs5/data/data.sqlite /var/www/html/cs5/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs6/data/data.sqlite /var/www/html/cs6/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs7/data/data.sqlite /var/www/html/cs7/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs8/data/data.sqlite /var/www/html/cs8/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs9/data/data.sqlite /var/www/html/cs9/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs10/data/data.sqlite /var/www/html/cs10/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs11/data/data.sqlite /var/www/html/cs11/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs12/data/data.sqlite /var/www/html/cs12/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/cs13/data/data.sqlite /var/www/html/cs13/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs5/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs6/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs7/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs8/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs9/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs10/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs11/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs12/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/cs13/data/

# give the data the right permissions
chmod 777 /var/www/html/cs/data/data.sqlite
chmod 777 /var/www/html/cs1/data/data.sqlite
chmod 777 /var/www/html/cs2/data/data.sqlite
chmod 777 /var/www/html/cs3/data/data.sqlite
chmod 777 /var/www/html/cs4/data/data.sqlite
chmod 777 /var/www/html/cs5/data/data.sqlite
chmod 777 /var/www/html/cs6/data/data.sqlite
chmod 777 /var/www/html/cs7/data/data.sqlite
chmod 777 /var/www/html/cs8/data/data.sqlite
chmod 777 /var/www/html/cs9/data/data.sqlite
chmod 777 /var/www/html/cs10/data/data.sqlite
chmod 777 /var/www/html/cs11/data/data.sqlite
chmod 777 /var/www/html/cs12/data/data.sqlite
chmod 777 /var/www/html/cs13/data/data.sqlite

# ---- english -----
# summarize the data
Rscript /var/www/html/summary_data/en_summarize_stim_backup.R

# move the data file
mv /var/www/html/en/data/data.sqlite /var/www/html/en/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en1/data/data.sqlite /var/www/html/en1/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en2/data/data.sqlite /var/www/html/en2/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en3/data/data.sqlite /var/www/html/en3/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en4/data/data.sqlite /var/www/html/en4/data/data_$(date +"%FT%H%M").sqlite
mv /var/www/html/en_35/data/data.sqlite /var/www/html/en_35/data/data_$(date +"%FT%H%M").sqlite

# copy over temp data
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en1/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en2/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en3/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en4/data/
cp ~/SPAML/04_Procedure/en/data/data.sqlite /var/www/html/en_35/data/

# give the data the right permissions
chmod 777 /var/www/html/en/data/data.sqlite
chmod 777 /var/www/html/en1/data/data.sqlite
chmod 777 /var/www/html/en2/data/data.sqlite
chmod 777 /var/www/html/en3/data/data.sqlite
chmod 777 /var/www/html/en4/data/data.sqlite
chmod 777 /var/www/html/en_35/data/data.sqlite
