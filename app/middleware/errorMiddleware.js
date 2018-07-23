'use strict';

let log = require('../lib/log'),
    errorMiddleware = {
        handleError: handleError
    };

module.exports = errorMiddleware;

function handleError (err, req, res, next){

    let status = err.status || 500;

    log.error('Error occurred:', {
        error: err.toString(),
        status: status,
        stack: err.stack
    });

    let errorToSend =  {
        status: 'error',
        serverTimeStamp: new Date().toString(),
        message: err.message
    };

    return res.status(status).json(errorToSend);
};