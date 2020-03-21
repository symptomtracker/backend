'use strict';

var utils = require('../utils/writer.js');
var Symptoms = require('../service/SymptomsService');

module.exports.addNewSymptoms = function addNewSymptoms (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  var body = req.swagger.params['body'].value;
  Symptoms.addNewSymptoms(_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSymptoms = function getAllSymptoms (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  Symptoms.getAllSymptoms(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
