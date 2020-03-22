'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.addNewPatient = function addNewPatient (req, res, next) {
  var body = req.swagger.params['body'].value;
  var invitationCode = req.swagger.params['invitationCode'].value;
  Patient.addNewPatient(body,invitationCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPatient = function getPatient (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  Patient.getPatient(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchPatient = function patchPatient (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  var body = req.swagger.params['body'].value;
  Patient.patchPatient(_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryPatients = function queryPatients (req, res, next) {
  var highRisk = req.swagger.params['highRisk'].value;
  var inactive = req.swagger.params['inactive'].value;
  var minAge = req.swagger.params['minAge'].value;
  var maxAge = req.swagger.params['maxAge'].value;
  Patient.queryPatients(highRisk,inactive,minAge,maxAge)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
