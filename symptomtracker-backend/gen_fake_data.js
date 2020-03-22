const faker = require("faker");

const db = require("./database");

faker.locale = "de";

const mainSymptoms = ["Fieber", "Husten", "Kurzatmigkeit", "Muskel-/Gelenkschmerzen", "Halsschmerzen", "Kopfschmerzen", "Übelkeit / Erbrechen"];
const otherSymptoms = ["Verstopfte Nase", "Durchfall", "Gliederschmerzen", "Appetitlosigkeit", "Gewichtsverlust", "Bauchschmerzen", "Konjunktivitis", "Hautausschlag", "Lymphknotenschwellung", "Apathie", "Somnolenz"];

function generateSymptomJourney(duration) {
    let symptomJourney = [];
    for (let i = 0; i < duration; i++) {
        let createdAt = faker.date.past((duration - i));
        for (let j = 0; j < mainSymptoms.length; j++) {
            symptomJourney.push(
                {
                    "description": mainSymptoms[j],
                    "createdAt": createdAt,
                    "@Category": "Hauptsymptome",
                    "comment": "",
                    "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
                }
            );
        }
        for (let j = 0; j < otherSymptoms.length; j++) {
            symptomJourney.push(
                {
                    "description": otherSymptoms[j],
                    "createdAt": createdAt,
                    "@Category": "Weitere Symptome",
                    "comment": "",
                    "symptomSeverity": faker.random.arrayElement(["0", "1", "2", "3", "4"]),
                }
            );
        }
    }
    return symptomJourney;
}

db.add_patient({
    "name": faker.name.findName(),
    "age": faker.random.number(90),
    "gender": faker.random.arrayElement(["m", "f", "d"]),
    "city": faker.address.city(),
    "symptomJourney": generateSymptomJourney(faker.random.number(14)),
    "linkedCode": new Date().toISOString(),
}, (p) => console.log(p.ops[0]));
