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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eอกสารยินยอมการเข้าร่วมการวิจัย\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003Eขอบคุณที่สนใจเข้าร่วมงานวิจัยในครั้งนี้ กรุณาอ่านข้อมูลต่อไปนี้โดยละเอียด\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-left\"\u003Eคุณได้รับเชิญให้เข้าร่วมงานวิจัยที่ศึกษาเกี่ยวกับวิธีการอ่านและการประมวลคำศัพท์ภาษาไทยของคุณ รวมไปถึงความหมายของคำศัพท์เหล่านั้น กรุณาอ่านแบบฟอร์มนี้และหากมีข้อสงสัยสามารถสอบถามผู้ดำเนินงานวิจัย ก่อนที่คุณจะตกลงเข้าร่วมงานวิจัยในครั้งนี้\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EThis study is being conducted by Dr. Erin M. Buchanan, Professor of Cognitive Analytics at Harrisburg University of Science and Technology.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eข้อมูลเกี่ยวกับงานวิจัย:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    ในการวิจัยนี้ คุณจะต้องตอบคำถามต่างๆ เกี่ยวกับคอนเซปของคำศัพท์ภาษาไทย ตัวอย่างเช่น คุณอาจถูกถามให้ระบุคุณลักษณะของคำศัพท์ หรือ ประเมินความคุ้นเคยของคุณต่อคำศัพท์นั้น หรือ ตัดสินว่าการเรียงของตัวอักษรนั้นเป็นคำศัพท์ที่มีอยู่จริงหรือไม่\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eกระบวนการ:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    คุณจะเข้าร่วมการวิจัยครั้งนี้แบบออนไลน์โดยการใช้คอมพิวเตอร์แบบตั้งโต๊ะหรือโน้ตบุ๊กที่มีแป้นพิมพ์ คุณจะได้รับคำแนะนำเกี่ยวกับการทดสอบชุดต่างๆ ซึ่งจะถูกมอบหมายให้ผู้เข้าร่วมงานวิจัยแต่ละคนแบบสุ่ม หลังจากคุณทำการทดลองเสร็จแล้ว คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับการศึกษาและเป้าหมายของการทำวิจัยในครั้งนี้ได้ กระบวนการทั้งหมดใช้เวลาไม่เกิน 30 นาที \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eความเสี่ยงและประโยชน์ของการเข้าร่วมการวิจัย:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    ไม่มีการเก็บข้อมูลส่วนบุคคลใดๆ จากผู้เข้าร่วมงานวิจัย และคำตอบของคุณจะเป็นแบบนิรนาม ไม่มีการระบุตัวตน การวิจัยในครั้งนี้คล้ายคลึงกับเกมออนไลน์ซึ่งอาจทำให้ผู้เข้าร่วมงานวิจัยรู้สึกเหนื่อยล้าและเบื่อหน่ายบ้างขึ้นอยู่กับชุดคำถามที่คุณได้รับมอบหมาย\n    \u003Cbr \u002F\u003E\n    ไม่มีประโยชน์ทางตรงที่ผู้เข้าร่วมการวิจัยจะได้รับจากการเข้าร่วมในครั้งนี้ แต่คำตอบของคุณจะมีส่วนช่วยให้เกิดความเข้าใจเกี่ยวกับภาษาและกระบวนการจดจำทางปัญญา\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eค่าตอบแทน:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003Eผู้เข้าร่วมการวิจัยทุกคนที่ทำการทดลองเสร็จจะได้ร่วมลุ้นจับรางวัล โดยมีโอกาส 1 ใน 4 ที่จะเป็นผู้ชนะได้รับรางวัลบัตรกำนัล (มูลค่า 200 บาท) จากการเข้าร่วมงานวิจัย\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eการรักษาความลับและการแบ่งปันข้อมูล:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    มีการใช้มาตรการเพื่อให้แน่ใจว่าข้อมูลทั้งหมดที่คุณให้จะไม่มีการระบุตัวตน ข้อมูลจากโครงการนี้จะถูกเผยแพร่สู่สาธารณะเพื่อให้นักวิจัยคนอื่น ๆ นำไปใช้ได้ อย่างไรก็ตาม จะไม่มีข้อมูลใดที่เชื่อมโยงกับคุณโดยตรง ชื่อของคุณหรือข้อมูลที่ระบุตัวตนอื่น ๆ จะไม่ถูกใส่ลงในชุดข้อมูล และจะไม่มีการอ้างอิงใด ๆ ในรายงานด้วยวาจาหรือเป็นลายลักษณ์อักษรที่สามารถเชื่อมโยงคุณไปยังการศึกษานี้ได้ ในการตีพิมพ์ใด ๆ ข้อมูลจะถูกนำเสนอในลักษณะที่ไม่สามารถระบุตัวตนของคุณได้\n    \u003Cbr \u002F\u003E\nก่อนที่ข้อมูลของคุณจะถูกแบ่งปันสู่ภายนอกทีมวิจัย ข้อมูลใดๆ ที่อาจระบุตัวตนได้จะถูกลบออก ข้อมูลที่ไม่ระบุตัวตนนี้อาจถูกใช้โดยทีมวิจัยหรือแบ่งปันกับนักวิจัยคนอื่นๆ เพื่อวัตถุประสงค์ในการวิจัยทั้งที่เกี่ยวข้องและไม่เกี่ยวข้องในอนาคต ข้อมูลที่ไม่ระบุตัวตนของคุณอาจมีอยู่ในพื้นที่เก็บข้อมูลออนไลน์ เช่น Open Science Framework (ซึ่งเป็นที่เก็บข้อมูลฟรีที่ต้องลงทะเบียนเพื่อเข้าถึง) ซึ่งอนุญาตให้นักวิจัยและบุคคลที่สนใจอื่น ๆ สามารถเข้าถึงข้อมูลเพื่อนำไปใช้ในการวิเคราะห์เพิ่มเติมได้ในอนาคต\n\n    \u003Cbr \u002F\u003E\n    โปรดทราบว่าข้อมูลของคุณจะไม่มีการระบุชื่อ ดังนั้นคุณจะไม่สามารถขอให้ลบข้อมูลได้หลังจากที่คุณได้ทำการทดลองเสร็จแล้ว\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eลักษณะความสมัครใจของการวิจัย:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    การเข้าร่วมงานวิจัยในครั้งนี้เป็นไปโดยความสมัครใจ:\nการตัดสินใจของคุณว่าจะเข้าร่วมหรือไม่นั้นจะไม่ส่งผลกระทบต่อความสัมพันธ์ในปัจจุบันหรืออนาคตของคุณกับมหาวิทยาลัยธรรมศาสตร์ คุณตัดสินใจเข้าร่วม คุณมีอิสระที่จะไม่ตอบคำถามใดๆ หรือถอนตัวได้ตลอดเวลาโดยไม่กระทบต่อความสัมพันธ์ใดๆ เหล่านี้\n \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eการติดต่อสอบถาม:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    นักวิจัยที่ดำเนินงานวิจัยในครั้งนี้ คือ ดร. เบนจามิน คลาร์ก ในความร่วมมือกับเครือข่าย Psychological Science Accelerator โดยมี Dr. Erin Buchanan เป็นหัวหน้าโครงการ หากมีข้อสงสัย คุณสามารถสอบถามได้ตอนนี้ หรือ ในภายหลัง โดยสามารถติดต่อ  คือ ดร. เบนจามิน คลาร์ก ได้ที่อีเมล benjamin.c@arts.tu.ac.th\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eข้อสงสัยหรือข้อกังวล:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    งานวิจัยนี้ได้รับการอนุมัติด้านจริยธรรมจากคณะอนุกรรมการพิจารณาจริยธรรมการวิจัยในมนุษย์ของมหาวิทยาลัยธรรมศาสตร์ (เลขที่ใบอนุญาต 024\u002F2566) หากคุณมีข้อกังวลเกี่ยวกับการดำเนินการวิจัยนี้ คุณสามารถติดต่อคณะอนุกรรมการพิจารณาจริยธรรมการวิจัยในมนุษย์ของมหาวิทยาลัยธรรมศาสตร์ หรือผู้แทนได้ที่สำนักงานคณะอนุกรรมการพิจารณาจริยธรรมการวิจัยในมนุษย์ มหาวิทยาลัยธรรมศาสตร์ งานวางแผนและบริหารการวิจัย อาคารสำนักงานอธิการบดี ชั้น 3 โทรศัพท์\u002Fโทรสาร: 0-2564-4440-79 ต่อ 1804\n\n    \u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Fez3pv\u002Fdownload\"\u003E สำเนาของเอกสารชุดนี้จะถูกจัดส่งให้ตามคำขอ หากท่านต้องการเก็บไว้เพื่อเป็นหลักฐาน \u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  กรุณากด \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E เพื่อแสดงความยินยอมในการเข้าร่วมการวิจัย และ ดำเนินการต่อ\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-left\"\u003Eโปรดบอกเราเล็กน้อยเกี่ยวกับตัวคุณ:\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eโปรดระบุเพศของคุณ:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-left\"\u003E\n                    ชาย\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-left\"\u003E\n                    หญิง\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-left\"\u003E\n                    อื่นๆ\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-left\"\u003E\n                    หรือ ไม่ประสงค์ที่จะระบุ\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eคุณเกิดปีอะไร กรุณาระบุเป็นเลขปีสี่หลัก:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eโปรดระบุระดับการศึกษาของคุณ:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-left\"\u003E\n                  ต่ำกว่ามัธยมศึกษา\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-left\"\u003E\n                  มัธยมศึกษา\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-left\"\u003E\n                  อนุปริญญา\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-left\"\u003E\n                  ปริญญาตรี\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-left\"\u003E\n                  ปริญญาโท\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-left\"\u003E\n                  ปริญญาเอก\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eภาษาแม่ของคุณ (ภาษาแรก) คือภาษาอะไร \nกรุณาให้ข้อมูลเกี่ยวกับตัวคุณ\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003Eคุณถนัดซ้ายหรือถนัดขวาเป็นหลัก (ต้องตอบเพื่อดำเนินการต่อ)\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-left\"\u003E\n                  ถนัดซ้าย\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-left\"\u003E\n                  มือขวา\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      สืบสาน →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
  window.word_key = 'z'
  window.nonword_key = 'm'
} else if(this.state.dominanthand == "right") {
  window.word_key = 'm'
  window.nonword_key = 'z'
}
}
      },
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003Eคำแนะนำ\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003Eการทดลองนี้เกี่ยวข้องกับการศึกษาวิธีที่ผู้คนประมวลผลคำศัพท์ คุณจะได้รับมอบหมายให้พิจารณาคำศัพท์ต่างๆ และตัดสินคำเหล่านั้น. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003Eโดยคำศัพท์จะปรากฎอยู่ตรงกลางหน้าจอ คุณควรประเมินด้วยตนเองว่าคำศัพท์บนหน้าจอเป็นคำศัพท์จริงหรือคำศัพท์ปลอม.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003Eหากคุณรู้จักคำศัพท์บนหน้าจอเช่น COLD โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์จริง หากคำศัพท์นั้นไม่มีความหมาย เช่น WERM โปรดกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003Eทั้งนี้ระหว่างการฝึกฝนก่อนเริ่มการทดลองจริง เราจะแจ้งผลของการฝึกฝนให้คุณทราบ เราอยากให้คุณประเมินคำศัพท์โดยเร็วที่สุดและมีความถูกต้องแม่นยำด้วย คุณมีเวลาสามวินาทีในการประเมินแต่ละคำ\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  โปรดกดแป้น \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เพื่อลองทำการฝึกฝน\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
  ? 'กรุณาตอบเร็วขึ้น!'
  : (
    this.state.correct
      ? 'ถูกต้อง!'
      : 'ไม่ถูกต้อง!'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eคำแนะนำ\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eเยี่ยมมาก! โปรดจำไว้ว่าคุณควรใช้แป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และแป้น \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม ตอนนี้คุณจะได้ทำการทดลองจริง \n    \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003Eอย่าลืมว่าคุณต้องประเมินคำศัพท์โดยเร็วที่สุดและให้คำตอบที่ถูกต้องด้วย คุณจะไม่เห็นผลการทดสอบใดๆ ระหว่างทำการทดลองในส่วนนี้ \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  โปรดกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เพื่อดำเนินการต่อ \n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003Eหยุดพัก\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003Eกรุณาพักสักครู่บนหน้าจอนี้ \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eโปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  คุณสามารถกด \u003Ckbd\u003ESPACE BAR\u003C\u002Fkbd\u003E เมื่อคุณพร้อมที่จะดำเนินการต่อ\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n    โปรดกดแป้น \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E  สำหรับคำศัพท์จริง และกดแป้น \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E สำหรับคำศัพท์ปลอม \n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003Eขอบคุณ\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003Eกรุณาจดรหัสจบการทดลองที่เห็นด้านล่าง คุณจะต้องใช้รหัสนี้ในการตอบคำถามหลังเข้าร่วมงานวิจัยเพื่อจบการเข้าร่วมงานวิจัยนี้ รหัสจบการทดลองของคุณคือ: th-tu-spaml-${ window.uuid }.\n\n      \u003Ca href=\"https:\u002F\u002Fforms.gle\u002Fxiitb9yCziES7TGd6\"\u003Ehttps:\u002F\u002Fforms.gle\u002Fxiitb9yCziES7TGd6\u003C\u002Fa\u003E\n\n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  ตอนนี้คุณสามารถปิดหน้าต่างได้แล้ว\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()