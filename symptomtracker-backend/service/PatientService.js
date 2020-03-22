'use strict';
let database = require('../database');

/**
 * Create new patient
 *
 * body PatientCreateRequest Describing the new patient
 * invitationCode Integer Invitation Code of the Health Department (optional)
 * returns PatientModel
 **/
exports.addNewPatient = function(body, invitationCode) {
  body.linkedCode = invitationCode;
  body.symptomJourney = [];
  return database.add_patient(body).then(result => result.ops[0]);
};


/**
 * Get a corresponding patient
 *
 * _id Long Id of the Patient
 * returns PatientModel
 **/
exports.getPatient = function(_id) {
  return database.find_patient_by_id(_id);
};


/**
 * Patch a current Patient
 *
 * _id Long Id of the Patient
 * body PatientModel Representation of the current patient
 * returns PatientModel
 **/
exports.patchPatient = function(_id, body) {
  delete body._id; // We have to remove the id during the update as Mongo won't allow us to update the id
  return database.update_patient(_id, body).then(result => result.ops[0]);
};


/**
 * Get a filtered list of patients
 *
 * highRisk Boolean whether the Patient is at Risk (optional)
 * inactive Long whether the Patient has been inactive for more than x hours (optional)
 * minAge Long minimum age of patients (optional)
 * maxAge Long maximum age of patients (optional)
 * returns List
 **/
exports.queryPatients = function(highRisk, inactive, minAge, maxAge) {
  return database.list_all_patients(highRisk, inactive, minAge, maxAge);
};

