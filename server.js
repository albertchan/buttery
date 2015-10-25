/**
 * load environment config
 */
require('./server/lib/environment')();

var connection = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "8000"
};


/**
 * JSON logger
 */
var bole = require('bole'),
    log  = bole('server');

bole.output({
    level: 'info',
    stream: process.stdout
});


/**
 * create and start server
 */
require('./server/lib/startup')({

    connection: connection

}).then(function(server) {

    //log.info('Hapi server started @', server.info.uri);
    console.log('Hapi server started @', server.info.uri);

}).catch(function(err) {

    // if something's wrong, just throw the error
    process.nextTick(function() {
        throw err;
    });

});