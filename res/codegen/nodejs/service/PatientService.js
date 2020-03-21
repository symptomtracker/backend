'use strict';


/**
 * Create new patient
 *
 * body PatientCreateRequest Describing the new patient
 * invitationCode Integer Invitation Code of the Health Department (optional)
 * returns PatientModel
 **/
exports.addNewPatient = function(body,invitationCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "linkedCode" : "linkedCode",
  "gender" : "gender",
  "relatedAttributes" : [ {
    "@Type" : "@Type",
    "@Value" : "@Value"
  }, {
    "@Type" : "@Type",
    "@Value" : "@Value"
  } ],
  "city" : "city",
  "symptomJourney" : [ {
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
  } ],
  "name" : "name",
  "id" : 0,
  "age" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a corresponding patient
 *
 * patientId Long Id of the Patient
 * returns PatientModel
 **/
exports.getPatient = function(patientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "linkedCode" : "linkedCode",
  "gender" : "gender",
  "relatedAttributes" : [ {
    "@Type" : "@Type",
    "@Value" : "@Value"
  }, {
    "@Type" : "@Type",
    "@Value" : "@Value"
  } ],
  "city" : "city",
  "symptomJourney" : [ {
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
  } ],
  "name" : "name",
  "id" : 0,
  "age" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Patch a current Patient
 *
 * patientId Long Id of the Patient
 * body PatientModel Representation of the current patient
 * returns PatientModel
 **/
exports.patchPatient = function(patientId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "linkedCode" : "linkedCode",
  "gender" : "gender",
  "relatedAttributes" : [ {
    "@Type" : "@Type",
    "@Value" : "@Value"
  }, {
    "@Type" : "@Type",
    "@Value" : "@Value"
  } ],
  "city" : "city",
  "symptomJourney" : [ {
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
  } ],
  "name" : "name",
  "id" : 0,
  "age" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a filtered list of patients
 *
 * highRisk Boolean whether the Patient is at Risk (optional)
 * inactive Long whether the Patient has been inactive for more than x hours (optional)
 * minAge Long minimum age of patients (optional)
 * maxAge Long maximum age of patients (optional)
 * returns List
 **/
exports.queryPatients = function(highRisk,inactive,minAge,maxAge) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "linkedCode" : "linkedCode",
  "gender" : "gender",
  "relatedAttributes" : [ {
    "@Type" : "@Type",
    "@Value" : "@Value"
  }, {
    "@Type" : "@Type",
    "@Value" : "@Value"
  } ],
  "city" : "city",
  "symptomJourney" : [ {
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
  } ],
  "name" : "name",
  "id" : 0,
  "age" : 6
}, {
  "linkedCode" : "linkedCode",
  "gender" : "gender",
  "relatedAttributes" : [ {
    "@Type" : "@Type",
    "@Value" : "@Value"
  }, {
    "@Type" : "@Type",
    "@Value" : "@Value"
  } ],
  "city" : "city",
  "symptomJourney" : [ {
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
  } ],
  "name" : "name",
  "id" : 0,
  "age" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

