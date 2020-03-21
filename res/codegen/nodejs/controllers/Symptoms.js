'use strict';

var utils = require('../utils/writer.js');
var Symptoms = require('../service/SymptomsService');

module.exports.addNewSymptoms = function addNewSymptoms (req, res, next) {
  var patientId = req.swagger.params['patientId'].value;
  var body = req.swagger.params['body'].value;
  Symptoms.addNewSymptoms(patientId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSymptoms = function getAllSymptoms (req, res, next) {
  var patientId = req.swagger.params['patientId'].value;
  Symptoms.getAllSymptoms(patientId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
