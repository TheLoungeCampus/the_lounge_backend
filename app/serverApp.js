'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    dal = require('./database/dal'),
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
dal.initializeDbConnection()
    .then(function(){
        log.info('Initialized MongoDb');
        app.listen(PORT, function(){
            log.info('Application listenuing on port: ' + PORT);
            app.emit('app-started');
        })
    })
    .catch(log.error);


module.exports = app;