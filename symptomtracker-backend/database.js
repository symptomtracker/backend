const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const connection = client.connect();

Date.prototype.toISOStringWithTimezone = function() {
    var tzo = -this.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
    return this.getFullYear() +
        '-' + pad(this.getMonth() + 1) +
        '-' + pad(this.getDate()) +
        'T' + pad(this.getHours()) +
        ':' + pad(this.getMinutes()) +
        ':' + pad(this.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
}

function group_symptoms_by_desc(all_symptoms) {
    var ret_dict = {};
    for (var i = 0; i < all_symptoms.length; i++) {
        var symptom_record = all_symptoms[i];
        var key = symptom_record["@Category"] + symptom_record["description"];
        ret_dict[key] = symptom_record;
    }
    return ret_dict;
}


exports.find_patient_by_id = function (id, callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        coll.findOne({_id: ObjectId(id)}, function (err, item) {
            callback(item);
        });
    });
};

exports.add_patient = function (patient, callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        coll.insertOne(patient, (err, item) => {
            if (err) throw err;
            callback(item);
        })
    });
};

exports.update_patient = function (id, patient, callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        coll.updateOne({_id: ObjectId(id)}, {$set: patient}, (err, item) => {
            if (err) throw err;
            callback(item);
        });
    });
};

exports.list_all_patients = function (highRisk, inactive, minAge, maxAge, callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        // TODO @Simon: add inactive & highrisk flags
        coll.find({age: {$gt: minAge === undefined ? 0 : minAge, $lt: maxAge === undefined ? Number.MAX_VALUE : maxAge}}).toArray(function (err, items) {
            return callback(items);
        });
    });
};

exports.list_catalogue_items = function (callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('catalogue');
        coll.find().toArray(function (err, items) {
            return callback(items);
        });
    });
};

exports.add_catalogue_items = function (items) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('catalogue');
        // TODO bulk insert
        coll.insertOne(items, (err, result) => {
            if (err) throw err
        })
    });
};

exports.add_symptom_values = function (patient_id, symptom_values) {
    for (var s = 0; s < symptom_values.length; s++) {
        symptom_values[s]["createdAt"] = new Date().toISOStringWithTimezone();
    }
    return connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        return coll.findOne({_id: ObjectId(patient_id)}).then((patient) => {
            patient["symptomJourney"] = patient["symptomJourney"].concat(symptom_values);
            return coll.updateOne({_id: ObjectId(patient_id)}, {$set: patient});
        });
    });
};

exports.get_symptom_values = function (patient_id) {
    return connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        return coll.findOne({_id: ObjectId(patient_id)}).then((patient) => patient["symptomJourney"]);
    })
};
