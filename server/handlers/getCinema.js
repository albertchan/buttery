import * as models from '../models';


module.exports = function(request, reply) {
    const params = request.params.cinemaParams,
          parts = params ? params.split('/') : [],
          regionId = parts[0],
          cinemaId = parts[1];
    
    if (regionId && cinemaId) {

        models.Cinema.find({
            where: {id: cinemaId},
            include: [{
                model: models.MovieShowing,
                include: [models.Movie]
            }]
        }).then(function(cinema) {
            const locale = 'en_us',
                address = 'address_' + locale;
            let data = {
                name: cinema[locale],
                address: cinema[address],
                phone: cinema.cinema_phone,
                url: cinema.cinema_url,
                movieShowings: cinema.MovieShowings
            };

            reply({data: data});
        });

    } else {
        let include = regionId ? {model: models.City, where: {region_id: regionId}} : {model: models.City};

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

    }

};
