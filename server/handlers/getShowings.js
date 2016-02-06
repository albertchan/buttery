import * as models from '../models';


module.exports = function(request, reply) {
    const movieId = request.params.movieId;

    if (movieId) {

        models.MovieShowing.findAll({
            where: {
                id: movieId
            },
            order: [
                ['datetime_showing', 'ASC']
            ],
            include: [{
                model: models.Cinema,
                attributes: ['en_us', 'zh_hk']
            }]

        }).then(function (showings) {

            // do stuff
            reply({data: showings});

        });

    }
};