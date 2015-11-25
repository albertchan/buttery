import * as models from '../models';


module.exports = function(request, reply) {
    let cinemaId = request.params.cinemaId;
    
    if (cinemaId) {

        models.Cinema.findById(cinemaId).then(function(cinema) {
            const locale = 'en_us',
                  address = 'address_' + locale;
            let data = {
                name: cinema[locale],
                address: cinema[address],
                phone: cinema.cinema_phone,
                url: cinema.cinema_url
            };

            reply({data: data});
        });

    } else {

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

    }

};