// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Lexical decision task",
    "description": "SPAML English Language Task",
    "repository": "https:\u002F\u002Fgithub.com\u002Fdoomlab\u002FSPAML",
    "contributors": "Erin Buchanan\nFelix Henninger\nNiels van Berkel"
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.uuid = this.random.uuid4()
this.parameters['uuid'] = window.uuid
}
      },
      "title": "Consent Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003E در شرکت رضایت فرمپژوهش\n \u003C\u002Fh2\u003E\n\n    \u003Ch3\u003Eمعنا و کلمات پردازش فهم\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-right\"آنها معنی و کلمات پردازش و خواندن نحوۀ مورد در تحقیقاتی مطالعۀ یک در تا میشود دعوت شما از\n با موافقت از قبل دارید که سوالی گونه هر و بخوانید را فرم این که میخواهیم شما از ما .کنید شرکت\n .بپرسید مطالعه در شرکت\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eمی انجام هریسبورگ فناوری و علم دانشگاه در شناختی تحلیل استاد بوکانان، اِرین دکتر توسط مطالعه این\n .شود\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:پیشینه اطلاعات:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n     برای .کنید تکمیل کلمات مفاهیم مورد در را مختلفی سوالات تا میشود خواسته شما از مطالعه این در\n با را خود آشنایی میزان کنید، تعریف را کلمه یک ویژگیهای که شود خواسته شما از است ممکن مثال،\n یا است واقعی کلمۀ یک حروف، از رشته یک آیا که کنید قضاوت سادگی به یا کنید، ارزیابی کلمه یک\n .خیر \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:فرایند\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    .داد  خواهید  انجام  کلید  صفحه  با  تاپ  لپ  یا  رومیزی  رایانه  یک  از  آنلاین  کاملاً  را  آزمایش  این  شما\n شما به شوند، می انتخاب فرد هر برای تصادفی طور به که آزمایش های بخش مورد در دستورالعملهایی\n مطالعه کل .بدانید بیشتر تحقیق اهداف و مطالعه مورد در میتوانید آزمایش، اتمام از پس .شود می داده\n.بکشد طول دقیقه سی از کمتر باید\u003C\u002Fp\u003E\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:پژوهش در شرکت زیانهای و سود\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    \nمطالعۀ .باشد ناشناس باید شما های پاسخ بنابراین، .شود نمی جمعآوری شما از شناسایی اطلاعات هیچ\n باعث  میشود  خواسته  شما  از  که  کاری  اساس  بر  است  ممکن  که  است  آنلاین  بازی  یک  به  شبیه  فعلی\n.شود کسالت یا خستگی\n    \u003Cbr \u002F\u003E\n     زبان از ما درک به شما پاسخهای حال، این با .ندارد شما برای مستقیمی سود هیچ مطالعه این در شرکت\n.میکند کمک شناختی حافظۀ فرایندهای و\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:پاداش\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E.کنید دریافت پاداش خود محلی محقق طریق از مطالعه این در شرکت هنگام است ممکن \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:دادهها گذاشتن اشتراک به و محرمانگی\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    .بود  خواهد  ناشناس  میدهید  ارائه  که  اطلاعاتی  تمام  که  شود  حاصل  اطمینان  تا  میشود  انجام  اقداماتی\n این با .کنند استفاده آنها از تا شود می ارسال محققان سایر برای عمومی صورت به پروژه این دادههای\n مجموعۀ در شما شناسایی اطلاعات سایر یا شما نام .شد نخواهد مرتبط شما به مستقیماً دادهای هیچ حال،\n ارجاعی کند، مرتبط مطالعه به را شما میتواند که کتبی یا شفاهی گزارشهای در و شد نخواهد وارد داده\n.نباشید شناسایی قابل شما که میشود ارائه گونهای به اطلاعات نشریه، هر در .شد نخواهد داده\n    \u003Cbr \u002F\u003E\n    حذف بالقوه شناسایی اطلاعات گونه هر تحقیقاتی، تیم از خارج در شما دادههای گذاشتن اشتراک به از قبل\n برای محققان سایر با یا گیرد قرار استفاده مورد تحقیقاتی تیم توسط است ممکن ناشناس دادههای .شد خواهد\n در است ممکن شما ناشناس دادههای .شود گذاشته اشتراک به آینده در غیرمرتبط و مرتبط تحقیقاتی اهداف\n ثبت به نیاز آن به دسترسی برای که هستند رایگانی دادههای مخازن که) OSF مانند آنلاین دادههای مخازن\n تحلیل و تجزیه برای میدهد اجازه علاقهمند اشخاص و محققان سایر به که باشد، دسترس در (است نام\n.باشند داشته دسترسی دادهها به بیشتر\n    \u003Cbr \u002F\u003E\n     مطالعه  تکمیل  از  پس  که  معنی  این  به  بود،  خواهد  ناشناس  شما  دادههای  که  باشید  داشته  توجه  لطفاً\n.بدهید را آنها حذف درخواست نمیتوانید\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:پژوهش داوطلبانۀ \u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    :است داوطلبانه پژوهش این در شرکت  هریسبورگ فناوری و علم دانشگاه با شما آیندۀ یا فعلی روابط در پژوهش این در شرکت برای شما تصمیم\n پاسخ سؤالی هیچ به که هستید آزاد دارید، شرکت به تصمیم اگر .داشت نخواهد تأثیری شما محلی موسسۀ یا\n.دهید انصراف زمانی هر در یا ندهید \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:سوالات و ارتباطی راههای\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    «روانشناختی علم تسهیلگران» مشارکت با بوکانان .ام ارین دکتر میدهند انجام را مطالعه این که محققینی\n بوکانان دکتر با شود می توصیه داشتید، سؤالی بعداً اگر .بپرسید دارید سوالی هر توانید می اکنون .هستند\n :باشید ارتباط در\nebuchanan@harrisburgu.edu. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E :دغدغهها و سوالات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n     هیئت این .است شده بررسی هریسبورگ فناوری و علم دانشگاه نهادی بازبینی هیئت توسط مطالعه این\n و ایالتی قوانین توسط که را انسانی تحقیق موضوع از حفاظت تعهدات مطالعه این که است کرده مشخص\n.دهد می انجام است، نیاز مورد دانشگاه سیاستهای و فدرال \n\n    \u003Cp class=\"text-right\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Fdgy7s\u002Fdownload\"\u003E .شد خواهد ارائه شما سوابق در نگهداری برای اطلاعات این از کپی یک درخواست، صورت در\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E را فشار دهید تا با مطالعه موافقت کنید و ادامه دهید.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-right\"\u003Eلطفا کمی در مورد خودتان به ما بگویید:\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eلطفا جنسیت خود را به ما بگویید:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-right\"\u003E\n                    نر\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-right\"\u003E\n                    زن\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-right\"\u003E\n                    دیگر\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-right\"\u003E\n                   ترجیح میدهم نگویم\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eمتولد کدام سال هستید؟ لطفاً یک سال چهار رقمی وارد کنید (برای ادامه باید پاسخ دهید):\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eلطفا سطح تحصیلات خود را به ما بگویید:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-right\"\u003E\n                  کمتر از دبیرستان\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-right\"\u003E\n                  دبیرستان\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-right\"\u003E\n                  مدرک کاردانی یا دو ساله\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-right\"\u003E\n                  مدرک لیسانس یا چهارساله\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-right\"\u003E\n                  مدرک کارشناسی ارشد یا معادل آن\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-right\"\u003E\n                  مدرک دکتری یا معادل آن\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eزبان مادری (اولین) شما چه زبانی است؟\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eآیا شما در درجه اول چپ دست هستید یا راست دست (برای ادامه باید پاسخ دهید)؟\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-right\"\u003E\n                  ترک کرد\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-right\"\u003E\n                 درست\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      ادامه →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
      "files": {},
      "parameters": {},
      "responses": {
        "undefined": "dominanthand"
      },
      "messageHandlers": {},
      "title": "Demographics Form",
      "scrollTop": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
