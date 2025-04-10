# Computational reproducibility audit

Analyst: Jordan W. Suchow (jws@stevens.edu)

This computational reproducibility audit was performed on the manuscript “Measuring the semantic priming effect across many languages” based upon version SPAML_RR_NHB_V6_network, retrieved from https://docs.google.com/document/d/1eH9Z3c76YlXOtISPfL587Xm1TTfcmjnn9gdGFAObPic.

Before starting the audit, I note a minor conflict of interest: I am on the author team. However, I had no part in data collection or data analysis and have no preference for whether the manuscript is found to be computationally reproducible or not — if it is, great; if it isn’t, we’ll fix it.

I began the reproduction attempt by refamiliarizing myself with the manuscript and determining that the focus of this reproduction attempt will be the analyses reported in support of Hypothesis 1 and Hypothesis 2.

I next looked at whether the data, code, and computational environment is made available via the manuscript.

The manuscript was found to contain an extensive set of supplementary material, including links to a GitHub repository containing what appears to be many of the relevant artifacts. I used these links to identify the relevant data, code, and computational environment.

The code was found to be made available, however, a versioning issue negatively impacts reproducibility. In particular, there are two conflicting artifacts, (1) SPAML-v1.0.0.zip (md5 hash e115a45cf21507fc11cb7e9d6512c9bb) obtained from the Zenodo record https://doi.org/10.5281/zenodo.10888833 linked to in the supplement and (2) SPAML-1.0.1.zip (md5 113b0ccbe2a6ca2a8a2ee96efb754793) obtained from the GitHub releases page linked to in the supplement. It is unclear which of these versioned codebases was the one used for the analyses in the paper. I initiated a conversation with the lead author to resolve this issue, but proceeded with the analysis under the assumption that the answer to this question will either become apparent or does not affect the results. I also note that the GitHub releases are not signed.

The data was found to be made available through files attached to a GitHub release. I therefore downloaded all the files using the tool `gh` and recorded the md5 hash of all the retrieved files (see Appendix A). I contacted the lead author to suggest some improvements in the format of the data release, such as including these md5 hashes within the repository.

The computational environment was provided via personal correspondence with the lead author. It can be found in a Code Ocean capsule at https://codeocean.com/capsule/9721856/tree/v1. I next downloaded the capsule capsule-9721856.zip (md5 cdc81b876b543589b2162a58d54340c1) and inspected it.

The capsule contains instructions for computationally reproducing the work. However, there is a minor awkwardness where the capsule contains not only the computational environment, but also copies of the data and code, and so before proceeding further, I verified whether the code and data in the capsule matches the code and data retrieved above. Indeed, the md5 hashes of the data match the files in the GitHub release. However, the md5 hashes of the code do not match the files in the GitHub release. For example, the Code Ocean capsule contains a file hyp_testing.Rmd with md5 hash deaf484aee43abdb67e66417ca8164f1, but no file with the name hyp_testing.Rmd in SPAML-1.0.1.zip has that hash. I have reached out to the lead author to point out this issue. In the meantime, I decided to recreate the computational environment locally using the code and data on GitHub and the computational environment from the Dockerfile on Code Ocean, but modified to use ubuntu:20.04 as the base image.

Running the code produced six flies: descriptive_statistics_items.html, method.html, hyp_testing.html, descriptive_statistics_trials.html, descriptive_statistics_priming.html, and descriptive_statistics_participants.html.

hyp_testing.html in particular contains the following two paragraphs, which are the same numbers reported in the manuscript (up to differences in rounding):

> Overall priming was 𝑏0b0 = 0.117, 𝑆𝐸SE = 0.001, 95%CI[0.114, 0.120]. Hypothesis 1 from our pre-registration was that the lower limit of the confidence interval is greater than zero (i.e., a directional comparison). This process was repeated for average priming scores calculated without trials that were marked as 2.50 z-score outliers and 3.00 z-score outliers separately. These results were consistent with overall priming: 𝑏0𝑍2.5b0Z2.5 = 0.104, 𝑆𝐸SE = 0.001, 95%CI[0.101, 0.106], and 𝑏0𝑍3.0b0Z3.0 = 0.107, 𝑆𝐸SE = 0.001, 95%CI[0.104, 0.109]. Figure @ref(fig:figure-ridges-original) denotes the distribution of the average item z-score effects, ordered by the size of the overall priming effect for each language. The distributions of the priming scores are very similar with long tails and roughly similar shapes (albeit more variance in some languages).

>	Hypothesis 2 explored the extent to which these semantic priming effects vary across languages. Therefore, we calculated a random effects model using the nlme (Pinheiro et al. 2017) package in R wherein the random intercept of language was added to the overall intercept only model for Hypothesis 1. The addition of this parameter improved model fit from 𝐴𝐼𝐶𝐻𝑦𝑝1AICHyp1 = -6,613.934 to 𝐴𝐼𝐶𝐻𝑦𝑝2AICHyp2 = -6,711.768, supporting significant heterogeneity as the AIC for the random effects model is two points or more less than the AIC for the intercept-only model (Burnham and Anderson 1998). The standard deviation of the random effect was 0.019, 95% CI[0.013, 0.027]. The pseudo-𝑅2R2 for the model was .008 (Bartoń 2020). The random effect was useful in both z-score 2.5 and 3.0 models: 𝐴𝐼𝐶𝐻𝑦𝑝1𝑍2.5AICHyp1Z2.5 = -14,469.541 versus 𝐴𝐼𝐶𝐻𝑦𝑝2𝑍2.5AICHyp2Z2.5 = -14,604.548 and 𝐴𝐼𝐶𝐻𝑦𝑝1𝑍3.0AICHyp1Z3.0 = -12,977.970 versus 𝐴𝐼𝐶𝐻𝑦𝑝2𝑍3.0AICHyp2Z3.0 = -13,104.044. The random effect sizes were similar to the overall model: Z2.5 = 0.017, 95% CI[0.012, 0.024], Z3.0 = 0.017, 95% CI[0.012, 0.025].

