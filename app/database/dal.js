'use strict';

let envConfig = require('../lib/envConfig'),
    mongoose = require('mongoose'),
    log = require('../lib/log');

mongoose.Promise = global.Promise;

/**
 * Databse setup for MongoDb
 **/

let logPrefix = '\tMongoDb: ',
    mongoUri;

module.exports = {
    initializeDbConnection: initializeDbConnection
};

/**
 * Setup for mongoDb connection
 */
function initializeDbConnection() {

    // If mongoDb is currenty in 'disconnected' state
    if(!mongoose.connection.readyState) {
        log.info(logPrefix + 'Setting up mongo db connection...');

        mongoUri = envConfig.mongodb.url;

        // Event handlers to help debugging
        mongoose.connection.on ('connection', function(){
            log.info(logPrefix + 'MongoDb is connecting to host %s with option: ', mongoose.connection.host, mongoose.connection.options);
        });

        mongoose.connection.on('connected', function(){
            log.info(logPrefix + 'MongoDb connected successfully');
        });

        mongoose.connection.on('error', function(){
            log.error(logPrefix + 'MongoDb connection error: ' + err);
        });

        mongoose.connection.on('disconnected', function(){
            log.error(logPrefix + 'MongoDb has disconnected...');
        });

        return connect();
    }
}

/**
 * Connect to mongoDb instance
 */
function connect(){
    return new Promise(function(resolve, reject){
        mongoose.connect(mongoUri, function(err){
            if(err){
                log.error(logPrefix + 'MongoDb connection Error: ' + err);
                reject();
            } else {
                log.info(logPrefix + 'MongoDb connection has been setup.');
                resolve();
            }
        })
    });
}