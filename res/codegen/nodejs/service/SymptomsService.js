const mongoDbUtils = require("../database");

'use strict';


/**
 * Add a new
 *
 * _id Long ID patient
 * body List Representation of the current patient
 * no response value expected for this operation
 **/
exports.addNewSymptoms = function(_id,body) {
  return new Promise(function(resolve, reject) {
    mongoDbUtils.add_symptom_values(_id, body).then(() => {
      resolve();
    }).catch(() => reject);
  });
}


/**
 * Get Symptoms
 *
 * _id Long ID patient
 * returns List
 **/
exports.getAllSymptoms = function(_id) {
  return mongoDbUtils.get_symptom_values(_id);
    /*var examples = {};
    examples['application/json'] = [ {
  "description'" : "description'",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "@Category" : "@Category",
  "comment" : "comment",
  "symptomSeverity" : "symptomSeverity"
}, {
  "description'" : "description'",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "@Category" : "@Category",
  "comment" : "comment",
  "symptomSeverity" : "symptomSeverity"
} ];*/
}

