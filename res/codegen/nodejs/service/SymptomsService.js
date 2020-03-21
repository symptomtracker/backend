'use strict';


/**
 * Add a new
 *
 * patientId Long ID patient
 * body List Representation of the current patient
 * no response value expected for this operation
 **/
exports.addNewSymptoms = function(patientId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Symptoms
 *
 * patientId Long ID patient
 * returns List
 **/
exports.getAllSymptoms = function(patientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

