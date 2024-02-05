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

const searchParams = new URLSearchParams(window.location.search);
this.parameters['special_code'] = searchParams.get('special_code'); 
this.parameters['return'] = '<h2><a href="https://survey.maximiles.com/complete?p=120956_3afb9990&m='+this.parameters['special_code']+'">Kliknite da pošaljete svoj odgovor</a></h2>';
}
      },
      "title": "Consent Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EINFORMISANA SAGLASNOST\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003EAnaliza obrade i razumevanja reči\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-left\"\u003EOvo istraživanje tiče se toga kako čitamo i shvatamo značenje reči. Molimo Vas da pročitate ovaj obrazac pre nego što date Vaš pristanak za učešće u studiji.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EOvo istraživanje realizuje dr Erin Bjukenen, profesorka kognitivne analitike na Harisburškom univerzitetu nauke i tehnologije, u saradnji sa dr Tijanom Vesić Pavlović i dr Zoranom Pavlovićem sa Univerziteta u Beogradu.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EInformacije o istraživanju:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    U ovom istraživanju od Vas će se tražiti da odgovorite na različita pitanja u vezi sa većim brojem reči. Na primer, bićete pitani o tome kakave su karakteristike neke reči, koliko Vam je poznata neka reč ili da prosto ocenite da li je neki skup slova prava reč ili ne. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EProcedura:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    U istraživanju ćete učestvovati putem interneta, kome treba da pristupite sa kompjutera koji ima tastaturu (laptop ili desktop). Dobićete uputstva o različitim delovima istraživanja koji su nasumično odabrani za svaku osobu. Nakon što završite sa radom, možete saznati više o istraživanju i ciljevima istraživanja. Celokupno istraživanje bi trebalo da traje približno dvadesetak minuta. \u003C\u002Fp\u003E\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003ERizici i prednosti učešća u istraživanju:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Neće biti registrovani niti prikupljani nikakvi podaci na osnovu kojih biste mogli biti identifikovani, pa je učešće u istraživanju potpuno anonimno. Istraživanje je slično igrici na internetu i može se desiti da se umorite ili da Vam postane dosadno zbog zadatka koji se od Vas traži da obavite.\n    \u003Cbr \u002F\u003E\n    Za Vas nema direktne koristi od učestvovanja u ovoj studiji. Međutim, Vaši odgovori će doprineti našem razumevanju jezika i procesa pamćenja reči \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003ENaknada:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003EUčešćem u ovoj studiji dobićete određeni broj predispitnih bodova (3 boda). \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EPoverljivost i deljenje podataka:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Preduzete su sve mere kako bi se osiguralo da su sve informacije i odgovori koje date anonimni. Podaci iz ovog istraživanja biće javno objavljeni za korišćenje od strane drugih istraživača. Međutim, nikakvi podaci neće biti direktno povezani sa vama. Vaše ime ili drugi identifikacioni podaci neće biti uneti u bazu podataka i neće se spominjati u usmenim ili pisanim izveštajima koji bi Vas mogli povezati sa studijom. U bilo kojoj publikaciji informacije će biti date na takav način da Vas neće biti moguće identifikovati.\n    \u003Cbr \u002F\u003E\n    Pre nego što se Vaši podaci podele van istraživačkog tima, sve potencijalno identifikujuće informacije će biti uklonjene. Istraživački tim može koristiti anonimne podatke ili ih deliti sa drugim istraživačima u istraživačke svrhe u budućnosti. Vaši anonimni podaci takođe mogu biti dostupni u onlajn skladištima podataka, kao što je Open Science Framework (koja su besplatna skladišta podataka koja zahtevaju registraciju da bi im se pristupilo), koja drugim istraživačima i zainteresovanim stranama omogućavaju pristup podacima radi dalje analize.\n    \u003Cbr \u002F\u003E\n    Molimo Vas da imate u vidu da su Vaši podaci anonimni, što znači da ne možete tražiti da budu uklonjeni iz baze podataka nakon što završite sa učešćem u studiji, budući da ne mogu biti identifikovani.\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EDobrovoljnost učešća u studiji:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Učešće u studiji je dobrovoljno:\nVaša odluka o tome da li želite da učetvujete u istraživanju ili ne ni na koji način neće uticati na Vaš odnos sa Harisburškim univerzitetom nauke i tehnologije ili tretman unutar institucija lokalnih saradnika (Univerziteta u Beogradu). Ako odlučite da učestvujete u istraživanju, slobodni ste da ne odgovorite na bilo koje pitanje ili da se povučete a da to ne utiče na Vaš odnos sa ovim institucijama.\n \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKontakt i pitanja:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Istraživači koji realizuju ovu studiju su dr Erin M. Bjukenen u saradnji sa tzv. Psychological Science Accelerator mrežom naučnika i dr Tijanom Vesić Pavlović (Mašinski fakultet UB) i dr Zoranom Pavlovićem (Filozofski fakultet UB). Ukoliko kasnije budete imali neka pitanja, molimo Vas da kontaktirate dr Erin M. Bjukenen na ebuchanan@harrisburgu.edu ili lokalne istraživače dr Tijanu Vesić Pavlović (tvesic@mas.bg.ac.rs) ili dr Zorana Pavlovića (zoran.pavlovic@f.bg.ac.rs).  \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EEtička odobrenja:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Studija je recenzirana od strane Institucionalnog odbora za etička pitanja Harisburškog univerziteta nauke i tehnologije. Odbor je ocenio da studija ispunjava sve obaveze koje se odnose na istraživanja u kojima učestvuju ljudi. Istraživanje je odobreno i od strane Komisije za ocenu etičnosti istraživanja Odeljenja za psihologiju Filozofskog fakulteta Univerziteta u Beogradu (protokol #2021-65). \n\n    \u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002F9tfcb\u002Fdownload\"\u003E Kopija ovih informacija za Vaše lične potrebe može Vam biti dostupna na upit.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Molimo pritisnite \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E da pristane na studiju i nastavi.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-left\"\u003EZamolili bismo Vas da nam date neke informacije o sebi.\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EMolimo Vas da navedete pol:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-left\"\u003E\n                    muški\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-left\"\u003E\n                    ženski\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-left\"\u003E\n                    drugo\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-left\"\u003E\n                    Ne želim da odgovorim\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKoje godine ste rođeni? Unesite godinu sa četiri cifre:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003ENavedite svoj nivo obrazovanja:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-left\"\u003E\n                  osnovna škola\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-left\"\u003E\n                  srednja škola\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-left\"\u003E\n                  viša škola\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-left\"\u003E\n                  fakultet\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-left\"\u003E\n                  master\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-left\"\u003E\n                  doktorat\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EKoji jezik je vaš maternji (prvi) jezik?\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EDa li ste prvenstveno levoruki ili dešnjaci (morate odgovoriti da biste nastavili)?\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-left\"\u003E\n                  levoruk\u002Fa\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-left\"\u003E\n                  desnoruk\u002Fa \n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      Nastavi →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
  window.word_key = 'x'
  window.nonword_key = 'm'
} else if(this.state.dominanthand == "right") {
  window.word_key = 'm'
  window.nonword_key = 'x'
}
}
      },
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003EUputstva\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EOvaj eksperiment bavi se načinom na koji ljudi obrađuju reči. Od Vas će se tražiti da pogledate reči i procenite ih. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EReči će biti prikazane na sredini ekrana. Trebalo bi da razmislite da li je reč na ekranu prava reč ili lažna reč.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EAko prepoznate reč na ekranu, kao što je \u003Cb\u003EHLADNO\u003C\u002Fb\u003E, pritisnite taster \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč. Ako je reč izmišljena besmislica, kao što je \u003Cb\u003ETUPLO\u003C\u002Fb\u003E, pritisnite taster \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč. Tokom uvežbavanja, daćemo Vam povratne informacije. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da odgovarate što je brže moguće, a da pri tome budete precizni. Imate tri sekunde da odgovorite na svaku reč.\n    \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Pritisnite taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E da isprobate nekoliko reči i uvežbate se.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\nPritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
  ? 'Molim vas odgovorite brže!'
  : (
    this.state.correct
      ? 'Tačno!'
      : 'Neispravan!'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EUputstva\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EOdlično! Zapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003ESada ćete dobiti i pravi zadatak. Ne zaboravite da treba da radite što je brže moguće, a da dajete tačne odgovore. U ovom delu nećete videti nikakve povratne informacije.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Pritisnite taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E da nastavite.\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EPauza\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EMolimo Vas da napravite kratku pauzu na ovom ekranu.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EZapamtite da treba da koristite ključ \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za prave reči i \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E za lažne reči. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n   Možete pritisnuti taster \u003Ckbd\u003ESpace Bar\u003C\u002Fkbd\u003E kada budete spremni da nastavite.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Pritisnite \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E za pravu reč, a \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E za lažnu reč.\n\u003C\u002Ffooter\u003E",
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
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const searchParams = new URLSearchParams(window.location.search);
this.parameters['special_code'] = searchParams.get('special_code'); 
this.parameters['return'] = '<h2><a href="https://survey.maximiles.com/complete?p=120956_3afb9990&m='+this.parameters['special_code']+'">Kliknite da pošaljete svoj odgovor</a></h2>';
}
      },
      "title": "End of Experiment",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003EHvala vam!\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003ESada ste završili eksperiment.\u003C\u002Fp\u003E\n\n    ${ this.parameters.return }\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Sada možete zatvoriti prozor.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()