import * as models from '../models';


module.exports = function(request, reply) {
    let regionId = request.params.regionId,
        include = {};
        //include = regionId ? {model: models.City, where: {region_id: regionId}} : {model: models.City};

    if (regionId) {
        include = {
            model: models.City,
            where: {region_id: regionId}
        };
    } else {
        {
            model: models.City
        }
    }

    models.Cinema.findAll({
        include: [include]
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
