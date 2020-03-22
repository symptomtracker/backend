const faker = require("faker");

const db = require("./database");

faker.locale = "de";

const mainSymptoms = ["Fieber", "Husten", "Kurzatmigkeit", "Muskel-/Gelenkschmerzen", "Halsschmerzen", "Kopfschmerzen", "Übelkeit / Erbrechen"];
const otherSymptoms = ["Verstopfte Nase", "Durchfall", "Gliederschmerzen", "Appetitlosigkeit", "Gewichtsverlust", "Bauchschmerzen", "Konjunktivitis", "Hautausschlag", "Lymphknotenschwellung", "Apathie", "Somnolenz"];
const {symptomCatalogue, _} = require('./gen_symptom_catalogue');

function generateSymptomJourney(duration) {
    let symptomJourney = [];
    for (let i = 0; i < duration; i++) {
        let createdAt = new Date();
        createdAt.setDate(createdAt.getDate() - duration + i);
        for (let j = 0; j < symptomCatalogue.length; j++) {
            let symptom = symptomCatalogue[j];
            symptomJourney.push(
                {
                    "description": symptom.description,
                    "createdAt": createdAt,
                    "@Category": symptom["@Category"],
                    "comment": "",
                    "symptomSeverity": faker.random.arrayElement(symptom.symptomSeverity),
                }
            );
        }
    }
    return symptomJourney;
}

const contact_date = new Date();
contact_date.setDate(contact_date.getDate() - faker.random.number(10));
const gender = faker.random.arrayElement(["m", "f", "d"]);

db.add_patient({
    "name": faker.name.findName(),
    "age": faker.random.number(90),
    "gender": gender,
    "city": faker.address.city(),
    "symptomJourney": generateSymptomJourney(faker.random.number(14)),
    "linkedCode": new Date().toISOString(),
    "geo_risk": faker.random.arrayElement([false, true]),
    "contact_risk": faker.random.arrayElement([false, true]),
    "contact_date": contact_date,
    "work": "", //TODO
    "smoker": faker.random.arrayElement([false, true]),
    "preexisting_conditions": [],   //TODO
    "immunal_suppressors": faker.random.arrayElement([false, true]),
    "pregnant": (gender === "f" || gender === "d") && faker.random.arrayElement([false, true])
}, (p) => console.log(p.ops[0]));
