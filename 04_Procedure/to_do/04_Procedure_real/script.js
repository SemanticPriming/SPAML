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
    "description": "An example demo for a PSA study proposal.",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-100 w-m\"\u003E\n    \u003Ch2\u003EConsent Form\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EThis experiment is concerned with how people process words. You will be asked to view words and judge them.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EThis page would contain the real consent form with all instructions, a link to download the consent form, and other required information.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to consent to the study and continue.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\n  class=\"\n      content-horizontal-center\n      content-vertical-center\n    \"\n\u003E\n  \u003Cdiv class=\"w-100 w-m text-left\"\u003E\n    \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n      \u003Cdiv class=\"page-item page-item-text\"\u003E\n        \u003Ch3\u003EPlease tell us a little about yourself\u003C\u002Fh3\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cp class=\"font-weight-bold\" style=\"margin: 1rem 0 0.25rem\"\u003E\n        Please tell us your gender:\n      \u003C\u002Fp\u003E\n      \u003Cp class=\"small text-muted hide-if-empty\" style=\"margin: 0.25rem 0\"\u003E\u003C\u002Fp\u003E\n      \u003Ctable class=\"table-plain page-item-table\"\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n          \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n        \u003C\u002Fcolgroup\u003E\n        \u003Ctbody\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-gender\"\n                value=\"male\"\n                id=\"please-tell-us-your-gender-male\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-gender-male\"\u003E\n                Male\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-gender\"\n                value=\"female\"\n                id=\"please-tell-us-your-gender-female\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-gender-female\"\u003E\n                Female\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-gender\"\n                value=\"other\"\n                id=\"please-tell-us-your-gender-other\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-gender-other\"\u003E\n                Other\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-gender\"\n                value=\"notsay\"\n                id=\"please-tell-us-your-gender-notsay\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-gender-notsay\"\u003E\n                Prefer not to say\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        \u003C\u002Ftbody\u003E\n      \u003C\u002Ftable\u003E\n      \u003Cp class=\"font-weight-bold\" style=\"margin: 1rem 0 0.25rem\"\u003E\n        Which year were you born?\n      \u003C\u002Fp\u003E\n      \u003Cp class=\"small text-muted hide-if-empty\" style=\"margin: 0.25rem 0\"\u003E\n        Please enter a four-digit year:\n      \u003C\u002Fp\u003E\n      \u003Cinput\n        name=\"which-year-were-you-born\"\n        class=\"w-100\"\n        type=\"number\"\n        min=\"1920\"\n        max=\"2010\"\n      \u002F\u003E\n      \u003Cp class=\"font-weight-bold\" style=\"margin: 1rem 0 0.25rem\"\u003E\n        Please tell us your education level:\n      \u003C\u002Fp\u003E\n      \u003Cp class=\"small text-muted hide-if-empty\" style=\"margin: 0.25rem 0\"\u003E\u003C\u002Fp\u003E\n      \u003Ctable class=\"table-plain page-item-table\"\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n          \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n        \u003C\u002Fcolgroup\u003E\n        \u003Ctbody\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"none\"\n                id=\"please-tell-us-your-education-level-none\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-none\"\u003E\n                None\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"elementary school\"\n                id=\"please-tell-us-your-education-level-elementary school\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel\n                for=\"please-tell-us-your-education-level-elementary school\"\n              \u003E\n                Elementary School\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"high school\"\n                id=\"please-tell-us-your-education-level-high school\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-high school\"\u003E\n                High School\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"college\"\n                id=\"please-tell-us-your-education-level-college\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-college\"\u003E\n                College, Bachelor's degree or equivalent\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"master\"\n                id=\"please-tell-us-your-education-level-master\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-master\"\u003E\n                Master's degree or equivalent\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"please-tell-us-your-education-level\"\n                value=\"doctorate\"\n                id=\"please-tell-us-your-education-level-doctorate\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel for=\"please-tell-us-your-education-level-doctorate\"\u003E\n                Doctorate\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        \u003C\u002Ftbody\u003E\n      \u003C\u002Ftable\u003E\n      \u003Cp class=\"font-weight-bold\" style=\"margin: 1rem 0 0.25rem\"\u003E\n        What language is your native (first) language?\n      \u003C\u002Fp\u003E\n      \u003Cp class=\"small text-muted hide-if-empty\" style=\"margin: 0.25rem 0\"\u003E\u003C\u002Fp\u003E\n      \u003Ctable class=\"table-plain page-item-table\"\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n          \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n        \u003C\u002Fcolgroup\u003E\n        \u003Ctbody\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"language\"\n                value=\"english\"\n                id=\"language-english\"\n                required=\"\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel\n                for=\"language-english\"\n              \u003E\n                English\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Ctd\u003E\n              \u003Cinput\n                type=\"radio\"\n                name=\"language\"\n                value=\"dutch\"\n                id=\"language-dutch\"\n                required=\"\"\n              \u002F\u003E\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Clabel\n                for=\"language-dutch\"\n              \u003E\n                Dutch\n              \u003C\u002Flabel\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        \u003C\u002Ftbody\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\n  class=\"\n  content-horizontal-right\n  content-vertical-center\n\"\n\u003E\n  \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n    Continue →\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E\n",
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
      "title": "Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-100 w-m\"\u003E\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EThis experiment is concerned with how people process words. You will be asked to view words and judge them.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EThe words will be presented in the middle of the screen. You should ask yourself if the word on the screen is a real word or a fake word.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EIf you recognize the word on the screen like \u003Cem\u003ECOLD\u003C\u002Fem\u003E, please press the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E key for real word. If the word is made-up nonsense, like \u003Cem\u003EWERM\u003C\u002Fem\u003E, please press \u003Ckbd\u003El\u003C\u002Fkbd\u003E for fake word. During practice, we will give you feedback.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EWe'd like to ask to to respond as quickly as you can while remaining accurate. You have five seconds to respond to every word\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to try a few for practice.\n\u003C\u002Ffooter\u003E",
      "plugins": []
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ES\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003EL\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Task frame",
      "content": {
        "type": "lab.flow.Loop",
        "files": {
          "stimuli_english.json": "embedded\u002Fdb6cc958e11fc3987cebacc1e14b253b95b4de4d05c702ecbb3294775adb3e4b.json",
          "stimuli_dutch.json": "embedded\u002Fc54fab50606f1c6a6ea2b69d4c4f86d1339eb75295a5eea2d4dd8bf9395a2f42.json"
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
const response = await fetch(this.files['stimuli_' + this.state.language + '.json'])
// const response = await fetch(this.files['stimuli_dutch.json'])
this.options.templateParameters = await response.json()
}
        },
        "title": "Task",
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
          "title": "Trial",
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
              "title": "Fixation cross",
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
                "keypress(s)": "word",
                "keypress(l)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus",
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
      "title": "Real Task",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-100 w-m\"\u003E\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EGreat job! Remember you should use the \u003Ckbd\u003Es\u003C\u002Fkbd\u003E key for real word, and the \u003Ckbd\u003El\u003C\u002Fkbd\u003E for fake word.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EYou will now complete the real task, remember to go as quickly as possible while getting the correct answer. You will not see any feedback during this section.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to continue.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ES\u003C\u002Fkbd\u003E if the above is a real word, \n  and \u003Ckbd\u003EL\u003C\u002Fkbd\u003E if it is a fake word.\n\u003C\u002Ffooter\u003E",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Task Frame Real",
      "content": {
        "type": "lab.flow.Loop",
        "files": {},
        "parameters": {},
        "templateParameters": [
          {
            "word_real": "CHIMNEY",
            "class_real": "word"
          },
          {
            "word_real": "VARE",
            "class_real": "nonword"
          },
          {
            "word_real": "WIFE",
            "class_real": "word"
          },
          {
            "word_real": "HUSBAND",
            "class_real": "word"
          },
          {
            "word_real": "SMOKE",
            "class_real": "word"
          },
          {
            "word_real": "HICE",
            "class_real": "nonword"
          },
          {
            "word_real": "BOSSIL",
            "class_real": "nonword"
          },
          {
            "word_real": "UGLAE",
            "class_real": "nonword"
          },
          {
            "word_real": "BAIT",
            "class_real": "word"
          },
          {
            "word_real": "FISH",
            "class_real": "word"
          }
        ],
        "sample": {
          "mode": "draw-shuffle"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {},
        "title": "Task Real",
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
              "title": "Fixation cross Real",
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
                  "width": 586.16,
                  "height": 47.46,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "${ this.parameters.word_real }",
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
                "keypress(s)": "word",
                "keypress(l)": "nonword"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus Real",
              "timeout": "5000"
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-100 w-m\"\u003E\n    \u003Ch2\u003EWell done!\u003C\u002Fh2\u003E\n    \u003Cp class=\"font-weight-bold\"\u003EYou've completed the demo task!\u003C\u002Fp\u003E\n    \u003Cp\u003EThank you for supporting psychological research.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  You may now close the window.\n\u003C\u002Ffooter\u003E"
    }
  ]
})

// Let's go!
study.run()