'use strict';

var utils = require('../utils/writer.js');
var Questionaire = require('../service/QuestionaireService');
var {symptomCatalogue, fillDB} = require('../gen_symptom_catalogue');
fillDB();

module.exports.getCatalogueItems = function getCatalogueItems(req, res, next) {
  Questionaire.getCatalogueItems()
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.putCatalogueQuestion = function putCatalogueQuestion (req, res, next) {
  var body = req.swagger.params['body'].value;
  Questionaire.putCatalogueQuestion(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
