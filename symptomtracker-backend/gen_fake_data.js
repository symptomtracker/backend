const faker = require("faker");

const db = require("./database");

faker.locale = "de";
// console.log(faker.name.findName(false, false, 1));
//
//
// console.log(faker.fake("{{name.firstName}} {{name.lastName}} {{name.gender}}"));
// faker.fake("{{name.firstName}} {{name.lastName}};{{address.city}}").split(";");

[{
    "description": "description",
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "@Category": "@Category",
    "comment": "comment",
    "symptomSeverity": "symptomSeverity"
}]

db.add_patient({
    "name": faker.name.findName(),
    "age": faker.random.number(90),
    "gender": faker.random.arrayElement(["m", "f", "d"]),
    "city": faker.address.city(),
    "symptomJourney": [
        {
            "description": "Fieber",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "Im Ohr",
            "symptomSeverity": faker.random.arrayElement(["&lt; 38°C", "38,1 - 38,5 °C", "38,6 - 39,0 °C", "39,1 - 39,9 °C", "&gt; 40°C"]),
        },
        {
            "description": "Husten",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Kurzatmigkeit",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Muskel-/Gelenkschmerzen",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Halsschmerzen",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Kopfschmerzen",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Übelkeit / Erbrechen",
            "createdAt": new Date().toISOString(),
            "@Category": "Hauptsymptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Verstopfte Nase",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Durchfall",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Gliederschmerzen",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Appetitlosigkeit",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Gewichtsverlust",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Bauchschmerzen",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Konjunktivitis",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Hautausschlag",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Lymphknotenschwellung",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Apathie",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        },
        {
            "description": "Somnolenz",
            "createdAt": new Date().toISOString(),
            "@Category": "Weitere Symptome",
            "comment": "",
            "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
        }
    ],
    "linkedCode": new Date().toISOString(),
}, (p) => console.log(p.ops[0]));