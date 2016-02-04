import Sequelize from 'sequelize';
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
            ],
            include: [{
                model: models.Cinema,
                attributes: ['en_us']
            }]
        }]
    }).then(function(movies) {
        reply({data: movies});
    });

};
