const db = require("./database");

let catalogueItems = [
    {
        "@Category": "Kopf",
        "description": "Fieber",
        "symptomSeverity": [
            "",
            "38,0 - 38,5 °C (leichtes Fieber)",
            "38,6 - 39,0 °C (mäßiges Fieber)",
            "39,1 - 39,9 °C (hohes Fieber)",
            "> 40,0 °C (sehr hohes Fieber)",
        ]
    },
    {
        "@Category": "Lunge",
        "description": "Kurzatmigkeit/Atemnot",
        "symptomSeverity": [
            "",
            "unter Belastung (hoher körperliche Anstrengung) stark erhöhte Kurzatmigkeit",
            "in Ruhelage viele Atemzüge",
            "starke Atemnot (Gefühl nicht genug Luft zu bekommen)",
        ]
    },
    {
        "@Category": "Lunge",
        "description": "Husten",
        "symptomSeverity": [
            "",
            "schwacher Husten ohne Schmerzen",
            "Husten mit leichten Schmerzen",
            "starker Husten mit Lungenschmerzen",
        ]
    },
    {
        "@Category": "Befinden",
        "description": "Muskel- und Gelenkschmerzen",
        "symptomSeverity": [
            "",
            "Muskel- und Gelenkschmerzen",
        ]
    },
    {
        "@Category": "Kopf",
        "description": "Halzschmerzen",
        "symptomSeverity": [
            "",
            "Halskratzen",
            "Schluckbeschwerden",
            "kaum möglich zu schlucken"
        ]
    },
    {
        "@Category": "Kopf",
        "description": "Kopfschmerzen",
        "symptomSeverity": [
            "",
            "schubweise",
            "ganzen Tag",
            "beim Aufstehen Schwindelgefühl"
        ]
    },
    {
        "@Category": "Kopf",
        "description": "Geschmacks-/Geruchsbeeinträchtigung",
        "symptomSeverity": [
            "",
            "nur Geschmacksbeeinträchtigung",
            "nur Geruchsbeeinträchtigung",
            "Geschmacks- und Geruchsbeeinträchtigung"
        ]
    },
    {
        "@Category": "Magen",
        "description": "Übelkeit/Erbrechen",
        "symptomSeverity": [
            "",
            "nur Übelkeit ohne Erbrechen",
            "einmaliges Erbrechen",
            "mehrmaliges Erbrechen"
        ]
    },
    {
        "@Category": "Kopf",
        "description": "Schnupfen",
        "symptomSeverity": [
            "",
            "Nase verstopft",
            "Atembeschwerden durch Schnupfen",
            "Nasennebenhöhlenbeschwerden (Kopfschmerzen/Druckempfinden in Stirnregion) durch Schnupfen"
        ]
    },
    {
        "@Category": "Magen",
        "description": "Durchfall",
        "symptomSeverity": [
            "",
            "weicher Stuhl (ganztägig)",
            "flüssiger Stuhl (ganztägig)",
            "wässriger Stuhl (ganztägig)"
        ]
    },
    {
        "@Category": "Befinden",
        "description": "Appetitlosigkeit",
        "symptomSeverity": [
            "",
            "Appetitlosigkeit"
        ]
    },
    {
        "@Category": "Befinden",
        "description": "Gewichtsverlust",
        "symptomSeverity": [
            "",
            "Gewichtsverlust"
        ]
    },
    {
        "@Category": "Magen",
        "description": "Bauchschmerzen",
        "symptomSeverity": [
            "",
            "leichte Bauchschmerzen",
            "Bauchkrämpfe",
            "Bauchkrämpfe mit Schmerzhaltung (verkrampftes Liegen etc.)"
        ]
    },
    {
        "@Category": "Kopf",
        "description": "Bindehautentzündung",
        "symptomSeverity": [
            "",
            "Bindehautentzündung"
        ]
    },
    {
        "@Category": "Haut",
        "description": "Hautausschlag",
        "symptomSeverity": [
            "",
            "Stellenweise begrenzt",
            "Großflächiger",
            "Flächendeckend am ganzen Körper"
        ]
    },
    {
        "@Category": "Lymphen",
        "description": "Lymphknotenschwellung",
        "symptomSeverity": [
            "",
            "Lymphknotenschwellung"
        ]
    },
    {
        "@Category": "Befinden",
        "description": "Teilnahmslosigkeit (Apathie)",
        "symptomSeverity": [
            "",
            "Teilnahmslosigkeit (Apathie)"
        ]
    },
    {
        "@Category": "Befinden",
        "description": "Weitere nicht-aufgelistete Symptome",
        "symptomSeverity": [
            "",
            "Weitere nicht-aufgelistete Symptome"
        ]
    },
];

function fillDB() {
    db.truncate_catalogue_items().then(() => {
        db.add_catalogue_items(catalogueItems).then((items) => {
            console.log(items);
            console.log("SUCCESS");
        });
    })
}

exports.symptomCatalogue = catalogueItems;
exports.fillDB = fillDB;