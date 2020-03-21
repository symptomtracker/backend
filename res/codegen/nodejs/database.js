const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const connection = client.connect();


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

exports.add_symptom_values = function (patient_id, symptom_values) {
    connection.then(() => {
        // TODO
    });
};

exports.get_symptom_values = function (patient_id) {
    // TODO
};





