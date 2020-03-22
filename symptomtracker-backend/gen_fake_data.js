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
    "symptomJourney": [],
    "linkedCode": new Date().toISOString(),
}, (p) => console.log(p.ops[0]));
