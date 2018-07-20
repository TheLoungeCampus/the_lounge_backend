'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    log = require('./lib/log'),
    router = require('./routes/router'),
    mongoose = require('mongoose');

// Listen for connections
const PORT = 3214;

let app = express();

// Set mongoose to user Bluebird rather than native promise
mongoose.Promise = Promise;

app.use(bodyParser.json());

app.use(router);

/**
 * Start mongo connection
 **/



module.exports = app;