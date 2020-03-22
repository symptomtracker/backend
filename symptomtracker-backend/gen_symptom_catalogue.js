const db = require("./database");

let catalogueItems = [
    {
        "@Category": "Hauptsymptome",
        "description": "Fieber",
        "symptomSeverity": [
            "",
            "38,0 - 38,5 °C (leichtes Fieber)",
            "38,6 - 39,0 °C (mäßiges Fieber)",
            "39,1 - 39,9 °C (hohes Fieber)",
            "> 40,0 °C (sehr hohes Fieber)",
        ],
        "toolTip": "Von Fieber kann gesprochen werden, sobald die eigene Körpertemperatur 38°C überschreitet.\n" +
            "https://www.stiftung-gesundheitswissen.de/wissen/fieber/hintergrund"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Kurzatmigkeit/Atemnot",
        "symptomSeverity": [
            "",
            "unter Belastung (hoher körperliche Anstrengung) stark erhöhte Kurzatmigkeit",
            "in Ruhelage viele Atemzüge",
            "starke Atemnot (Gefühl nicht genug Luft zu bekommen)",
        ],
        "toolTip": "Insbesondere trockener Husten (bellend-heisere Geräusche) mit  wenig Auswurf.\n" +
            "https://www.stiftung-gesundheitswissen.de/wissen/husten/hintergrund"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Husten",
        "symptomSeverity": [
            "",
            "schwacher Husten ohne Schmerzen",
            "Husten mit leichten Schmerzen",
            "starker Husten mit Lungenschmerzen",
        ],
        "toolTip": "Unangenehme, erschwerte Atemtätigkeit. Zum Testen dieser kann 10sek. die Luft Angehalten werden. Wenn Sie danach ohne Husten und Schnappatmung atmen können leiden Sie an keiner Kurzatmigkeit.\n" +
            "https://www.apotheken-umschau.de/atemnot"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Muskel- und Gelenkschmerzen",
        "symptomSeverity": [
            "",
            "Muskel- und Gelenkschmerzen",
        ],
        "toolTip": "Andauernde oder immer wiederkehrende Schmerzen an Muskeln, Sehnen und Gelenken\n" +
            "https://www.apotheken-umschau.de/gelenkschmerzen"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Halsschmerzen",
        "symptomSeverity": [
            "",
            "Halskratzen",
            "Schluckbeschwerden",
            "kaum möglich zu schlucken"
        ],
        "toolTip": "Schmerzen die im Bereich des Rachens und des Halses auftreten. Es ist ein unspezifisches Symptom, welches sich auf verschiedene Erkrankungen im Halsbereich zurückführen lässt.\n" +
            "https://www.apotheken-umschau.de/halsschmerzen\n"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Kopfschmerzen",
        "symptomSeverity": [
            "",
            "schubweise",
            "ganzen Tag",
            "beim Aufstehen Schwindelgefühl"
        ],
        "toolTip": "Schmerzen die im Kopfbereich auftreten. Eingeteilt werden diese in primäre (Spannungskopfschmerz, Migräne und Cluster-Kopfschmerz) und sekundäre (aufgrund einer Erkrankung, ein bestimmter Zustand oder die Einnahme einer Substanz). Hier nur bei sekundären ja ankreuzen.\n" +
            "https://www.apotheken-umschau.de/Kopfschmerzen"
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Übelkeit/Erbrechen",
        "symptomSeverity": [
            "",
            "nur Übelkeit ohne Erbrechen",
            "einmaliges Erbrechen",
            "mehrmaliges Erbrechen"
        ],
        "toolTip": "Von Übelkeit ist zu sprechen, wenn einem schlecht ist man sich jedoch nicht übergibt. Von Erbrechen ist die Rede, wenn man sich übergibt.\n" +
            "https://www.apotheken-umschau.de/uebelkeit-erbrechen"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Geschmacks-/Geruchsbeeinträchtigung",
        "symptomSeverity": [
            "",
            "nur Geschmacksbeeinträchtigung",
            "nur Geruchsbeeinträchtigung",
            "Geschmacks- und Geruchsbeeinträchtigung"
        ],
        "toolTip": "Beeinträchtigung des Geschmacks und/oder Geruchsempfinden.\n" +
            "https://www.uniklinikum-dresden.de/de/das-klinikum/kliniken-polikliniken-institute/hno/forschung/interdisziplinaeres-zentrum-fuer-riechen-und-schmecken/downloads/downloads/Patienteninformationen_08.pdf"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Schnupfen",
        "symptomSeverity": [
            "",
            "Nase verstopft",
            "Atembeschwerden durch Schnupfen",
            "Nasennebenhöhlenbeschwerden (Kopfschmerzen/Druckempfinden in Stirnregion) durch Schnupfen"
        ],
        "toolTip": "Dies ist eine infektiöse Entzündung der Nasenschleimhaut. Schnupfen tritt als Hauptsymptom einer Erkältung bzw. eines grippalen Infekts auf und kann auch bei einer Erkrankung mit Corona auftreten.\n" +
            "https://www.apotheken-umschau.de/Schnupfen"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Durchfall",
        "symptomSeverity": [
            "",
            "weicher Stuhl (ganztägig)",
            "flüssiger Stuhl (ganztägig)",
            "wässriger Stuhl (ganztägig)"
        ],
        "toolTip": "Mindestens 3 Stuhlgänge pro Tag mit hohem Wasseranteil.\n" +
            "https://www.apotheken-umschau.de/Durchfall"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Appetitlosigkeit",
        "symptomSeverity": [
            "",
            "Appetitlosigkeit"
        ],
        "toolTip": "Beschreibt den Mangel an Hungergefühl.\n" +
            "https://www.apotheken-umschau.de/appetitlosigkeit"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Gewichtsverlust",
        "symptomSeverity": [
            "",
            "Gewichtsverlust"
        ],
        "toolTip": "Ungewollte Gewichtsabnahme unter normalen Umständen.\n" +
            "https://www.apotheken-umschau.de/gewichtsverlust"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Bauchschmerzen",
        "symptomSeverity": [
            "",
            "leichte Bauchschmerzen",
            "Bauchkrämpfe",
            "Bauchkrämpfe mit Schmerzhaltung (verkrampftes Liegen etc.)"
        ],
        "toolTip": "Schmerzen des Bauchraums die zu starken Krämpfen führen können.\n" +
            "https://www.apotheken-umschau.de/bauchschmerzen"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Bindehautentzündung",
        "symptomSeverity": [
            "",
            "Bindehautentzündung"
        ],
        "toolTip": "Entzündung der Bindehaut des Auges.\n" +
            "https://www.apotheken-umschau.de/Bindehautentzuendung"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Hautausschlag",
        "symptomSeverity": [
            "",
            "Stellenweise begrenzt",
            "Großflächiger",
            "Flächendeckend am ganzen Körper"
        ],
        "toolTip": "Rötung von bestimmten Hautregionen bis hin zu flächendeckenden Rötungen\n" +
            "https://www.apotheken-umschau.de/hautausschlag"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Lymphknotenschwellung",
        "symptomSeverity": [
            "",
            "Lymphknotenschwellung"
        ],
        "toolTip": "Angeschwollenes rundliches Organ, welches Lymphozyten bildet und gleichzeitig einen Filter gegenüber Krankheitserregern darstellt. Diese sind am ganzen Körper verteilt.\n" +
            "https://www.apotheken-umschau.de/Krankheiten/Lymphknotenschwellung-Moegliche-Ursachen-90743.html"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Teilnahmslosigkeit (Apathie)",
        "symptomSeverity": [
            "",
            "Teilnahmslosigkeit (Apathie)"
        ],
        "toolTip": "Zustand der Gleichgültigkeit gegenüber dem Menschen und der Umwelt.\n" +
            "https://www.duden.de/rechtschreibung/Apathie"
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Weitere nicht-aufgelistete Symptome",
        "symptomSeverity": [
            "",
            "Weitere nicht-aufgelistete Symptome"
        ],
        "toolTip": "Bitte nennen Sie hier weitere Symptome die Ihnen aufgefallen sind.\n"
    },
];

db.add_catalogue_items(catalogueItems).then((items) => {
    console.log(items);
    console.log("SUCCESS");
});