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
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
    },
    {
        "@Category": "Hauptsymptome",
        "description": "Muskel- und Gelenkschmerzen",
        "symptomSeverity": [
            "",
            "Muskel- und Gelenkschmerzen",
        ],
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
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
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Appetitlosigkeit",
        "symptomSeverity": [
            "",
            "Appetitlosigkeit"
        ],
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Gewichtsverlust",
        "symptomSeverity": [
            "",
            "Gewichtsverlust"
        ],
        "toolTip": ""
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
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Bindehautentzündung",
        "symptomSeverity": [
            "",
            "Bindehautentzündung"
        ],
        "toolTip": ""
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
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Lymphknotenschwellung",
        "symptomSeverity": [
            "",
            "Lymphknotenschwellung"
        ],
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Teilnahmslosigkeit (Apathie)",
        "symptomSeverity": [
            "",
            "Teilnahmslosigkeit (Apathie)"
        ],
        "toolTip": ""
    },
    {
        "@Category": "Weitere Symptome",
        "description": "Weitere nicht-aufgelistete Symptome",
        "symptomSeverity": [
            "",
            "Weitere nicht-aufgelistete Symptome"
        ],
        "toolTip": ""
    },
];

db.add_catalogue_items(catalogueItems).then((items) => {
    console.log(items);
    console.log("SUCCESS");
});