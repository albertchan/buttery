//var Promise = require('bluebird');
var models = require('../models');

module.exports = function(request, reply) {

    models.Cinema.findAll({
        include: [
            {model: models.City, where: {region_id: 1}}
        ]
    }).then(function(cinemas) {
        cinemas.forEach(function(cinema) {
            console.log(cinema.en_us);
        });
    });

    reply.view('home');
};
