import * as models from '../models';


module.exports = function(request, reply) {

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

        reply({data: arrayCinema});
    });
};