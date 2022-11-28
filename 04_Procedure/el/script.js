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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΕΝΤΥΠΟ ΣΥΝΑΙΝΕΣΗΣ\u003C\u002Fh2\u003E\n\n    \u003Ch3\u003EΚατανόηση Επεξεργασίας Κειμένου και Σημασίας\u003C\u002Fh3\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚαλείστε να συμμετάσχετε σε μια ερευνητική μελέτη σχετικά με το πώς διαβάζετε και επεξεργάζεστε λέξεις, μαζί με το νόημά τους. Σας ζητάμε να διαβάσετε αυτήν τη φόρμα και να υποβάλετε τυχόν ερωτήσεις που μπορεί να έχετε προτού συμφωνήσετε να συμμετάσχετε στη μελέτη.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΑυτή η μελέτη διεξάγεται από την Dr. Erin M. Buchanan, Καθηγήτρια Cognitive Analytics στο Πανεπιστήμιο «Harrisburg University of Science and Technology».\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΓενικές πληροφορίες:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Σε αυτή τη μελέτη, θα σας ζητηθεί να απαντήσετε σε διαφορετικές ερωτήσεις σχετικά με τις έννοιες των λέξεων. Για παράδειγμα, μπορεί να σας ζητηθεί να ορίσετε τα χαρακτηριστικά μιας λέξης, να βαθμολογήσετε πόσο εξοικειωμένοι είστε με μια λέξη ή απλά να κρίνετε, εάν μια σειρά γραμμάτων είναι πραγματική λέξη. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΔιαδικασίες:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Θα κάνετε αυτή τη μελέτη εξ ολοκλήρου online από έναν επιτραπέζιο ή φορητό υπολογιστή με πληκτρολόγιο. Θα σας δοθούν οδηγίες σχετικά με τις ενότητες του πειράματος που επιλέγονται τυχαία για κάθε άτομο. Αφού ολοκληρώσετε το πείραμα, μπορείτε να μάθετε περισσότερα για τη μελέτη και τους στόχους της έρευνας. Η όλη μελέτη θα διαρκέσει λιγότερο από τριάντα λεπτά. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΚίνδυνοι και οφέλη από τη συμμετοχή στη μελέτη:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Δεν θα συλλεχθούν στοιχεία ταυτοποίησης από εσάς και επομένως, οι απαντήσεις σας είναι ανώνυμες. Η τρέχουσα μελέτη είναι παρόμοια με ένα διαδικτυακό παιχνίδι, το οποίο μπορεί να προκαλέσει κάποια κόπωση ή πλήξη με βάση την εργασία που σας ζητείται να ολοκληρώσετε.\n    \u003Cbr \u002F\u003E\n    Δεν υπάρχει άμεσο όφελος για εσάς από τη συμμετοχή σας σε αυτή τη μελέτη. Ωστόσο, οι απαντήσεις σας θα συμβάλουν στην κατανόηση των γνωστικών διεργασιών της γλώσσας και της μνήμης.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΑποζημίωση:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003EΔεν θα λάβετε κάποια αποζημίωση για αυτήν τη μελέτη. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΕμπιστευτικότητα και κοινή χρήση δεδομένων:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Λαμβάνονται μέτρα για να διασφαλιστεί ότι όλες οι πληροφορίες που παρέχετε θα είναι ανώνυμες. Τα δεδομένα από αυτό το έργο θα δημοσιοποιηθούν προς χρήση από άλλους ερευνητές. Ωστόσο, κανένα στοιχείο δεν θα συνδεθεί απευθείας με εσάς. Το όνομά σας ή άλλες πληροφορίες ταυτοποίησης δεν θα εισαχθούν στο σύνολο δεδομένων και δεν θα γίνονται αναφορές σε προφορικές ή γραπτές αναφορές, που θα μπορούσαν να σας συνδέσουν με τη μελέτη. Σε οποιαδήποτε δημοσίευση, οι πληροφορίες θα παρέχονται με τέτοιο τρόπο, ώστε να μην είναι δυνατή η ταυτοποίησή σας.\n    \u003Cbr \u002F\u003E\n    Προτού κοινοποιηθούν τα δεδομένα σας εκτός της ερευνητικής ομάδας, τυχόν πληροφορίες ταυτοποίησης θα αφαιρεθούν. Τα ανώνυμα δεδομένα μπορούν να χρησιμοποιηθούν από την ερευνητική ομάδα ή να μοιραστούν με άλλους ερευνητές, τόσο για συναφείς όσο και για μη συναφείς ερευνητικούς σκοπούς στο μέλλον. Τα ανώνυμα δεδομένα σας ενδέχεται επίσης να διατίθενται σε διαδικτυακούς χώρους αποθήκευσης δεδομένων, όπως το Open Science Framework (τα οποία είναι δωρεάν αποθετήρια δεδομένων που απαιτούν εγγραφή για να υπάρξει πρόσβαση), τα οποία επιτρέπουν σε άλλους ερευνητές και ενδιαφερόμενα μέρη να έχουν πρόσβαση στα δεδομένα για περαιτέρω ανάλυση.\n    \u003Cbr \u002F\u003E\n    Λάβετε υπόψη ότι τα δεδομένα σας θα είναι ανώνυμα, πράγμα που σημαίνει ότι δεν μπορείτε να ζητήσετε την αφαίρεσή τους αφού ολοκληρώσετε τη μελέτη.\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΕθελοντική φύση της μελέτης:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Η συμμετοχή σε αυτή τη μελέτη είναι εθελοντική: Η απόφασή σας, εάν θα συμμετάσχετε δεν θα επηρεάσει τις τρέχουσες ή μελλοντικές σχέσεις σας με το Πανεπιστήμιο του Harrisburg ή το τοπικό σας ίδρυμα. Εάν αποφασίσετε να συμμετάσχετε, είστε ελεύθεροι να μην απαντήσετε σε καμία ερώτηση ή να αποσυρθείτε ανά πάσα στιγμή χωρίς να επηρεάσετε αυτές τις σχέσεις. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΕπαφές και ερωτήσεις:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Οι ερευνητές που διεξάγουν αυτή τη μελέτη είναι η Δρ Erin M. Buchanan σε συνεργασία με το Psychological Science Accelerator. Μπορείτε να κάνετε όποιες ερωτήσεις έχετε τώρα. Εάν έχετε ερωτήσεις αργότερα, σας ενθαρρύνουμε να επικοινωνήσετε με την Δρ. Erin M. Buchanan στο ebuchanan@harrisburgu.edu. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΕρωτήσεις ή προβληματισμοί:\u003C\u002Fb\u003E\n    \u003Cbr \u002F\u003E\n    Αυτή η μελέτη εγκρίθηκε από το Συμβούλιο Θεσμικής Αναθεώρησης του Πανεπιστημίου Επιστήμης και Τεχνολογίας του Harrisburg (IRB). Το IRB έχει καθορίσει ότι αυτή η μελέτη πληροί τις υποχρεώσεις προστασίας των συμμετεχόντων, που απαιτούνται από την πολιτειακή και ομοσπονδιακή νομοθεσία και τις πολιτικές του Πανεπιστημίου. \n\n    \u003Cp class=\"text-left\"\u003E\u003Ca href=\"https:\u002F\u002Fosf.io\u002Ft3g6u\u002Fdownload\"\u003E Αντίγραφο αυτών των πληροφοριών, που θα φυλάξετε στα αρχεία σας, θα σας παρασχεθεί κατόπιν αιτήματος.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003C\u002Fdiv\u003E\n    \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E για να συναινέσετε στη μελέτη και να συνεχίσετε.\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n    \u003Cdiv style=\"width: 90%;\"\u003E\n      \n      \u003Cform id=\"page-form\" style=\"display: block;\"\u003E\n  \n        \u003Ch3 class=\"text-left\"\u003EΠαρακαλούμε, πείτε μας λίγα λόγια για σας.\u003C\u002Fh3\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΠαρακαλούμε πείτε μας το φύλο σας:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n  \n          \u003Ctable class=\"table-plain page-item-table\"\u003E\n            \u003Ccolgroup\u003E\n              \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n              \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n            \u003C\u002Fcolgroup\u003E\n            \u003Ctbody\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"male\"\n                    id=\"please-tell-us-your-gender-male\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-male\" class= \"text-left\"\u003E\n                    άνδρας \n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"female\"\n                    id=\"please-tell-us-your-gender-female\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-female\" class= \"text-left\"\u003E\n                    γυναίκα \n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"other\"\n                    id=\"please-tell-us-your-gender-other\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-other\" class= \"text-left\"\u003E\n                    άλλο\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n              \u003Ctr\u003E\n                \u003Ctd\u003E\n                  \u003Cinput\n                    type=\"radio\"\n                    name=\"please-tell-us-your-gender\"\n                    value=\"notsay\"\n                    id=\"please-tell-us-your-gender-notsay\"\n                  \u002F\u003E\n                \u003C\u002Ftd\u003E\n                \u003Ctd\u003E\n                  \u003Clabel for=\"please-tell-us-your-gender-notsay\" class= \"text-left\"\u003E\n                    προτιμώ να μην πω\n                  \u003C\u002Flabel\u003E\n                \u003C\u002Ftd\u003E\n              \u003C\u002Ftr\u003E\n            \u003C\u002Ftbody\u003E\n          \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΠοια χρονιά γεννηθήκατε;\n Παρακαλούμε εισαγάγετε ένα τετραψήφιο έτος (πρέπει να απαντήσω για να συνεχίσω):\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"which-year-were-you-born\"\n          style=\"width: 50%;\"\n          type=\"number\"\n          min=\"1920\"\n          max=\"2010\"\n          class=\"content-horizontal-left\"\n          required\n        \u002F\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΠαρακαλούμε πείτε μας το επίπεδο εκπαίδευσής σας:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"less than high school\"\n                  id=\"please-tell-us-your-education-level-less than high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel\n                  for=\"please-tell-us-your-education-level-less than high school\" class=\"text-left\"\u003E\n                  λιγότερο από απολυτήριο \n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"high school\"\n                  id=\"please-tell-us-your-education-level-high school\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-high school\" class=\"text-left\"\u003E\n                  Λυκείου\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"some college\"\n                  id=\"please-tell-us-your-education-level-associates\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-associates\" class=\"text-left\"\u003E\n                  Διετές πτυχίο\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"college\"\n                  id=\"please-tell-us-your-education-level-college\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-college\" class=\"text-left\"\u003E\n                  Πτυχίο Πανεπιστημίου ή πτυχίο τετραετούς φοίτησης\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"master\"\n                  id=\"please-tell-us-your-education-level-master\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-master\" class=\"text-left\"\u003E\n                  Μεταπτυχιακό Δίπλωμα\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"please-tell-us-your-education-level\"\n                  value=\"doctorate\"\n                  id=\"please-tell-us-your-education-level-doctorate\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"please-tell-us-your-education-level-doctorate\" class=\"text-left\"\u003E\n                  Διδακτορικό δίπλωμα\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΠοια είναι η μητρική σας (πρώτη) γλώσσα;\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n        \u003Cinput\n          name=\"native-language\"\n          style=\"width: 50%;\"\n          type=\"text\"\n          class=\"content-horizontal-left\"\n        \u002F\u003E\n\n        \u003Cp class=\"text-left\"\u003E\u003Cb\u003EΕίστε κυρίως αριστερόχειρας ή δεξιόχειρας (πρέπει να απαντήσει για να συνεχίσει);\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n        \u003Ctable class=\"table-plain page-item-table\"\u003E\n          \u003Ccolgroup\u003E\n            \u003Ccol style=\"width: 7.5%\" \u002F\u003E\n            \u003Ccol style=\"width: 92.5%\" \u002F\u003E\n          \u003C\u002Fcolgroup\u003E\n          \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"left\"\n                  id=\"dominanthand-left\"\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-left\" class= \"text-left\"\u003E\n                  Αριστερά\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003E\n                \u003Cinput\n                  type=\"radio\"\n                  name=\"dominanthand\"\n                  value=\"right\"\n                  id=\"dominanthand-right\"\n                  required\n                \u002F\u003E\n              \u003C\u002Ftd\u003E\n              \u003Ctd\u003E\n                \u003Clabel for=\"dominanthand-right\" class= \"text-left\"\u003E\n                  σωστά\n                \u003C\u002Flabel\u003E\n              \u003C\u002Ftd\u003E\n            \u003C\u002Ftr\u003E\n          \u003C\u002Ftbody\u003E\n        \u003C\u002Ftable\u003E\n  \n      \u003C\u002Fform\u003E\n  \n    \u003C\u002Fdiv\u003E\n  \n  \u003C\u002Fmain\u003E\n  \n  \u003Cfooter\u003E\n    \u003Cbutton type=\"submit\" form=\"page-form\"\u003E\n      Continue →\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Ffooter\u003E\n  ",
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
  window.word_key = '1'
  window.nonword_key = '9'
}
}
      },
      "title": "Overall Instructions",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n \n  \u003Cdiv style=\"width: 90%;\"\u003E\n      \n    \u003Ch2\u003EΟδηγίες\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-left\"\u003EΑυτό το πείραμα μελετά το πώς οι άνθρωποι επεξεργάζονται τις λέξεις. Θα σας ζητηθεί να δείτε τις λέξεις και να τις κρίνετε.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΟι λέξεις θα παρουσιαστούν στη μέση της οθόνης. Θα πρέπει να αναρωτηθείτε αν η λέξη στην οθόνη είναι πραγματική λέξη ή ψεύτικη. \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΕάν αναγνωρίζετε τη λέξη στην οθόνη όπως το \u003Cb\u003EΚΡΥΟ\u003C\u002Fb\u003E, πατήστε το πλήκτρο \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για να δηλώσετε ότι είναι πραγματική λέξη. Εάν η λέξη είναι κατασκευασμένη, χωρίς νόημα, όπως το \u003Cb\u003EΖΙΣΤΗ\u003C\u002Fb\u003E, πατήστε το πλήκτρο \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E για να δηλώσετε ότι είναι ψεύτικη. Κατά τη διάρκεια της πρακτικής εξάσκησης, θα σας δώσουμε ανατροφοδότηση.\n    \u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΘα θέλαμε να σας ζητήσουμε να απαντήσετε όσο πιο γρήγορα μπορείτε, παραμένοντας ακριβείς. Έχετε τρία δευτερόλεπτα για να αποκριθείτε σε κάθε λέξη. \n    \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E για να δοκιμάσετε μερικές φορές για εξάσκηση.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "scrollTop": true,
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για μια πραγματική λέξη και το \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E για μια ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
  ? 'Παρακαλώ απαντήστε πιο γρήγορα!'
  : (
    this.state.correct
      ? 'Σωστός!'
      : 'Ανακριβής!'
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΟδηγίες\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΕξαιρετική δουλειά! Θυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις. \n\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΘα πραγματοποιήσετε τώρα το πραγματικό έργο. Θυμηθείτε να προχωράτε όσο το δυνατόν γρηγορότερα και δίνοντας τη σωστή απάντηση. Δεν θα λάβετε ανατροφοδότηση κατά τη διάρκεια αυτής της ενότητας. \u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E για να συνεχίσετε. \n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις. \n\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη. \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη..\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη. \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη.\u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \n  \u003Cdiv style=\"width: 90%;\"\u003E\n    \n    \u003Ch2\u003EΔιακοπή\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"text-left\"\u003EΚάντε ένα μικρό διάλειμμα σε αυτήν την οθόνη. \u003C\u002Fp\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΘυμηθείτε ότι πρέπει να χρησιμοποιείτε το κλειδί \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E για πραγματικές λέξεις και το κλειδί \u003Ckbd\u003E${ window.nonword_key } \u003C\u002Fkbd\u003E για ψεύτικες λέξεις.\u003C\u002Fp\u003E\n  \n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Πατήστε το \u003Ckbd\u003EΠΛΗΚΤΡΟ ΔΙΑΣΤΗΜΑΤΟΣ\u003C\u002Fkbd\u003E  για να συνεχίσετε ή περιμένετε μέχρι να εξαφανιστεί αυτή η σελίδα.\n\u003C\u002Ffooter\u003E",
      "timeout": "60000",
      "tardy": true
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain\u003E\n\u003C!-- Nested components use this canvas --\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Πατήστε \u003Ckbd\u003E${ window.word_key }\u003C\u002Fkbd\u003E εάν η παραπάνω λέξη είναι πραγματική,\n  και \u003Ckbd\u003E${ window.nonword_key }\u003C\u002Fkbd\u003E αν είναι ψεύτικη λέξη.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n\n    \u003Cdiv style=\"width: 90%;\"\u003E\n\n    \u003Ch2\u003EΕυχαριστώ!\u003C\u002Fh2\u003E\n    \n    \u003Cp class=\"text-left\"\u003EΟλοκληρώσατε τώρα το πείραμα.\u003C\u002Fp\u003E\n\n    \u003Cp class=\"text-left\"\u003EΤο τυχαίο αναγνωριστικό συμμετεχόντων είναι:\n      ${ window.uuid }. Μπορείτε να χρησιμοποιήσετε αυτόν τον αριθμό για να δώσετε στον πειραματιστή σας για να δείξετε ότι ολοκληρώσατε το πείραμα.\u003C\u002Fp\u003E\n    \u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Μπορείτε τώρα να κλείσετε το παράθυρο.\n\u003C\u002Ffooter\u003E",
      "plugins": [],
      "tardy": true
    }
  ]
})

// Let's go!
study.run()