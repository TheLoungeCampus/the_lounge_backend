'use strict';

let Promise = require('bluebird'),
    log = require('../lib/log.js'),
    Products = rqeuire('../models/Products'),
    Services = require('../models/Services');

//TODO: Create test data and load here for dev
/**
 * Load test data into the mongodb
 **/