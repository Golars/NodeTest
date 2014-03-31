/**
 * Created by Alex on 30.03.2014.
 */
var winston = require('winston');
var EVN = process.env.NODE_ENV;

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize: true,
                level: EVN = 'development' ? 'debug' : 'error',
                level: path
            })
        ]
    });
}

module.exports = getLogger;