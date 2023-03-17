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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003E فرم رضایت شرکت در پژوهش\n \u003C\u002Fh2\u003E\n\n    \u003Ch3\u003Eفهم پردازش کلمات و معنا\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-right\"از شما دعوت می‌شود تا در یک مطالعۀ تحقیقاتی در مورد نحوۀ خواندن و پردازش کلمات و معنی آن‌ها شرکت کنید. ما از شما می‌خواهیم که این فرم را بخوانید و هر گونه سوالی که دارید قبل از موافقت با شرکت در پژوهش بپرسید\n    \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاز شما دعوت می‌شود تا در یک مطالعۀ تحقیقاتی در مورد نحوۀ خواندن و پردازش کلمات و معنی آن‌ها شرکت کنید. ما از شما می‌خواهیم که این فرم را بخوانید و هر گونه سوالی که دارید قبل از موافقت با شرکت در پژوهش بپرسید.این مطالعه توسط ارین بوکانان، استاد تحلیل شناختی در دانشگاه هریسبورگ انجام می‌شود \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:اطلاعات پیشینه\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n     در این مطالعه از شما خواسته می‌شود تا سوالات مختلفی را در مورد مفاهیم کلمات تکمیل کنید. برای مثال، ممکن است از شما خواسته شود که ویژگی‌های یک کلمه را تعریف کنید، میزان آشنایی خود را با یک کلمه ارزیابی کنید یا به سادگی قضاوت کنید که آیا یک رشته از حروف، یک کلمۀ واقعی است یا خیر \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:فرایند\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    شما این آزمایش را کاملاً آنلاین، از یک رایانۀ رومیزی یا لپ‌تاپ با صفحۀ کلید انجام خواهید داد. دستورالعمل‌هایی در مورد بخش‌های آزمایش که به طور تصادفی برای هر فرد انتخاب می‌شوند به شما داده می‌شود. پس از اتمام آزمایش می‌توانید در مورد مطالعه و اهداف تحقیق بیشتر بدانید. کل مطالعه باید کمتر از سی دقیقه طول بکشد\u003C\u002Fp\u003E\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:سود و زیان‌های شرکت در پژوهش\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    \nهیچ اطلاعات شناسایی از شما جمع‌آوری نمی‌شود. بنابراین، پاسخ‌های شما باید ناشناس باشد. مطالعۀ فعلی شبیه به یک بازی آنلاین است که ممکن است بر اساس کاری که از شما خواسته می‌شود باعث خستگی یا کسالت شود\n    \u003Cbr \u002F\u003E\n    شرکت در این مطالعه هیچ سود مستقیمی برای شما ندارد. با این حال پاسخ‌های شما به درک ما از زبان و فرایندهای حافظۀ شناختی کمک می‌کند\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:پاداش\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003Eممکن است هنگام شرکت در این مطالعه از طریق محقق محلی خود پاداش دریافت کنید   \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:محرمانگی و به اشتراک گذاشتن داده‌ها\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    اقداماتی انجام می‌شود تا اطمینان حاصل شود که تمام اطلاعاتی که ارائه می‌دهید ناشناس خواهد بود. داده‌های این پروژه به صورت مستقیم برای سایر محققان ارسال می‌شود تا از آن‌ها استفاده کنند. با این حال هیچ داده‌ای مستقیماً به شما مرتبط نخواهد شد. نام شما یا سایر اطلاعات شناسایی شما در مجوعۀ داده وارد نخواهد شد و در گزارش‌های شفاهی یا کتبی که می‌تواند شما را به مطالعه مرتبط کند، ارجاعی داده نخواهد شد. در هر نشریه، اطلاعات به گونه‌ای ارائه می‌شود که شما قابل شناسایی نباشید\n    \u003Cbr \u002F\u003E\n    قبل از به اشتراک گذاشتن داده‌های شما خارج از گروه تحقیقاتی، هر گونه اطلاعات شناسایی بالقوه حذف خواهد شد. داده‌های ناشناس ممکن است توسط تیم تحقیقاتی مورد استفاده قرار گیرد یا با سایر محققان برای اهداف تحقیقاتی مرتبط و غیرمرتبط در آینده به اشتراک گذاشته شود. داده‌های ناشناس شما ممکن است در مخازن داده‌های آنلاین در دسترس باشد که به سایر محققان و اشخاص علاقه‌مند اجازه می‌دهد برای تجزیه و تحلیل بیشتر به داده‌ها دسترسی داشته باشند\n    \u003Cbr \u002F\u003E\n     لطفا توجه داشته باشید که داده‌های شما ناشناس خواهد بود، به این معنی که پس از تکیمل مطالعه نمی‌توانید درخواست حذف آن‌ها را بدهید\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:ماهیت داوطلبانۀ پژوهش \u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    شرکت در این پژوهش داوطلبانه است. تصمیم شما برای شرکت در این پژوهش در روابط فعلی یا آیندۀ شما با دانشگاه علم و فناوری هریسبورگ یا موسسۀ محلی شما تأثیری نخواهد داشت. اگر تصمیم به شرکت دارید، آزاد هستید که به هیچ سوالی پاسخ ندهید یا در هر زمانی انصراف دهید \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E:راه‌های ارتباطی و سوالات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    محققینی که این مطالعه را انجام می‌دهند با مشارکت تسهیلگران علم روانشناختی هستند. اکنون می‌توانید هر سوالی دارید بپرسید. اگر بعداً سوالی داشتید توصیه می‌شود با دکتر بوکانان در ارتباط باشید \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E :سوالات و دغدغه‌ها\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n     این مطالعه توسط هیئت بازبینی نهادی دانشگاه علم و فناوری هریسبورگ بررسی شده است. این هیئت مشخص کرده است که این مطالعه تعهدات حفاظت از موضوع تحقیق انسانی را که توسط قوانین ایالتی و فدرال و سیاست‌های دانشگاه مورد نیاز است، انجام می‌دهد\n\n    \u003Cp class=\"text-right\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Fdgy7s\u002Fdownload\"\u003E در صورت درخواست، یک کپی از این اطلاعات برای نگهداری در سوابق شما ارائه خواهد شد\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  لطفاً \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E را فشار دهید تا با مطالعه موافقت کنید و ادامه دهید.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-right\"\u003Eلطفا کمی در مورد خودتان به ما بگویید:\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eلطفا جنسیت خود را به ما بگویید:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-right\"\u003E\n                    مرد\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-right\"\u003E\n                    زن\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-right\"\u003E\n                    دیگر\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-right\"\u003E\n                   ترجیح میدهم نگویم\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eمتولد کدام سال هستید؟ لطفاً یک سال چهار رقمی وارد کنید (برای ادامه باید پاسخ دهید):\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eلطفا سطح تحصیلات خود را به ما بگویید:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-right\"\u003E\n                  کمتر از دبیرستان\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-right\"\u003E\n                  دبیرستان\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-right\"\u003E\n                  مدرک کاردانی یا دو ساله\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-right\"\u003E\n                  مدرک لیسانس یا چهارساله\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-right\"\u003E\n                  مدرک کارشناسی ارشد یا معادل آن\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-right\"\u003E\n                  مدرک دکتری یا معادل آن\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eزبان مادری (اولین) شما چه زبانی است؟\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eآیا شما در درجه اول چپ دست هستید یا راست دست (برای ادامه باید پاسخ دهید)؟\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-right\"\u003E\n                  چپ دست\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-right\"\u003E\n                 راست دست\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      ادامه →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003Eدستورالعمل‌ها\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-right\"\u003E این آزمایش به نحوۀ پردازش کلمات توسط افراد مربوط می‌شود. از شما خواسته می‌شود کلمات را ببینید و آن‌ها را قضاوت کنید  \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eکلمات در وسط صفحه نمایش داده می‌شوند باید از خود بپرسید آیا کلمۀ روی صفحه یک کلمۀ واقعی است یا جعلی .   \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E \nاگر روی صفحه کلمه‌ای واقعی مانند \u003Cb\u003Eسرد\u003C\u002Fb\u003E را شناسایی کردید لطفا کلید  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  فشار دهید. اگر کلمه ساختگی و بی‌معناست کلید \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E را فشار دهید. در طول تمرین به شما بازخورد خواهیم داد.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eما مایل هستیم که شما در عین دقت و صحت هر چه سریع‌تر پاسخ دهید. شما سه ثانیه فرصت دارید به هر کلمه پاسخ دهید  \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   لطفا کلید\u003Ckbd\u003E Space  \u003C\u002Fkbd\u003E را برای تمرین چند مورد فشار دهید\n   \u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \nاگر کلمه واقعی است لطفا کلید\u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E را فشار دهید و اگر ساختگی است لطفا کلید \n   \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E را فشار دهید \n\n\u003C\u002Ffooter\u003E",
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