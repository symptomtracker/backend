'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.messagePatients = function messagePatients (req, res, next) {
  var patientIds = req.swagger.params['patientIds'].value;
  Message.messagePatients(patientIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
