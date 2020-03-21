'use strict';


/**
 * get catalogue questsions
 *
 * returns List
 **/
exports.getCatalogueItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "@Category" : "@Category",
  "description" : "description",
  "symptomSeverity" : [ "symptomSeverity", "symptomSeverity" ]
}, {
  "@Category" : "@Category",
  "description" : "description",
  "symptomSeverity" : [ "symptomSeverity", "symptomSeverity" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new catalogue questsion
 *
 * body List Representation of the current patient
 * returns List
 **/
exports.putCatalogueQuestion = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "@Category" : "@Category",
  "description" : "description",
  "symptomSeverity" : [ "symptomSeverity", "symptomSeverity" ]
}, {
  "@Category" : "@Category",
  "description" : "description",
  "symptomSeverity" : [ "symptomSeverity", "symptomSeverity" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

