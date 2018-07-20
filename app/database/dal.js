'use strict';

let mongoose = require('mongoose'),
    logging = require('../lib/log');

mongoose.Promise = global.promise;

/**
 * Databse setup for MongoDb
 **/

