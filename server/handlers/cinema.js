//var Promise = require('bluebird');
var models = require('../models');

module.exports = function(request, reply) {

    var context = {};

    models.Cinema.findAll({
        include: [
            {model: models.City, where: {region_id: 1}}
        ]
    }).then(function(cinemas) {
        var arrayCinema = [];

        cinemas.forEach(function(cinema) {
            arrayCinema.push({
                id: cinema.id,
                name: cinema.en_us
            });
        });

        context.cinema = arrayCinema;
        reply.view('cinema', {context: context});
    });
};
