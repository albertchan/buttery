import Sequelize from 'sequelize';
import * as models from '../models';


module.exports = function(request, reply) {
    let regionId = request.params.regionId,
        locale = 'en_us';

    if (regionId) {

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
                    attributes: ['en_us', 'zh_hk'],
                    include: [{
                        model: models.City,
                        where: {region_id: regionId}
                    }]
                }]
            }]
        }).then(function(movies) {
            reply({data: movies});
        });

    } else {

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
                    attributes: ['en_us', 'zh_hk']
                }]
            }]
        }).then(function(movies) {
            reply({data: movies});
        });

    }

};
