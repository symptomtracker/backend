var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017';

client = MongoClient(url);
const connection = client.connect();

exports.get_patient_by_id = function (id, callback) { 
    return connection.then(() => { 
        const db = client.db('symptomTracker'); 
        const coll = db.collection('patients'); 
        return coll.findOne({ id: id }, function (err, item) { 
            callback(item); 
        }); 
    });
};

exports.add_new_patient = function (patient_data, )