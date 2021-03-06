var Promise = require('bluebird'),
    path = require('path'),
    models = require('../models'),
    Hapi = require('hapi'),
    HapiReactViews = require('hapi-react-views');

function makeServer(config) {

    models.sequelize.sync().then(function() {
        console.info('Sequelize sync done');
    });

    require('babel/register')({});

    return Promise.resolve().then(function() {

        var server = new Hapi.Server(),
            plugins = require('./../adapters/plugins');

        server.connection(config.connection);

        return Promise.promisify(server.register, server)(plugins).then(function() {

            // configure templating engine
            server.views({
                engines: {
                    jsx: HapiReactViews
                },
                compileOptions: {},
                relativeTo: path.resolve(__dirname, '..'),
                path: './templates',
                helpersPath: './templates/helpers',
                layoutPath: './templates/layouts',
                partialsPath: './templates/partials',
                context: {
                    i18n: {
                        translateWithCache: server.methods.i18n.translateWithCache,
                        getInstance: server.methods.i18n.getInstance
                    }
                }
            });

            server.route(require('./../routes/index'));

        }).then(function() {

            return Promise.promisify(server.start, server)();

        }).then(function() {

            return server;

        });

    });

}

module.exports = makeServer;