if(this.state.dominanthand == "left") {
  window.word_key = '1'
  window.nonword_key = '9'
} else if(this.state.dominanthand == "right") {
  window.word_key = '9'
  window.nonword_key = '1'
}
}
      },
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003Eدستورالعمل ها\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-right\"\u003E کلمات که میشودرا  خواسته شما از .شود می مربوط افراد توسط کلمات پردازش نحوۀ به آزمایش این\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eکلمه آیا که بپرسید خود از باید .میشوند داده نمایش صفحه وسط در کلمات .کنید قضاوت را آنها و  \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E \n کلمه آیا که بپرسید خود از باید .میشوند داده نمایش صفحه وسط در کلمات .کنید قضاوت را آنها و ببینید\n تشخیص \u003Cb\u003Eسرد\u003C\u002Fb\u003E مانند را صفحه روی کلمۀ اگر .جعلی کلمه یک یا است واقعی کلمه یک صفحه روی\n مانند  است،  بیمعنی  و  ساختگی    کلمه  اگر  .دهید  فشار  واقعی  کلمۀ  برای  را  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  کلید  لطفاً  میدهید،\n خواهیم بازخورد شما به ما تمرین، طول در .دهید فشار جعلی کلمۀ برای را \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E فلید کلید لطفاً   \n دارید فرصت ثانیه پنج شما .دهید پاسخ سریعتر چه هر صحت و دقت عین در شما که هستیم مایل ما .داد\n.کنید امتحان تمرین برای را مورد چند تا دهید فشار را فاصله کلید لطفاً .دهید پاسخ کلمه هر ب\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eدارید فرصت ثانیه سه شما .دهید پاسخ سریعتر چه هر صحت و دقت عین در شما که هستیم مایل ما .داد\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003Eطفاً .دهید \u003Ckbd\u003E پاسخ کلمه  \u003C\u002Fkbd\u003E برای تمرین چند مورد را امتحان کنید\u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \nمانند  است،  بیمعنی  و  ساختگی    کلمه  اگر  .دهید  فشار  واقعی  کلمۀ  برای  را \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E کلید  لطفاً  میدهید،\n خواهیم بازخورد شما به ما تمرین، طول در .دهید فشار جعلی کلمۀ برای ر, \n  and \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مانند  است،  بیمو  ساختگی    کلمه  اگر  .دهید  فشار  واقعی  کلمۀ  برای  را  \n.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Task Frame Practice",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_practice.json": "embedded\u002Fdb6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "draw-shuffle"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_practice.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Practice",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Practice",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Practice",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Practice",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 380.78,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#222222",
                  "text": "${ this.parameters.feedback }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "32",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters.feedback = this.state.ended_on !== 'response'
  ? 'لطفا سریعتر جواب بدید'
  : (
    this.state.correct
      ? 'درست'
      : 'غلط'
  )
}
              },
              "viewport": [
                800,
                600
              ],
              "title": "ITI \u002F Feedback",
              "timeout": "${ this.state.correct === true ? 500 : 1500 }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Real Task Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eدستورالعمل ها\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eکارت عالی بود! به یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key } \u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاکنون کار واقعی را تکمیل خواهید کرد، به یاد داشته باشید که در زمان دریافت پاسخ صحیح، در اسرع وقت پیش بروید. در این بخش هیچ بازخوردی نخواهید دید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E را فشار دهید.\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 1",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real1.json": "embedded\u002F3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real1.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E\n\n",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 2",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real2.json": "embedded\u002Fae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real2.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 3",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real3.json": "embedded\u002F3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real3.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 4",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real4.json": "embedded\u002F994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real4.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 5",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real5.json": "embedded\u002F9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real5.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 6",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real6.json": "embedded\u002Fcd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real6.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 7",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real7.json": "embedded\u002Fc378cfb94011283fa98a84e5e2d34272f4a3134cda08298ed211f9c6c2331757.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real7.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Break",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eزنگ تفريح\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاستراحت کوتاهی داشته باشید.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبه یاد داشته باشید که باید از کلید \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E برای کلمه واقعی و از \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E برای کلمه جعلی استفاده کنید.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً برای ادامه \u003Ckbd\u003ESpacebar\u003C\u002Fkbd\u003Eرا فشار دهید یا صبر کنید تا این صفحه ناپدید شود.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگر کلمه فوق یک کلمه واقعی است، لطفاً \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید،\n  و \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E اگر یک کلمه جعلی باشد.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 8",
      "tardy": true,
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real8.json": "embedded\u002F0d00e4cacc8fbd59aa34a45be41f535ccade17517701d1b3fa6ef139ca8746a3.json"
        },
        "parameters": {},
        "templateParameters": [],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": async function anonymous(
) {
const response = await fetch(this.files['stimuli_english_real8.json'])

this.options.templateParameters = await response.json()
}
        },
        "title": "Task Real",
        "tardy": true,
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Trial Real",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 24.53,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation Cross Real",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 504.19,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "42",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(${ window.word_key })": "word",
                "keypress(${ window.nonword_key })": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "3000",
              "correctResponse": "${ this.parameters.class }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "End of Experiment",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003Eمتشکرم!\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eاکنون آزمایش را کامل کرده اید.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eشناسه شرکت کننده تصادفی شما این است:\n      ${ window.uuid }. می‌توانید از این عدد برای دادن به آزمایش‌گر خود استفاده کنید تا نشان دهد آزمایش را کامل کرده‌اید.\u003C\u002Fp\u003E\n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  اکنون می توانید پنجره را ببندید.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()