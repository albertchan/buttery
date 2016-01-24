import * as models from '../models';


module.exports = function(request, reply) {
    const locale = 'en_us';

    models.Movie.findAll({
        where: {active: true},
        order: [
            [locale, 'ASC']
        ],
        include: [{
            model: models.MovieShowing,
            order: [
                ['datetime_showing', 'DESC']
            ]
        }]
    }).then(function(movies) {
        reply({data: movies});
    });

};
