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
    "description": "SPAML English Language Task ",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eرضامندی کا فارم\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003Eالفاظ کے معانی اورپروسیسنگ کی تفہیم\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-right\"\u003Eآپ کواس تحقیق میں شامل ہونے کے لیئے مدعو کیا گیا ہے جواس بارے میں ہے کہ آپ الفاظ کو کس طرح پڑھتےہیں، پراسس کرتےہیں اوران کے مفہوم کوسمجھتےہیں۔ ہم آپ سے درخواست کرتے ہیں کہ آپ اس تحقیق میں شمولیت کے لیئے اپنی رضامندی دینے سے پہلے اس فارم کوبغورپڑھیں اورجو سوال آپ کے ذھن میں آئے پوچھ لیں۔\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eیہ تحقیق ڈاکٹرایرن بکا نن کر رہی ہیں جوسائنس اینڈ ٹیکنالوجی یونیورسٹی آف ہریزبرگ میں تجزیاتی وقوف کی پروفیسر ہیں۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eشرکت کنندہ کے پس منظر کے بارے میں معلومات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    اس تحقیق میں الفاظ سے متعلق نظریات کے بارے میں آپ کو مختلف طرح کے سوالات کا جوابات دینے کے ليئے کہا جائے گا۔ مثال کے طورپر، کسی لفظ سے ما نوسیت کی درجہ بندی کا پوچھا جائےگا یا یہ پوچھا جائےگا کہ الفاظ کی یہ لڑی حقیقی الفاظ پرمشتمل ہےیا نہیں۔  \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eطریقہ کار\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n   اس تحقیق میں آپ کی شمولیت کی بورڈ والےایک ڈیسک ٹاپ کمپیوٹر یا لیپ ٹاپ کے ذریعے مکمل طور پر آن لائن ہوگی۔  ہرشرکت کنندہ کے لیئے تحقیق کے مختلف تجربات میں سے ایک بغیر کسی ترتیب کے منتحب کیا جائےگا اور اسی کو کرنے کے بارے میں اسے ہدایات دی جائيں گی۔ تجربہ مکمل کر لینے کے بعد آپ چاہیں تو تحقیق کے اغراض و مقاصد کے بارے میں مزید جان سکتے ہیں۔ تحقیق کا سارا عمل تقریبا آدھے گھنٹے سے کم وقت میں مکمل ہوجائے گا۔  \u003C\u002Fp\u003E\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eتحقیق میں شمولیت کےفوائد اورممکنہ خطرات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    آپ سے کسی طرح کی کوئی شناختی معلومات نہیں لی جائیں گی لہذا آپ کے تمام جوابات پوری طرح گمنام رہیں گے۔ یہ تجربہ ایک آن لائن گیم کی طرح ہے اوردیا گیا ٹاسک بوریت اورتھکاوٹ کا سبب بن سکتا ہے۔ \n    \u003Cbr \u002F\u003E\n    اس تحقیق میں شمولیت کا کوئی براہ راست فائدہ نہیں ہے۔ البتہ آپ کے جوابات لسانیات اور وقوفی یاداشت سے متعلقہ عوامل کو سمجھنے میں مددگارہو سکتے ہیں۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eمعاوضہ\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003Eآپ کے مقامی تحقیق کرنے والے ہوسکتا ہے کہ آپ کواس شمولیت کا کچھ معاوضہ ادا کریں ۔  \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003E رازداری اور ڈیٹا کی شراکت داری\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    اس بات کو یقینی بنایا گیا ہے کہ آپ کی دی ہوئی تمام ترمعلومات ہرطرح سے گمنام رہیں۔ اس پراجیکٹ سے حاصل ہونے والے ڈیٹا کی دیگرتحقیق کاروں کے استعمال اور فائدے کے لیئےعام تشہیر کی جائےگی تاہم کسی بھی طرح سے اس کا تعلق براہ راست آپ کی ذات سے نہیں ہوگا۔ آپ کا نام یا کوئی شناختی معلومات اس ڈیٹا سیٹ میں درج نہیں کی جائیں گی اور تحریری یا زبانی رپورٹ میں بھی کوئی ایسا حوالہ نہیں دیا جائے گا کہ جس سے آپ کا اس تحقیق سے کوئی تعلق ظاہر ہو۔ اس تحقیق کی اشاعت میں بھی تمام معلومات اس طرح سےدی جائیں گی کہ کسی شرکت کرنے والے کی شناخت ممکن نہ ہوسکے۔ \n    \u003Cbr \u002F\u003E\n    تحقیق کرنے والی ٹیم کےعلاوہ کسی سےبھی ڈیٹا شیئرکرنے سے پہلےہرطرح کی ممکنہ شناختی معلومات کو مکمل طور پرمٹا دیا جائے گا۔ یہ بےنام و بے شناخت ڈ یٹا ہوسکتا ہے کہ مستقبل میں اس موضوع یا کسی اور موضوع پر تحقیق کے لئیےیہ ٹیم ہی استعمال کرے یا اسےدیگرتحقیق کرنے والوں کےساتھ بھی شیئرکیا جائے۔ ہوسکتا ہے کہ ڈیٹا کےکسی آن لائن مخزن جیسا کہ اوپن سائنس فریم ورک (آن لائن ڈیٹا کے لیئےبلا معاوضہ مخزن جو صرف رجسٹریشن سےقابل رسائی ہوجاتا ہے) پر بھی دوسرے تحقیق کاروں یا د لچسپی رکھنے والوں کومزید تجزیہ اورتحقیق کے لیئے اس بے نام وبے شناخت ڈیٹا تک رسائی فراہم کی جائے۔ \n    \u003Cbr \u002F\u003E\n    برائے مہربانی نوٹ کرلیں کہ آپ کا ڈیٹا ہرطرح سے بالکل بےنام و بے شناخت ہوگاجس کا مطلب یہ بھی ہے کہ تحقیق مکمل کرنے کے بعد آپ اسے ہٹانے کے لیئے نہیں کہ سکیں گے۔ \n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eتحقیق میں رضاکارانہ شمولیت\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    اس تحقیق میں آپ کی شرکت صرف رضاکارانہ ہے۔ آپ کا تحقیق میں شرکت کرنے یا نہ کرنے کا فیصلہ کسی طرح بھی ہیرزبرگ یونیورسٹی یا مقامی ریسرچر کے ساتھ آپ کےتعلقات پراثرانداز نہیں ہوگا۔ اگرآپ تحقیق میں شمولیت کا فیصلہ کرتے ہیں تو پھر بھی آپ کسی سوال کا جواب نہ دینے یا کسی بھی وقت تحقیق سے دست بردار ہونے کے لیئے پوری طرح آزاد ہیں اور یہ فیصلہ بھی ہیرزبرگ یونیورسٹی یا مقامی ریسرچر کے ساتھ آپ کےتعلقات پراثرانداز نہیں ہوگا۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eرابطہ اور سوالات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    اس تحقیق میں ڈاکٹر ایرن بکانن کے ساتھ سائیکولوجیکل سائنس ایکسیلیریٹرز بھی شراکت دار ہیں۔ آپ چاہیں تواپنے سوالات ابھی یا بعد میں پوچھ سکتے ہیں۔ آپ چاہیں تو اس ای میل پر ڈاکٹر ایرن بکانن سے رابطہ کرسکتے ہیں۔ ebuchanan@harrisburgu.edu \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eسوالات یا خدشات\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    ہیرزبرگ یونیورسٹی کی ادارتی نظرثانی مجلس نے اس تحقیق کا تنقیدی جائزہ لینے کے بعد یہ فیصلہ دیا ہےکہ یونیورسٹی کی حکمت عملی اور ریاست اور وفاق کے قوانین میں موجود تحقیق میں شامل افراد کی حفاظت کی شرائط پرہر طرح سے یہ تحقیق پورا اترتی ہے۔  \n\n    \u003Cp class=\"text-right\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002F34692\u002Fdownload\"\u003E آپ چاہیں تواپنے ریکارڈ کے لیئے ان معلومات کی ایک نقل طلب کرسکتے ہیں۔ \u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  اگرآپ اس تحقیق میں شمولیت کے لیئے رضامند ہیں توبرائے مہربانی \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کو دبا کرکام جاری رکھیں۔\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-right\"\u003Eبرائےمہربانی ہمیں اپنے بارے میں کچھ بتائیں۔\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eبرائے مہربانی ہمیں اپنی جنس کے بارے میں بتائیں: ۔\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-right\"\u003E\n                    مرد\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-right\"\u003E\n                    ،عورت\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-right\"\u003E\n                    کوئی اور\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value= \"notsay\" \n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-right\"\u003E\n                    نہ بتانا مناسب ہے\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eآپ کا سن‏ پیدائش کیا ہے؟ برائے مہربانی چار ہندسوں پر مشتمل سال کا اندراج کریں-\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eبرائے مہربانی ہمیں اپنی حاصل کردہ تعلیم کے بارے میں بتا ئیں: \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-right\"\u003E\n                  میٹرک سےکم\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-right\"\u003E\n                  میٹرک\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-right\"\u003E\n                  ایسوسی ایٹ ڈگری یا دو سالہ ڈگری\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-right\"\u003E\n                  بیچلر ڈگری یا چار سالہ ڈگری\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-right\"\u003E\n                  ماسٹر ڈگری یا اس کے مساوی\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-right\"\u003E\n                  ڈاکٹریٹ کی ڈگری یا اس کے مساوی\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eآپ کی مادری زبان کون سی ہے؟ \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-right\"\u003E\u003Cb\u003Eکیا آپ بنیادی طور پردایاں ہاتھ استعمال کرتے ہیں یا بایاں؟\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-right\"\u003E\n                  بایاں ہاتھ\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-right\"\u003E\n                  دایاں ہاتھ\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      جاری رہے →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003Eہدایات\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-right\"\u003Eیہ تجربہ اس بات سے متعلق ہے کہ لوگ کس طرح الفاظ کو پراسس کرتے ہیں- آپ کوکہا جائے گا کہ الفاظ کو دیکھیں اورانھیں پرکھیں۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eیہ الفاظ آپ کی کمپیوٹر سکرین کے عین درمیان میں نمودار ہوں گے۔ آپ کواپنے آپ سے سوال کرنا ہے کہ کیا دکھایا جانے والا لفظ ایک حقیقی لفظ ہے یا مہمل (بناوٹی) لفظ ہے۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاگرآپ سکرین پرموجود لفظ جیسا کہ \u003Cb\u003E ٹھنڈا \u003C\u002Fb\u003E کو پہچان لیں توکی بورڈ پرحقیقی لفظ کے لیئے بتایا گیا\u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  بٹن دبائیں۔ اگروہ لفظ بناوٹی اوربےمعنی ہے جیسا کہ \u003Cb\u003E وڈ ڈا \u003C\u002Fb\u003Eتو برائے مہربانی کی بورڈ پرمہمل الفاظ کے لیئےمختص کیا گیا\u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E بٹن دبائیں۔ تجربہ شروع کرنےسے پہلے آپ کو اس کی مشق کروائی جائے گی اورمشق کے دوران ہم آپ کی رہنمائی بھی کریں گے۔\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eہم چاہیں گے کہ آپ ہرجواب جلد ازجلد دیں اورصحیح جواب دینے کی پوری کوشش کریں۔ آپ کوہرلفظ کے بارےمیں اپنا ردعمل یا جواب دینے کے لئیے تین سیکنڈ کا وقت دیا جائے گا۔ \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003Eمشق کے لیئے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E دبائیں \u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  برائے مہربانی حقیقی لفظ کے لیئے مختص کردہ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  بٹن دبائيں اور مہمل یا بناوٹی لفظ کے لیئے مختص کردہ \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E بٹن دبائيں \n\u003C\u002Ffooter\u003E",
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
  ? '!برائے مہربانی تیزی سے جواب دیں'
  : (
    this.state.correct
      ? '!صحیح'
      : '!غلط'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eہدایات\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eبہت اعلی! یادرکھیں کہ آپ کو ایک بٹن \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔ \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eاب آپ یہ ٹاسک پوراکریں گے۔ یاد رکھیں جتنی تیزی سے ممکن ہو درست جواب دیں۔ اس حصے میں آپ کو کسی طرح کی رہنمائی نہیں دی جائے گی۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  برائےمہربانی شروع کرنےکے لئیے\u003Ckbd\u003Eسپیس بار \u003C\u002Fkbd\u003E کا بٹن دبائیں۔\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں  \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں- \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں- \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں- \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں- \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں- \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eوقفہ\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبرائے مہربانی ایک شارٹ بریک لےلیں۔ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eیادرکھیں کہ آپ کو ایک بٹن   \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003Eحقیقی الفاظ کے لیئےاستعمال کرنا ہے اوردوسرا بٹن \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E مہمل الفاظ کے لیئے۔\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"text-right\"\u003E\n   برائے مہربانی شروع کرنے کے لئیے \u003Ckbd\u003Eسپیس بار\u003C\u002Fkbd\u003E کا بٹن دبائیں یا اس پیج کےغائب ہونےتک انتظار کریں۔ \n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  اگراوپردیا گیا لفظ حقیقی لفظ ہے تو برائے مہربانی  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  دبائیں اوراگروہ لفظ بناوٹی یا مہمل ہے تو \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E دبائیں\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003E!ہم آپ کے شکرگزارہیں\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-right\"\u003Eاب آپ نےیہ تجربہ مکمل کرلیا \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-right\"\u003Eبطورشرکت کنندہ آپ کا نمبر ${ window.uuid }ہے- آپ چاہیں توتجربہ کرنےوالےکویہ نمبر دکھا سکتے ہیں کہ آپ نے تجربہ مکمل کرلیا ہے-  \n      \u003C\u002Fp\u003E\n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  اب آپ ونڈو کو بند کر سکتے ہیں۔\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()