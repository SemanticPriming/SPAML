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
      "messageHandlers": {},
      "title": "Consent Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ECONSENT FORM\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003EUnderstanding Word Processing and Meaning\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-left\"\u003EYou are invited to be in a research study about how you read and process words, along with their meaning. We ask that you read this form and ask any questions you may have before agreeing to be in the study.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EThis study is being conducted by Dr. Erin M. Buchanan, Professor of Cognitive Analytics at Harrisburg University of Science and Technology.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EBackground Information:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    In this study, you will be asked to complete different questions about word concepts. For example, you may be asked to define a word’s characteristics, rate how familiar you are with a word, or simply judge if a string of letters is a real word. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EProcedures:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    You will take this study entirely online from a desktop or laptop computer with a keyboard. You will be given instructions about the experiment sections which are randomly selected for each person. After you complete the experiment, you can learn more about the study and goals of the research. The entire study should take less than thirty minutes to complete. \u003C\u002Fp\u003E\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003ERisks and Benefits of being in the Study:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    No identifying information will be collected from you, and therefore, your responses should be anonymous. The current study is similar to an online game, which may cause some fatigue or boredom based on the task you are asked to complete.\n    \u003Cbr \u002F\u003E\n    There is no direct benefit to you for participating in this study. However, your responses will contribute to our understanding of language and cognitive memory processes.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003ECompensation:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003EYou may be compensated when taking part in this study through your local researcher. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EConfidentiality and Data Sharing:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Measures are taken to ensure that all information you provide will be anonymous. The data from this project will be posted publicly for other researchers to use; however, no data will be directly linked to you. Your name or other identifying information will not be entered into the dataset and no references will be made in verbal or written reports that could link you to the study. In any publication, information will be provided in such a way that you cannot be identified.\n    \u003Cbr \u002F\u003E\n    Before your data are shared outside the research team, any potentially identifying information will be removed. The anonymous data may be used by the research team or shared with other researchers, for both related and unrelated research purposes in the future. Your anonymous data may also be made available in online data repositories such as the Open Science Framework (which are free data repositories that require registration to have access), which allow other researchers and interested parties to access the data for further analysis.\n    \u003Cbr \u002F\u003E\n    Please note that your data will be anonymous, which means you cannot ask for it to be removed once you have completed the study.\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EVoluntary Nature of the Study:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Participation in this study is voluntary: Your decision whether to participate will not affect your current or future relations with Harrisburg University of Science and Technology or your local institution. If you decide to participate, you are free to not answer any question or withdraw at any time without affecting those relationships. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EContacts and Questions:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    The researchers conducting this study are Dr. Erin M. Buchanan in partnership with the Psychological Science Accelerator. You may ask any questions you have now. If you have questions later, you are encouraged to contact Dr. Erin M. Buchanan at ebuchanan@harrisburgu.edu. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EQuestions or Concerns:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    This study has been reviewed by Harrisburg University of Science and Technology’s Institutional Review Board (IRB).  The IRB has determined that this study fulfills the human research subject protections obligations required by state and federal law and University policies. \n\n    \u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Ff47z9\u002Fdownload\"\u003E A copy of this information to keep for your records will be provided upon request.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to consent to the study and continue.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n\n      \u003Ch3 class=\"text-left\"\u003EPlease tell us a little about yourself:\u003C\u002Fh3\u003E\n    \n      \u003Cp class=\"text-left\"\u003E\u003Cb\u003EPlease tell us your gender:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-gender\"\n                  value=\"male\"\n                  id=\"please-tell-us-your-gender-male\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-left\"\u003E\n                  Male\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-gender\"\n                  value=\"female\"\n                  id=\"please-tell-us-your-gender-female\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-left\"\u003E\n                  Female\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-gender\"\n                  value=\"other\"\n                  id=\"please-tell-us-your-gender-other\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-left\"\u003E\n                  Other\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-gender\"\n                  value=\"notsay\"\n                  id=\"please-tell-us-your-gender-notsay\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-left\"\u003E\n                  Prefer not to say\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n\n      \u003Cp class=\"text-left\"\u003E\u003Cb\u003EWhich year were you born? Please enter a four-digit year:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n      \u003Cinput\n        name=\"which-year-were-you-born\"\n        style=\"width: 50%;\"\n        type=\"number\"\n        min=\"1920\"\n        max=\"2010\"\n        class=\"content-horizontal-left\"\n      \u002F\u003E\n\n      \u003Cp class=\"text-left\"\u003E\u003Cb\u003EPlease tell us your education level:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n      \u003Ctable class=\"table-plain page-item-table\"\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n          \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n        \u003C\u002Fcolgroup\u003E\n        \u003Ctbody\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"less than high school\"\n                id=\"please-tell-us-your-education-level-less than high school\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel\n                for=\"please-tell-us-your-education-level-less than high school\" class=\"text-left\"\u003E\n                Less than High School\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"high school\"\n                id=\"please-tell-us-your-education-level-high school\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-left\"\u003E\n                High School\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"high school\"\n                id=\"please-tell-us-your-education-level-associates\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-left\"\u003E\n                Associate's Degree or Two-Year Degree\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"college\"\n                id=\"please-tell-us-your-education-level-college\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-left\"\u003E\n                Bachelor's Degree or Four-Year Degree\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"master\"\n                id=\"please-tell-us-your-education-level-master\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-left\"\u003E\n                Master's Degree or Equivalent\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"doctorate\"\n                id=\"please-tell-us-your-education-level-doctorate\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-left\"\u003E\n                Doctoral Degree or Equivalent\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        \u003C\u002Ftbody\u003E\n      \u003C\u002Ftable\u003E\n\n      \u003Cp class=\"text-left\"\u003E\u003Cb\u003EWhat language is your native (first) language?\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n      \u003Cinput\n        name=\"native-language\"\n        style=\"width: 50%;\"\n        type=\"text\"\n        class=\"content-horizontal-left\"\n      \u002F\u003E\n\n    \u003C\u002Fform\u003E\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n    Continue →\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "click #language": "language"
      },
      "messageHandlers": {},
      "title": "Demographics Form"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EThis experiment is concerned with how people process words. You will be asked to view words and judge them.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EThe words will be presented in the middle of the screen. You should ask yourself if the word on the screen is a real word or a fake word.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EIf you recognize the word on the screen like \u003Cb\u003ECOLD\u003C\u002Fb\u003E, please press the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word. If the word is made-up nonsense, like \u003Cb\u003EWERM\u003C\u002Fb\u003E, please press \u003Ckbd\u003E?\u003C\u002Fkbd\u003E for fake word. During practice, we will give you feedback.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EWe'd like to ask to to respond as quickly as you can while remaining accurate. You have five seconds to respond to every word\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to try a few for practice.\n\u003C\u002Ffooter\u003E",
      "plugins": []
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Task Frame Practice",
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Practice",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
  ? 'Please answer faster!'
  : (
    this.state.correct
      ? 'Correct!'
      : 'Incorrect!'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EGreat job! Remember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EYou will now complete the real task, remember to go as quickly as possible while getting the correct answer. You will not see any feedback during this section.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 1",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real1.json": "embedded\u002F3cee33bcfe0a7bdac59ec1374ca41a4ea7fe6e772c9b0ab0770f0d1f5cb09e41.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBreak\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETake a short break.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ERemember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue or wait until this page disappears.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 2",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real2.json": "embedded\u002Fae2c5987efa101760004c66c0da975c7dd75605ada53cabf75ec439ce68a5871.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBreak\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETake a short break.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ERemember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue or wait until this page disappears.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 3",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real3.json": "embedded\u002F3a95e1234833448efe1e098102f00e2f4bb85d6edd8b6a093f62a93d4dcf4f4e.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBreak\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETake a short break.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ERemember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue or wait until this page disappears.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 4",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real4.json": "embedded\u002F994ac7a5038c8713adb715e04d6639acda5d02a40abdb81d59c0d39dfea6cf06.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBreak\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETake a short break.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ERemember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue or wait until this page disappears.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 5",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real5.json": "embedded\u002F9febe5343449a1c79d42f597f494397c595dd944600a7908e38167bbb18234ee.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBreak\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETake a short break.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ERemember you should use the \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press the \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E to continue or wait until this page disappears.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EZ\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003E\u002F\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Real Frame Task 6",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english_real6.json": "embedded\u002Fcd99c6e5b4b714268551fce4fc08729821a7bdb4a6f2294152b2e0d5e4ddfb99.json"
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
                "keypress(z)": "word",
                "keypress(\u002F)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000",
              "correctResponse": "${ this.parameters.class }"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003EThank you!\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EYou've now completed the experiment.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EYour random participant id is: \n      ${ this.random.uuid4() }. You can use this number to give to your experimenter to show you completed the experiment. \n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  You may now close the window.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()