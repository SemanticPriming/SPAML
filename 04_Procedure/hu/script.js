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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EBELEEGYEZŐ NYILATKOZAT\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003EA szövegszerkesztés és a jelentés megértése\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-left\"\u003EFelkérjük, hogy vegyen részt egy kutatásban arról, hogyan olvassa és dolgozza fel a szavakat, valamint \nazok  jelentését.  Kérjük,  olvassa  el  ezt  az  űrlapot,  és  tegye  fel  kérdését,  mielőtt  beleegyezik  a \nvizsgálatba.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EEzt a tanulmányt Dr. Erin M. Buchanan, a Harrisburgi Tudományos és Technológiai Egyetem kognitív \nanalitika professzora végzi.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EHáttér-információ:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Ebben  a  tanulmányban  különböző  kérdéseket  kell  kitöltenie  a  szófogalmakkal  kapcsolatban.  Például \nfelkérhetik, hogy határozza meg egy szó jellemzőit, értékelje, mennyire ismeri a szót, vagy egyszerűen \ncsak ítélje meg, hogy egy betűsor valódi szó-e. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EEljárások:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Ezt a tanulmányt teljes egészében online, asztali számítógépről vagy billentyűzettel ellátott laptopról \nkészítheti  el.  Útmutatást  kap  a  kísérleti  szakaszokról,  amelyeket  minden  egyes  személy  számára \nvéletlenszerűen választanak ki. A kísérlet befejezése után többet megtudhat a vizsgálatról és a kutatás \ncéljairól. A teljes vizsgálatnak kevesebb, mint harminc percet kell igénybe vennie. \u003C\u002Fp\u003E\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EA tanulmányban való részvétel kockázatai és előnyei:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Öntől  nem  gyűjtünk  azonosító  adatokat,  ezért  válaszainak  névtelennek  kell  lenniük.  A  jelenlegi \ntanulmány  egy  online  játékhoz  hasonlít,  amely  némi  fáradtságot  vagy  unalmat  okozhat  az  Ön  által \nelvégzendő feladat alapján.\n    \u003Cbr \u002F\u003E\n    Önnek nincs közvetlen előnye, ha részt vesz ebben a tanulmányban. Válaszai azonban hozzájárulnak a \nnyelvi és kognitív memóriafolyamatok megértéséhez.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKártérítés:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003EKompenzációt kaphat, ha helyi kutatóján keresztül vesz részt ebben a vizsgálatban. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003ETitoktartás és adatmegosztás:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Intézkedéseket  teszünk  annak  biztosítására,  hogy  minden  Ön  által  megadott  információ  anonim \nlegyen.  A  projekt  adatait  nyilvánosan  közzéteszik,  hogy  más  kutatók  felhasználhassák;  azonban \nsemmilyen adat nem kapcsolódik közvetlenül Önhöz. Az Ön neve vagy egyéb azonosító információja \nnem kerül be az adatkészletbe, és nem tesznek szóbeli vagy írásos jelentésekben olyan hivatkozásokat, \namelyek összekapcsolhatják Önt a vizsgálattal. Bármely kiadványban az információkat oly módon adjuk \nmeg, hogy Önt ne lehessen azonosítani.\n    \u003Cbr \u002F\u003E\n    Mielőtt adatait megosztanák a kutatócsoporton kívül, minden potenciálisan azonosítható információt \neltávolítunk. Az anonim adatokat a kutatócsoport felhasználhatja vagy megoszthatja más kutatókkal, \nmind  kapcsolódó,  mind  nem  kapcsolódó  kutatási  célokra  a  jövőben.  Névtelen  adatai  elérhetővé \nválhatnak olyan online adattárakban is, mint például az Open Science Framework (amelyek ingyenes \nadattárak, amelyek hozzáféréséhez regisztráció szükséges), amelyek lehetővé teszik, hogy más kutatók \nés érdeklődők hozzáférjenek az adatokhoz további elemzés céljából.\n    \u003Cbr \u002F\u003E\n    Kérjük, vegye figyelembe, hogy adatai névtelenek lesznek, ami azt jelenti, hogy a vizsgálat befejezése \nután nem kérheti azok eltávolítását.\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EA vizsgálat önkéntes jellege:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    A tanulmányban való részvétel önkéntes: A  részvételre  vonatkozó  döntése  nem  befolyásolja  jelenlegi  vagy  jövőbeni  kapcsolatait  a  Harrisburgi \nTudományos és Technológiai Egyetemmel vagy a helyi intézményével. Ha úgy dönt, hogy részt vesz, \nnem válaszolhat egyetlen kérdésre sem, vagy bármikor visszavonhatja a kapcsolatot anélkül, hogy ez \nbefolyásolná ezeket a kapcsolatokat. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EElérhetőségek és kérdések:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    A  tanulmányt  Dr.  Erin  M.  Buchanan  végzi  a  Psychological  Science  Acceleratorral  együttműködve. \nBármilyen  kérdést  feltehet  most.  Ha  később  kérdései  vannak,  forduljon  Dr.  Erin  M.  Buchananhoz  az \nebuchanan@harrisburgu.edu címen. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKérdések vagy aggályok:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Ezt  a  tanulmányt  a  Harrisburgi  Tudományos  és  Technológiai  Egyetem  intézményi  felülvizsgálati \nbizottsága  (IRB)  felülvizsgálta.  Az  IRB  megállapította,  hogy  ez  a  tanulmány  teljesíti  az  állami  és \nszövetségi  törvények,  valamint  az  egyetemi  szabályzatok  által  megkövetelt  humán  kutatási  alanyok \nvédelmére vonatkozó kötelezettségeket. \n\n    \u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Fswyqn\u002Fdownload\"\u003E Kérésre ezeknek az információknak egy másolatát megőrizzük.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz\u003C\u002Fkbd\u003E hogy hozzájáruljon a vizsgálathoz és folytassa. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Consent Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n\u003Ch2\u003ETájékoztató és Beleegyező Nyilatkozat\u003C\u002Fh2\u003E\n \n\u003Cp class=\"text-left\"\u003EEgy tudományos kutatásban veszel részt, amelynek közreműködője Dr. Aczél Balázs, az ELTE Affektív Pszichológia Tanszékének kutatója.\u003C\u002Fp\u003E\n \n\u003Cp class=\"text-left\"\u003E\u003Cb\u003EA vizsgálat célja\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EA kutatás célja egy szemantikus priming adatbázis létrehozása és az ingerek kielemzése.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003E\u003Cb\u003EAdatkezelés\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003ESzigorúan bizalmasan kezelünk minden olyan személyes információt, amit a kutatás keretén belül gyűjtünk össze. A kutatás során nyert adatokat kóddal ellátva biztonságos számítógépeken tároljuk. A kutatás során nyert adatokat összegezzük.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003E Az ELTE PPK Affektív Pszichológia Tanszék Metatudomány Kutatócsoportja, mint adatkezelő, fenti személyes adataimat bizalmasan kezeli, más adatkezelőnek, adatfeldolgozónak nem adja át. E tényállás részleteit a „Hozzájárulás adatkezeléshez” c. dokumentum tartalmazza: http:\u002F\u002Fdecisionlab.elte.hu\u002Fhozzajarulas-adatkezeleshez\u002F\n\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EAz adatkezelésről szóló szabályozásról részletesebben pedig itt tájékozódhat: https:\u002F\u002Fppk.elte.hu\u002Ffile\u002FHozzajarulas_adatkezeleshez_melleklet_2018.pdf\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EA kutatás során nyert személyes adatait arra használjuk fel, hogy regisztrálhassuk a részvételért járó kurzuspontokat. Az azonosítására alkalmas adatokat (NEPTUN kód) ezután törölni fogjuk. Válaszai nem lesznek semmilyen módon Önhöz köthetők. Az anonimizált adatait más kutatókkal megosztjuk.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EEzt a tanulmányt a Harrisburgi Tudományos és Technológiai Egyetem intézményi felülvizsgálati bizottsága (IRB) felülvizsgálta. Az IRB megállapította, hogy ez a tanulmány teljesíti az állami és szövetségi törvények, valamint az egyetemi szabályzatok által megkövetelt humán kutatási alanyok védelmére vonatkozó kötelezettségeket.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003E\u003Cb\u003ERészvétel\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EA kutatásban való részvétel teljesen önkéntes. A vizsgálatot bármikor indoklás nélkül, a kísérletvezetőnek való jelzéssel megszakíthatod, vagy a kérdések megválaszolását megtagadhatod. \u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EHa bármilyen kérdésed, észrevételed vagy problémád van, írj a kutatócsoportunknak az elte.metascience@gmail.com  e-mail címre.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EA tanulmányt Dr. Erin M. Buchanan végzi a Psychological Science Acceleratorral együttműködve. Ha később kérdései vannak, forduljon Dr. Erin M. Buchananhoz az ebuchanan@harrisburgu.edu címen.\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Fswyqn\u002Fdownload\"\u003E Kérésre ezeknek az információknak egy másolatát megőrizzük.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp class=\"text-left\"\u003EKérem, amennyiben egyetértesz a fenti feltételekkel, és hozzájárulsz a kutatásban való részvételhez, ezt a lenti \"igen\" mező bepipálásával igazold. Együttműködésedet előre is köszönjük!\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz\u003C\u002Fkbd\u003E hogy hozzájáruljon a vizsgálathoz és folytassa. \n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-left\"\u003EKérlek, mesélj egy kicsit magadról.\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKérjük, adja meg a nemét:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-left\"\u003E\n                    férfi\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-left\"\u003E\n                    nő\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-left\"\u003E\n                    más\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-left\"\u003E\n                    nem nyilatkozom\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EMelyik évben születtél? Adjon meg egy négyjegyű évet (válaszolnia kell a folytatáshoz):\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKérjük, adja meg az iskolai végzettségét: \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-left\"\u003E\n                  középiskolai végzettségnél alacsonyabb\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-left\"\u003E\n                  középiskolai végzettség\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-left\"\u003E\n                  Dolgozói végzettség vagy kétéves végzettség\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-left\"\u003E\n                  alapképzéses diploma (BA, BSc)\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-left\"\u003E\n                  mesterképzés (MA, MSc)\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-left\"\u003E\n                  doktori fokozat \n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EMilyen nyelv az Ön anyanyelve (első)?\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EÖn elsősorban bal- vagy jobbkezes (a folytatáshoz válaszolnia kell)?\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-left\"\u003E\n                  balkezes\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-left\"\u003E\n                  jobbkezes\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      folytatni →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
  window.word_key = 'y'
  window.nonword_key = 'm'
} else if(this.state.dominanthand == "right") {
  window.word_key = 'm'
  window.nonword_key = 'y'
}
}
      },
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003EInstrukció\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EEz a kísérlet arra vonatkozik, hogy hogyan dolgozzák fel az emberek a szavakat. Megkérjük, hogy nézze \nmeg a szavakat és ítélje meg őket.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EA szavak a képernyő közepén jelennek meg. Kérdezd meg \nmagadtól, hogy a képernyőn megjelenő szó valódi vagy hamis szó-e. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EHa felismeri a képernyőn a \nHIDEG szót, kérjük, nyomja meg a \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E gombot a valódi szóhoz. Ha a szó kitalált értelmetlenség, mint például a WERM, nyomja meg a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E billentyűt hamis szóhoz. A gyakorlat során visszajelzést adunk.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003ESzeretnénk megkérni, hogy a lehető leggyorsabban válaszoljon, miközben továbbra is pontos marad.\nHárom másodperce van minden szóra válaszolni..\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Ennek gyakorlásához nyomd meg a \u003Ckbd\u003ESZÓKÖZ\u003C\u002Fkbd\u003E billentyűt.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a  \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E gombot valódi szóhoz, \n  és \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E ha hamis szó.\n\u003C\u002Ffooter\u003E",
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
  ? 'Kérem gyorsabban válaszoljon!'
  : (
    this.state.correct
      ? 'Helyes!'
      : 'Helytelen!'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EInstrukció\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003ESzép munka! Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EMost kezdi az igazi feladatot. Próbáljon a lehető leggyorsabb lenni, miközben a helyes választ adja. Ebben a szakaszban nem fog kapni visszajelzést.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  kérjük nyomja meg a \u003Ckbd\u003ESZÓKÖZ\u003C\u002Fkbd\u003E billentyűt a folytatáshoz\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003ESzünet\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003ETartson egy rövid szünetet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003ENe feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key} \u003C\u002Fkbd\u003E\ngombot kell használnia.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Kérjük, nyomja meg a \u003Ckbd\u003Eszóköz billentyűt\u003C\u002Fkbd\u003E a folytatáshoz, vagy várja meg, amíg ez az oldal eltűnik.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Ne feledje, hogy valódi szavakhoz a \u003Ckbd\u003E${window.word_key}\u003C\u002Fkbd\u003E billentyűt, hamis szavakhoz a \u003Ckbd\u003E${window.nonword_key}\u003C\u002Fkbd\u003E \ngombot kell használnia.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003EKöszönjük\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EEzzel befejezte a kísérletet.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EA véletlenszerű résztvevő azonosítója: \n      ${ window.uuid }. Ezzel a számmal igazolhatja kísérletvezetőjének, hogy befejezte a kísérletet.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EKérlek töltsd ki az alábbi kérdőívet, hogy megkapd a kísérleti pontjaid. \u003Ca href=\"https:\u002F\u002Fforms.gle\u002FskLGHaBgfV677amP7\"\u003Ehttps:\u002F\u002Fforms.gle\u002FskLGHaBgfV677amP7\u003C\u002Fa\u003E.\n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Most bezárhatja az ablakot.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()