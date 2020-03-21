'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.messagePatients = function messagePatients (req, res, next) {
  var _ids = req.swagger.params['_ids'].value;
  Message.messagePatients(_ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
