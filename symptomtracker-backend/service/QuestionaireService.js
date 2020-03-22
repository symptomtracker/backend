const mongoDbUtils = require("../database");

'use strict';

/**
 * get catalogue questsions
 *
 * returns List
 **/
exports.getCatalogueItems = function() {
    return mongoDbUtils.list_catalogue_items();
};


/**
 * Add a new catalogue questsion
 *
 * body List Representation of the current patient
 * returns List
 **/
exports.putCatalogueQuestion = function(body) {
    return new Promise((resolve, reject) => {
        mongoDbUtils.add_catalogue_items(body).then(() => {
            resolve()
        }).catch(reject);
    });
};

