'use strict';

var utils = require('../utils/writer.js');
var Report = require('../service/ReportService');

module.exports.getReport = function getReport (req, res, next) {
  Report.getReport()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