The computational reproduction is thus a partial success. In particular, I made the following recommendations to the lead author to improve the computational reproducibility:

1.	Sign the GitHub commits / releases with a GPG key. This better establishes a chain of trust from author through analytic result, focusing in particular on the link between the author and the data and code.
2.	Cut a new release v1.0.2 of the code, containing the latest changes; update the Zenodo record to reflect it, matching the version number; use this v1.0.2 release in the manuscript. This will resolve some issues related to files missing in the previous release and conflict as to which version constitutes the initial release.
3.	Include hashes of the data files in the source code repository. Because the data files are distributed using assets attached to a GitHub Release, which can be modified post-release, some other method is needed to verify that the downloaded data is the same data specified at the time of release. 

# Appendix A

```
(base) jws@cog1:~$ mkdir spaml-data-1.0.1
(base) jws@cog1:~$ gh release download v1.0.1 -D spaml-data-1.0.1 -R SemanticPriming/SPAML
(base) jws@cog1:~$ cd spaml-data-1.0.1
(base) jws@cog1:~/spaml-data-1.0.1$ md5sum *
fba1aca0c5225ab00a35b5614ca4438b  ar_answered_item_data.csv
30027d45c44a1171f6aae6eba821cd36  ar_answered_prime_summary.csv
3ae400ce13c60bfeaaf5c8078db5181d  ar_answered_prime_summary_no2.5.csv
ecc5e297652111633a081496b6cc7833  ar_answered_prime_summary_no3.0.csv
68d850525b351fd8246c1e9f2a53dd61  ar_answered_prime_trials.csv
2c917fad7e1248afe3b5b13b0274a705  ar_full_data.csv.gz
2368c6a0a4017084af334eb812996ab9  ar_item_data.csv
c9c016cedf2c3e16b5be6e0386a39dc4  ar_participant_data.csv
c27483d3c5c98a39593980b8b0f08788  ar_prime_summary.csv
4f9b27456fe47010a7fb970c87426656  ar_prime_summary_no2.5.csv
33f8508af1d67753911c0ab16f81f4b3  ar_prime_summary_no3.0.csv
68d850525b351fd8246c1e9f2a53dd61  ar_prime_trials.csv
1bd2afca7938b6bed05b4fa1c90f5815  ar_trial_data.csv.gz
b1e473691fa573f2461c24a0748e3f31  br_pt_combo_answered_item_data.csv
749ce059aa24915d21a72cee44c560c2  br_pt_combo_answered_prime_summary.csv
301472fea5e57911f2dc0a0a7e47d9b4  br_pt_combo_answered_prime_summary_no2.5.csv
3fc0d7f941fb2a6937f564ae2ae66b67  br_pt_combo_answered_prime_summary_no3.0.csv
7124188277d5a331c2119717fb61ba1f  br_pt_combo_answered_prime_trials.csv
036e39b3407e1745ed3b2ff5ac22348d  br_pt_combo_item_data.csv
6d91bb56dce5fb70b6b1f0e8f846835d  br_pt_combo_prime_summary.csv
6d6725774779e8cdbb3013e1854453e5  br_pt_combo_prime_summary_no2.5.csv
a145b1e4ddc9c11c90a5de20f316fd02  br_pt_combo_prime_summary_no3.0.csv
7124188277d5a331c2119717fb61ba1f  br_pt_combo_prime_trials.csv
dcc8357f523a1dd432462f39160001c8  cs_answered_item_data.csv
a61689586d3606be84b140def6215e9d  cs_answered_prime_summary.csv
83e2dff53a20d305fdcafefb15b3f9bf  cs_answered_prime_summary_no2.5.csv
04392bd5b5b82f9ad3be6bf460736f6c  cs_answered_prime_summary_no3.0.csv
f334e79f6fd0dc50a0d8d92dad1b24ad  cs_answered_prime_trials.csv
df1e5d699d8e7dfeb70c69ebdb2d244a  cs_full_data.csv.gz
e83550f924eb42ea62bdec4ae67cc338  cs_item_data.csv
f8f5736edfc6d51c0d6556bc9a4d9ae7  cs_participant_data.csv
5ee8186d075bb981b23269733b960539  cs_prime_summary.csv
2a4ba759a32e08d87f4413a1e5a91bf2  cs_prime_summary_no2.5.csv
ffb14ce9a4757a991b35593821ceac93  cs_prime_summary_no3.0.csv
f334e79f6fd0dc50a0d8d92dad1b24ad  cs_prime_trials.csv
7d7bb71306d6aac65629d1614f30f665  cs_trial_data.csv.gz
ed17db55c2a74edce0b3c777ead4ee37  da_answered_item_data.csv
a8fc66c9fccef930c9a5c8ec00068202  da_answered_prime_summary.csv
ae48c9479ba392e67fed8073a6b710d3  da_answered_prime_summary_no2.5.csv
fdf87e3f3030bc4499d5dcb102b6a8c8  da_answered_prime_summary_no3.0.csv
c535bc4d09b534ee2a8fdbf905abe625  da_answered_prime_trials.csv
d054890c35d750849403fd6fb5cd987d  da_full_data.csv.gz
3317cbdf6cddc26c842053260fa7868c  da_item_data.csv
3b765240e72ec614aa0f67fdd33f0114  da_participant_data.csv
559028580489feb5bc42714c8a3bbdca  da_prime_summary.csv
0628b435e1d7706be87d110287265ba2  da_prime_summary_no2.5.csv
6dbba66b9cd06de01ec7ad3d72e38d9b  da_prime_summary_no3.0.csv
c535bc4d09b534ee2a8fdbf905abe625  da_prime_trials.csv
4e5bced8c8c993edb10aab2ee43d445a  da_trial_data.csv.gz
70dad96134433b9e6ec99f3b6c6d1be9  de_answered_item_data.csv
9dcc5279d9d106c2526f9e68cc9a4eb1  de_answered_prime_summary.csv
49894315afc955709b0ef70937fae316  de_answered_prime_summary_no2.5.csv
458f35508a0512a5c5a9d8ce3375ea95  de_answered_prime_summary_no3.0.csv
4089bba77f7970940456276becaaa1c1  de_answered_prime_trials.csv
4ee146d1aa8bb40a77f7af78c8eb4337  de_full_data.csv.gz
94914872d1090b9213bb4be50190bd8e  de_item_data.csv
6c97811ac96f33ea0dea3bf9f25ac07d  de_participant_data.csv
2edbb07ef8f1387cbadb86979e01802d  de_prime_summary.csv
38dee98ebb86f8293abfefff6ed4328b  de_prime_summary_no2.5.csv
c77fe6f6c2738a4a3133823014dc7dbd  de_prime_summary_no3.0.csv
4089bba77f7970940456276becaaa1c1  de_prime_trials.csv
a1e6a0dc9dfde1e4faf935cb71cd0574  de_trial_data.csv.gz
3025cfd2e7acc99f8965f50744e25ee0  el_answered_item_data.csv
d3b00df3d855fd7185bb4c73a50fa09a  el_answered_prime_summary.csv
35927770b88637fa2144aa57bb4952e4  el_answered_prime_summary_no2.5.csv
6f4cae4e22a088aecd3a96a9c630829e  el_answered_prime_summary_no3.0.csv
d474792dd67b550a95d5f661a9aa56e9  el_answered_prime_trials.csv
c77f985b45acef8807587690826c8805  el_full_data.csv.gz
227fec4e01d6ee7a23101d955d6aefe6  el_item_data.csv
8c586593bc9496218887915dd2c09390  el_participant_data.csv
2f4ca233f26a231e51c2635916fc5f5a  el_prime_summary.csv
117f23046e2652f2d0a8001ae270b4b0  el_prime_summary_no2.5.csv
f50b7766132a8bb3e333687d3b221ff0  el_prime_summary_no3.0.csv
d474792dd67b550a95d5f661a9aa56e9  el_prime_trials.csv
4ce0f66a877c89e04371f3020def32e3  el_trial_data.csv.gz
ea453d9bfa2a017b89b1e274448760d8  en_answered_item_data.csv
f025f4d465501bb178ec278cd16a7b5e  en_answered_prime_summary.csv
7a5a05b90b595c518ff5c2fa8945b4f3  en_answered_prime_summary_no2.5.csv
be00ca8c552e7a36876da081296d1558  en_answered_prime_summary_no3.0.csv
70326af00ad783f006315218b879c5b2  en_answered_prime_trials.csv
645641fec889370315a33042e679f479  en_full_data.csv.gz
009d4ed18a77114bfa230b80fb416ad4  en_item_data.csv
4f8ed128dcffbc267b6ed46e1fbf6dac  en_participant_data.csv
d42aec4fd2041f127dfc0e0868273ca4  en_prime_summary.csv
729740993a6d7a60e099ffe19f088507  en_prime_summary_no2.5.csv
718798d70033c1eb5c4ed74901ebb610  en_prime_summary_no3.0.csv
70326af00ad783f006315218b879c5b2  en_prime_trials.csv
45916bab11a591994f42e0a7257377c7  en_trial_data.csv.gz
05e1b8fcb3947cb9bf8afef884543d2e  es_answered_item_data.csv
0b16a011e2a9437bfc7d1c2ce5ec969a  es_answered_prime_summary.csv
bdb3638b0bb2f6f5bf4b572baa19bfcd  es_answered_prime_summary_no2.5.csv
1dc431f66e7904011a9e5951b6350c13  es_answered_prime_summary_no3.0.csv
1088295fa1be9ee79e4cd0adeee18065  es_answered_prime_trials.csv
4125f46aff3c21ddaca3165874fcb949  es_full_data.csv.gz
3bcdf584a2c96e048af19732945c4b15  es_item_data.csv
cf2b8d90d8f61b4e0afcc51d9c1237b6  es_participant_data.csv
675dacf363d4759f778a0acd3765e12a  es_prime_summary.csv
dc948a2582b979d839d85ea382dd2ec2  es_prime_summary_no2.5.csv
53c95b54e8b16c15c9ea9f7c6d6a96bb  es_prime_summary_no3.0.csv
1088295fa1be9ee79e4cd0adeee18065  es_prime_trials.csv
65382406e4d61b9d5d55786c7f20345f  es_trial_data.csv.gz
22ac4612263f9ad7338b1a4a5ff8f1be  fa_answered_item_data.csv
f5b1f6fefd1e2ec84d3d10a0980086d0  fa_answered_prime_summary.csv
d1fae85d45c40b62e6c9602011916c7c  fa_answered_prime_summary_no2.5.csv
c9968bcafb1060c36435ee528d60c658  fa_answered_prime_summary_no3.0.csv
bad6fb90b7209d16ef9e61b6d836856c  fa_answered_prime_trials.csv
84730ffc7fda895f729573d36bf5895d  fa_full_data.csv.gz
2f87ac063d2db4df3cb473ed49746934  fa_item_data.csv
6d4b7222c3a98c1d0a0881e99cadf7c2  fa_participant_data.csv
966df899d7f93b2186d4de676687b7e4  fa_prime_summary.csv
64875edea4a57f61ff312b274cd4029a  fa_prime_summary_no2.5.csv
c62a7977a511dab4d04ec985acb4fd88  fa_prime_summary_no3.0.csv
bad6fb90b7209d16ef9e61b6d836856c  fa_prime_trials.csv
3f2aecde17ce537fc1d3316b0ffa5f6f  fa_trial_data.csv.gz
39eedae837cf31af4fffbfaafdea117a  fr_answered_item_data.csv
c4ae7554a372d1127b34e7647ea45659  fr_answered_prime_summary.csv
025a9d23f5fe3d34345412431ad35ddc  fr_answered_prime_summary_no2.5.csv
982fdf36e86a382cc313e62466096d68  fr_answered_prime_summary_no3.0.csv
3b7faf9f439f694045e530a9ee978abc  fr_answered_prime_trials.csv
7cd8f437358093081ec7873b643d5d04  fr_full_data.csv.gz
b9b0288254d13199926bbb4fed417417  fr_item_data.csv
64ffc3d6b1adc09400690019d06f8c2a  fr_participant_data.csv
ed9c575fbe2af4326e895fd59985f836  fr_prime_summary.csv
6e7e9fb8da5e6fa8e42502c74c912a21  fr_prime_summary_no2.5.csv
25ae4eadd19529ae0c0db560d8b1f8a4  fr_prime_summary_no3.0.csv
3b7faf9f439f694045e530a9ee978abc  fr_prime_trials.csv
4460fb764ff449912cc06f2cf87e7c28  fr_trial_data.csv.gz
79eb7aad80f368d1cfd328c617be1b09  he_answered_item_data.csv
b8affed19c19e4843dfa7a512cedade4  he_answered_prime_summary.csv
7902c450b19ad96a60e7634cba5b6def  he_answered_prime_summary_no2.5.csv
84d65afa2bdb5822a2a0587d769f1d0e  he_answered_prime_summary_no3.0.csv
b4db3ad4ff50aeff946788c01c1a802d  he_answered_prime_trials.csv
000d940cf587b85a9a942e1e62f97428  he_full_data.csv.gz
18d94fbe1cd7d27ccf3cccf0b577e39d  he_item_data.csv
2b421bd06f4c2f5f8c7b5e77ab0a4155  he_participant_data.csv
b08455c965cdbfa71c0970131699d4fb  he_prime_summary.csv
6a4b468bbcfecf86ad461d0bb6bca687  he_prime_summary_no2.5.csv
5271b8143fc7e573a6fea05a2a7a8115  he_prime_summary_no3.0.csv
b4db3ad4ff50aeff946788c01c1a802d  he_prime_trials.csv
951a9eb320a11de9fcf74b2506cb64af  he_trial_data.csv.gz
163c8d1f04d922e79b3a9a994a62e511  hi_answered_item_data.csv
1b96de394dc44f989ffc19976df9478a  hi_answered_prime_summary.csv
d645939976826b72c21b98c9bde1ef17  hi_answered_prime_summary_no2.5.csv
d645939976826b72c21b98c9bde1ef17  hi_answered_prime_summary_no3.0.csv
431edb02c603d5d630412461888a1c5a  hi_answered_prime_trials.csv
ee1bab27e646fcd769595c0dbb1d6bc8  hi_full_data.csv.gz
163c8d1f04d922e79b3a9a994a62e511  hi_item_data.csv
5b6216e04180030f3f16cb10a8f3f38b  hi_participant_data.csv
1b96de394dc44f989ffc19976df9478a  hi_prime_summary.csv
d645939976826b72c21b98c9bde1ef17  hi_prime_summary_no2.5.csv
d645939976826b72c21b98c9bde1ef17  hi_prime_summary_no3.0.csv
431edb02c603d5d630412461888a1c5a  hi_prime_trials.csv
2d150c5e4fa441158f9cb9aaa0fc77aa  hi_trial_data.csv.gz
554106fa295f9616cebf2e643e29acf1  hu_answered_item_data.csv
aec3dbfcf3c4103e1d37e8e9a352bfbd  hu_answered_prime_summary.csv
35de39ab93b82a9594e088cae15425c1  hu_answered_prime_summary_no2.5.csv
640f0a3e246bdfef8d8380333a4b68fc  hu_answered_prime_summary_no3.0.csv
a62ebf2ceb5199e7b756b3e48c4df2a4  hu_answered_prime_trials.csv
89690aaf523954446aa6ec28a1f19bba  hu_full_data.csv.gz
61176dece500e53ff3dabf03c24c557d  hu_item_data.csv
80c95175b61056fcf1c6592a6cd32024  hu_participant_data.csv
64f3f415f8b1f79e61b2939c883a4fcc  hu_prime_summary.csv
c66a2834c9e372192a19ccb50d7a9fe5  hu_prime_summary_no2.5.csv
59a8af3948aab1503550ba4deb835655  hu_prime_summary_no3.0.csv
a62ebf2ceb5199e7b756b3e48c4df2a4  hu_prime_trials.csv
cc8566d1c6dfd42e7372efa1b8fb28c7  hu_trial_data.csv.gz
b6b134aa57a2a9416f515dee59e8771e  it_answered_item_data.csv
1322ddff8cb98f0962912246e0c7ed71  it_answered_prime_summary.csv
0da54d72c0197b3f15a8de5367a96357  it_answered_prime_summary_no2.5.csv
cdcfbc919af0e4118afaf26a1bf3b47a  it_answered_prime_summary_no3.0.csv
87a008c9d72bf5cd11257ce023a998aa  it_answered_prime_trials.csv
fa091bf40c1cd0630b6353e57536020b  it_full_data.csv.gz
effcfa5041443cd84fe3d80a9543ef3b  it_item_data.csv
a812b680e902d05d5fe2e9ff5301be13  it_participant_data.csv
159ce26b82f83002b2d7d7e4406738d8  it_prime_summary.csv
d95ba7f29fba72c71c1bee199e265405  it_prime_summary_no2.5.csv
276afc61d2c29654c5581ce0a8e13f26  it_prime_summary_no3.0.csv
87a008c9d72bf5cd11257ce023a998aa  it_prime_trials.csv
a94ca8a0d4c4d3f75ce40845c39978c2  it_trial_data.csv.gz
799363264fe433fee61d7dc2da2a4327  ja_answered_item_data.csv
5e368eb91195d24e250358fba4738b41  ja_answered_prime_summary.csv
3bb1e8af9b7ff56b047118b53ed4af8c  ja_answered_prime_summary_no2.5.csv
fe8429b76cbf411e9b4efee148a2c036  ja_answered_prime_summary_no3.0.csv
5aa399d024b2bad0b2e1c494c66d1967  ja_answered_prime_trials.csv
f1151f70e5eae36bd7b2218e1bd94245  ja_full_data.csv.gz
824eb72b3f63ba164f5f17c78f097198  ja_item_data.csv
f43153feb51955efdc213686f4528329  ja_participant_data.csv
69fbf73c2ac8c933edd84004218ce861  ja_prime_summary.csv
fa06404cd536e3f0dcbe83de1fd9de36  ja_prime_summary_no2.5.csv
375aa7f260a422bc86894b275e05d3ff  ja_prime_summary_no3.0.csv
5aa399d024b2bad0b2e1c494c66d1967  ja_prime_trials.csv
4cd5e5f28aa07063b51d0101cdbb30ae  ja_trial_data.csv.gz
3582e8a910aed9815875d7d07a6f4888  ko_answered_item_data.csv
797f320b185aacef87c1d77c26c9e281  ko_answered_prime_summary.csv
d0971207d97da51f4e5f43e65618f3b3  ko_answered_prime_summary_no2.5.csv
d43683128fc7333debfab708dd843bf3  ko_answered_prime_summary_no3.0.csv
79f7c096e06c2b1a3697f2c806f85f82  ko_answered_prime_trials.csv
4f0cd62cac5f62512aae70a5b24fabfd  ko_full_data.csv.gz
68d3de2a9be99c40cc4c708244d1b84c  ko_item_data.csv
a0374f1e87e79c7ea4ded887a4d1a0fc  ko_participant_data.csv
a500b3373f5751d6590c09f0c94eaa87  ko_prime_summary.csv
1413fcaba1447f5992d929a936676e8c  ko_prime_summary_no2.5.csv
ff7258fbfccbb3c55a7d893a51a0eafb  ko_prime_summary_no3.0.csv
79f7c096e06c2b1a3697f2c806f85f82  ko_prime_trials.csv
b7ea041b7097e61c5e498e717c3ef7a2  ko_trial_data.csv.gz
00029964b5563214271a14a7d0731574  nl_answered_item_data.csv
d8c0ac941155a4f587ab824b90e526df  nl_answered_prime_summary.csv
d680497b9702da8b6c9c9c2f735a8356  nl_answered_prime_summary_no2.5.csv
fc169c46c40004e9d1fe287c0fbd50cb  nl_answered_prime_summary_no3.0.csv
5ea01530f8809fc32eb45f83b5b2a51e  nl_answered_prime_trials.csv
55300fa25e49a5c34972d15e5aa534e1  nl_full_data.csv.gz
e21d4e30e84ef5f8850460f365a615a3  nl_item_data.csv
b0f6b1a6b92a239a5583ffab38c9df9a  nl_participant_data.csv
31f8bd634bb3ae6a6b25d3fee4fa4815  nl_prime_summary.csv
4928c3a71e58a95fee247f15cb2cd704  nl_prime_summary_no2.5.csv
ef6a02a59016baf26d79fa7966e431b3  nl_prime_summary_no3.0.csv
5ea01530f8809fc32eb45f83b5b2a51e  nl_prime_trials.csv
863b8f18aafcca5a37905c1ad1060f4e  nl_trial_data.csv.gz
a15289783622946880b0bf7443718c62  no_answered_item_data.csv
bf48570448a03a78c9e64dc558a3ce28  no_answered_prime_summary.csv
f5445358e780ba80c6bc6d566ee8aac9  no_answered_prime_summary_no2.5.csv
0ca33f14f20925a553bc9a92a816917b  no_answered_prime_summary_no3.0.csv
c7cb1f77ba274da023cae2e9e041363e  no_answered_prime_trials.csv
e250a5e80150d4372d65836c6c716da9  no_full_data.csv.gz
a15289783622946880b0bf7443718c62  no_item_data.csv
2edd8329b377cfbe8fd4e14b495305b0  no_participant_data.csv
bf48570448a03a78c9e64dc558a3ce28  no_prime_summary.csv
f5445358e780ba80c6bc6d566ee8aac9  no_prime_summary_no2.5.csv
0ca33f14f20925a553bc9a92a816917b  no_prime_summary_no3.0.csv
c7cb1f77ba274da023cae2e9e041363e  no_prime_trials.csv
f397ca4eaf3cd988e448ee91472c7521  no_trial_data.csv.gz
33ceead0296e7982e69aab6856c23995  pl_answered_item_data.csv
a67177e6411e463b3291e8bb9ad5ba4a  pl_answered_prime_summary.csv
fdaaccdf02cd72f6a5b2326ab41e444a  pl_answered_prime_summary_no2.5.csv
5abec17ca393c8f6617c054cc4c4b7fe  pl_answered_prime_summary_no3.0.csv
ddb75f76f7c5bfe0abe6a17257d0ab5e  pl_answered_prime_trials.csv
88102676647c7523b25e3392a818efb9  pl_full_data.csv.gz
1eb3cb34ac57601eaa47970c0f9ba2ab  pl_item_data.csv
60ad85bbb086fbea4f17f4a48d82ee07  pl_participant_data.csv
6cbe2ec3a572d8b4457e9f3856e179e0  pl_prime_summary.csv
46b85ea29d6acd9c267bc1fa0880ed6b  pl_prime_summary_no2.5.csv
723ea803bd581ad415162549a91be739  pl_prime_summary_no3.0.csv
ddb75f76f7c5bfe0abe6a17257d0ab5e  pl_prime_trials.csv
ec456323c409effb7a879e2dd876fa0e  pl_trial_data.csv.gz
a1f72c1b2792e4b5aabc76d51b42451e  pt_combo_answered_item_data.csv
4c1690ca66ea56fb33c7ec9ba35a9635  pt_combo_answered_prime_summary.csv
bd8eddc4603096d3bfba4211a6f71be4  pt_combo_answered_prime_summary_no2.5.csv
7e0c097abfcb92d16bc4423979b6bfd2  pt_combo_answered_prime_summary_no3.0.csv
04c51846da8783b8292d6778adbef4dd  pt_combo_answered_prime_trials.csv
bc9be956f4e83d50b005d86ed8ceaa47  pt_combo_full_data.csv.gz
79165675e86e6e156a1bb150df843935  pt_combo_item_data.csv
58440872855d19d2c92de4d64a8c3602  pt_combo_participant_data.csv
e40c07c765b87160965832343741c7cd  pt_combo_prime_summary.csv
dbc5a03f2598a766127558edf62b5e99  pt_combo_prime_summary_no2.5.csv
d2c0ec14a6bb10fd14c272e091fb2b6e  pt_combo_prime_summary_no3.0.csv
04c51846da8783b8292d6778adbef4dd  pt_combo_prime_trials.csv
327c40952fa5758ab911a5e5374ea832  pt_combo_trial_data.csv.gz
bf4e2c4054a022f4fc717364da786b12  pt_pt_combo_answered_item_data.csv
e7b9c83b67531e5cd2fbbc53f0f8e1f1  pt_pt_combo_item_data.csv
339caade3703e1660c42db6b0a7dfdec  ro_answered_item_data.csv
8466c798afd7d437c0f1b979d114f049  ro_answered_prime_summary.csv
bd80750f84b1711545fcd3615281f7ca  ro_answered_prime_summary_no2.5.csv
3ad6cc4ab2ae189031506c312de119fc  ro_answered_prime_summary_no3.0.csv
e9dae88b59c500583041f27afed342cb  ro_answered_prime_trials.csv
d4319976a599ec0b73ce8e567262d866  ro_full_data.csv.gz
8bf37aff314b749f16f7643c1d19f43c  ro_item_data.csv
6109047553420f0a41528c9b6ab848ac  ro_participant_data.csv
930e3aa8f8f64db9319342a7e8a1e0de  ro_prime_summary.csv
87deb4296312027f066961607d11b597  ro_prime_summary_no2.5.csv
4e2c04e559eca946d4b9b4515ca7f598  ro_prime_summary_no3.0.csv
e9dae88b59c500583041f27afed342cb  ro_prime_trials.csv
82c3bacff43c36228df2e3db88881149  ro_trial_data.csv.gz
7a934704b276265aab715f5fb8ceb8a0  ru_answered_item_data.csv
273732e333b45c98e3a4918c94678a5b  ru_answered_prime_summary.csv
db40a3e9a9f74bd9d61ea34d6203adeb  ru_answered_prime_summary_no2.5.csv
2163be22c72192fb0c09d7487aa846dc  ru_answered_prime_summary_no3.0.csv
087e3f2ad5a31fc87dfa115d3200a2bd  ru_answered_prime_trials.csv
52c42b9e6ec330e91342a4de0bf0f86e  ru_full_data.csv.gz
53f1a84f88f8e4ed5c4d95034dd69131  ru_item_data.csv
6f13be6805645c808a2087ed4de85038  ru_participant_data.csv
64d4e29e7c16015017a7193f4b7fec8a  ru_prime_summary.csv
23bdb1681b15af035dc4cd8af8f40073  ru_prime_summary_no2.5.csv
494436710d74d5262d712691ae565d36  ru_prime_summary_no3.0.csv
087e3f2ad5a31fc87dfa115d3200a2bd  ru_prime_trials.csv
c2ad1178ea285ae25486d6eab7b9cfde  ru_trial_data.csv.gz
d82172e99081576a64ea0a3280bb0c08  sk_answered_item_data.csv
6926f8e29844d2d84800173fa1f84e84  sk_answered_prime_summary.csv
f96bcb81a7c9901a2444c4a0ab150501  sk_answered_prime_summary_no2.5.csv
bbeb47917190a27eb572381dc01c7b82  sk_answered_prime_summary_no3.0.csv
af618d856e3603e1887db71b23820f36  sk_answered_prime_trials.csv
d852f627a2103d606264c7270d842fa9  sk_full_data.csv.gz
0bffe3842cf4db698725a9beba5562b6  sk_item_data.csv
5d30a2e35af93219ebfc8d7722df798b  sk_participant_data.csv
9c651fd1a1074077aa57880718f5f973  sk_prime_summary.csv
50a652fa30b9aab7c87aed374b69af32  sk_prime_summary_no2.5.csv
fe49984d6bbfafec2e33ad797cb6c205  sk_prime_summary_no3.0.csv
af618d856e3603e1887db71b23820f36  sk_prime_trials.csv
1b4bef8d428a904eb67a788c94a7fa32  sk_trial_data.csv.gz
d45b3862e03aecdf0b4e467d9310d046  sl_answered_item_data.csv
80259fb1c9f91fa13d2c5b42412601fe  sl_answered_prime_summary.csv
f63e3bbb23264f4dd3794036457d6916  sl_answered_prime_summary_no2.5.csv
bd955fa3493e52889ba6514a9843e5f1  sl_answered_prime_summary_no3.0.csv
c8191b461f9f8eacbebeaff301726538  sl_answered_prime_trials.csv
dc5c496600f89e0421c385efa6795d8e  sl_full_data.csv.gz
d45b3862e03aecdf0b4e467d9310d046  sl_item_data.csv
89d68844792aebf4928f7f9c87004884  sl_participant_data.csv
80259fb1c9f91fa13d2c5b42412601fe  sl_prime_summary.csv
f63e3bbb23264f4dd3794036457d6916  sl_prime_summary_no2.5.csv
bd955fa3493e52889ba6514a9843e5f1  sl_prime_summary_no3.0.csv
c8191b461f9f8eacbebeaff301726538  sl_prime_trials.csv
cecda858d08b862c5186ad047ee3e112  sl_trial_data.csv.gz
5063adc4b74ce435ecf9e5bb229ff7cc  sr_answered_item_data.csv
6c65dbe95530d9f1945662c4a1e59feb  sr_answered_prime_summary.csv
f35c9be127f127fafbb032e3dc37c66f  sr_answered_prime_summary_no2.5.csv
6394e4aa86f5e01d692cec8f265b9b7c  sr_answered_prime_summary_no3.0.csv
4655c98c85def8c41df864e41fc4515c  sr_answered_prime_trials.csv
1a021d7b09c9d6408797259344ede529  sr_full_data.csv.gz
9b8779df04fc6716646df22b1f2b602e  sr_item_data.csv
ab20c6c4678883c20ac51a80dda37e83  sr_participant_data.csv
dba06a01b947d9bda9a00ca8c8ed4535  sr_prime_summary.csv
7cb4c8f0a342af67ba75b6d1233619ac  sr_prime_summary_no2.5.csv
91fdb38f5ee4174f7de89440fd544a4a  sr_prime_summary_no3.0.csv
4655c98c85def8c41df864e41fc4515c  sr_prime_trials.csv
6b602b81a06f620a1773fc57874f7d3f  sr_trial_data.csv.gz
41d0bcd1a9bd69e7738d7dc861e02d01  th_answered_item_data.csv
6d472636c2ef462e2ceb2646097ccaf0  th_answered_prime_summary.csv
6f1df53e974871b03cba8054cba992ac  th_answered_prime_summary_no2.5.csv
fc5b6320df99bee29ae827c2318502fa  th_answered_prime_summary_no3.0.csv
ad3acb0e9e41e02e005e02cbe5623304  th_answered_prime_trials.csv
298edc7e3f8f6accd4556f5a51d8743c  th_full_data.csv.gz
69dd450690dfb36703f68f081333163e  th_item_data.csv
2d6b7c3e49e878f69748438659ddbaaa  th_participant_data.csv
34ad7f507250619fb5a694003b126b84  th_prime_summary.csv
6033f5f24bbaaed205595ded4e0dfade  th_prime_summary_no2.5.csv
15ac04a88389b66e41915e407276539d  th_prime_summary_no3.0.csv
ad3acb0e9e41e02e005e02cbe5623304  th_prime_trials.csv
04ae26439e7068fb68237870d4bc2406  th_trial_data.csv.gz
a742e8ddc6f6c127329c6127a57da47e  tr_answered_item_data.csv
268df78d7da8a4236ec259758e32bfeb  tr_answered_prime_summary.csv
876b1d6609dd57defcded9e6b7bab85f  tr_answered_prime_summary_no2.5.csv
78acb3d8903dbb845277aa006db29356  tr_answered_prime_summary_no3.0.csv
08a30aba059cd82581be20a69bd7fe9b  tr_answered_prime_trials.csv
a3b635e8f18fa4667ac8ff44aa3c72d8  tr_full_data.csv.gz
8508352e8f19d64a7bfe7f4586480da2  tr_item_data.csv
ffd10cf65e7a47832da45b75151b96c9  tr_participant_data.csv
bccf75cdb9656a6c65b16fd43b1ce7ad  tr_prime_summary.csv
5e85c9ca5da9428025b9620a7dcfa6b1  tr_prime_summary_no2.5.csv
d7285d54a9c80d559701d59fcd9d835a  tr_prime_summary_no3.0.csv
08a30aba059cd82581be20a69bd7fe9b  tr_prime_trials.csv
c5281cc3359288ede41da7d87135ca14  tr_trial_data.csv.gz
7c20fd03fb688e87bda24e496458502d  ur_answered_item_data.csv
a7dc85f78f30622361d1ee66798ad726  ur_answered_prime_summary.csv
6aa34f430d38e178a8923693b631d582  ur_answered_prime_summary_no2.5.csv
37f80412c7b8e725f6a1cc5c1d81e602  ur_answered_prime_summary_no3.0.csv
0da28b71f31c930d89da8b7fcfbc0e19  ur_answered_prime_trials.csv
b6cdd16d21960ce630ad6f8b83c96f76  ur_full_data.csv.gz
584e0f21c7c24f1112aacf9897b022ec  ur_item_data.csv
43d96e2d16f8857f06362f3617d6d8f3  ur_participant_data.csv
c6d90ebe41f2500f3afd683bd1678a55  ur_prime_summary.csv
e85eecd37198a7b47d6ddc4914bdac40  ur_prime_summary_no2.5.csv
7de99e45f0181a5381bbe1c6aafc4e39  ur_prime_summary_no3.0.csv
0da28b71f31c930d89da8b7fcfbc0e19  ur_prime_trials.csv
e94d928b269eef07fb5dd94178bbe86d  ur_trial_data.csv.gz
d472cb9db0c03e72f2e4c1c3a97c173d  zh_answered_item_data.csv
83becaa55610bec62403ebc4503eb592  zh_answered_prime_summary.csv
5040dd29f01929e143827d0d718a400c  zh_answered_prime_summary_no2.5.csv
415b5cf9e0c6dd59df51cda8407c0205  zh_answered_prime_summary_no3.0.csv
c9ec3ebb1312ce50fe6b56fbaabf19d5  zh_answered_prime_trials.csv
b0d57cbfd8917f2c0739bf8417c187ac  zh_full_data.csv.gz
92f08fc8b3531e1c2ed243168853baad  zh_hk_answered_item_data.csv
7c338795b39f0679f9084c7abcb2ae2c  zh_hk_answered_prime_summary.csv
8671fc19901135b9a72455c008f75b09  zh_hk_answered_prime_summary_no2.5.csv
4b5f599e06d50c046517fa5a91da6969  zh_hk_answered_prime_summary_no3.0.csv
0fdc980aa16131d17a84342f4b4cabe9  zh_hk_answered_prime_trials.csv
8fa7f55a7f4cee95ef0a26290b198ea9  zh_hk_full_data.csv.gz
9b97f9275cea6481901d99746625c574  zh_hk_item_data.csv
7049cfa343bf1802eb8820ebaa8fbffe  zh_hk_participant_data.csv
de15817ff8c2a99d9d5587163613278e  zh_hk_prime_summary.csv
56faf1aaec610e0bf64395704c92e86a  zh_hk_prime_summary_no2.5.csv
5bea709c3bb3b79ca53b8eee80764db8  zh_hk_prime_summary_no3.0.csv
0fdc980aa16131d17a84342f4b4cabe9  zh_hk_prime_trials.csv
b3dec3fe8d4d1bb91986c12142359ce3  zh_hk_trial_data.csv.gz
45901306d0e81124dce63147b963d712  zh_item_data.csv
f97b2b745fb8d87e9bcff025e23a3f9a  zh_participant_data.csv
018897fbe50465b6bd6157a7a69d940e  zh_prime_summary.csv
05fcb3cc9e770cd61c2e9e6d15b5e83f  zh_prime_summary_no2.5.csv
324efe0261789ec1b0100f6e63c7bfe9  zh_prime_summary_no3.0.csv
c9ec3ebb1312ce50fe6b56fbaabf19d5  zh_prime_trials.csv
3c54980684488c8b1c30c6e180115ce0  zh_trial_data.csv.gz
```
