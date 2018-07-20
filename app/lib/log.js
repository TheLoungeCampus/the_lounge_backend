'use strict';

//TODO Verify winston

let winston = require('winston');

// Return the configured logger module
module.exports = log();

function log(){

    let configObject = {
        // Override winston UTC timestamp
        timestamp: function(){ return new Date().toString(); },
        filename: 'logs',
        level: 'info',
        exitOnError: true
    };

    // Remove console logging
    winston.remove(winston.transports.Console);

    if(process.env.NODE_ENV === 'development'){
        console.log('Log output will show in console');
        winston.add(winston.transports.Console);
    }

    return winston
}