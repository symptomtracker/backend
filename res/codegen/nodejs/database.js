const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const connection = client.connect();


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
        coll.insertOne(patient, (err, result) => {
            if (err) throw err;
            callback(result);
        })
    });
};

exports.update_patient = function (patient) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        let new_values = {$set: {stats: stats}};
        coll.updateOne({id: patient.id}, patient, function (err, item) {
        });
    });
};

exports.list_all_patients = function (callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        coll.find().toArray(function (err, items) {
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

exports.add_symptom_values = function (patient_id, symptom_values, callback) {
    connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        coll.findOne({_id: ObjectId(patient_id)}, function (err, patient) {
            for (var s = 0; s < symptom_values.length; s++) {
                symptom_values[s]["createdAt"] = Date.prototype.toISOString();
            }
            patient["symptomJourney"] = patient["symptomJourney"].concat(symptom_values);
            coll.updateOne({id: ObjectId(patient.id)}, patient, function (err, item) {
                callback();
            });
        });
    });
};

exports.get_symptom_values = function (patient_id) {
    return connection.then(() => {
        const db = client.db('symptomTracker');
        const coll = db.collection('patients');
        return new Promise((resolve, reject) => {
            coll.findOne({_id: ObjectId(patient_id)}, function (err, patient) {
                resolve(patient["symptomJourney"]);
            });
        });
    })
};
