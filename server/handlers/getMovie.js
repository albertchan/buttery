import * as models from '../models';


module.exports = function(request, reply) {
    const movieId = request.params.movieId;

    if (movieId) {

        models.MovieShowing.findAll({
            where: {
                movie_id: movieId
            },
            order: [
                ['datetime_showing', 'ASC']
            ],
            include: [{
                model: models.Cinema,
                attributes: ['en_us', 'zh_hk']
            }]

        }).then(function(showings) {

            // do stuff
            reply({data: showings});

        });

    }

    /*if (movieId) {
        const locale = 'en_us';

        models.Movie.find({
            where: {id: movieId},
            include: [{
                model: models.MovieShowing
            }]
        }).then(function(movie) {
            let cinemaShowings = {};
            let movieObj = {
                id: movie.id,
                title: movie[locale],
                poster: movie.thumbnail_url,
                contentRating: movie.content_rating_local,
                releaseDate: movie.release_date,
                runtime: movie.runtime
            };

            models.Cinema.findAll({
                include: [{
                    model: models.City
                }]
            }).then(function(cinemas) {
                cinemas.forEach(function(cinema) {
                    cinemaShowings[cinema.id] = {
                        name: cinema[locale],
                        showings: []
                    };
                });

                movie.MovieShowings.forEach(function(showing) {
                    cinemaShowings[showing.cinema_id].showings.push({
                        seatsAvailable: showing.seats_available,
                        seatsCapacity: showing.seats_capacity,
                        showtime: showing.datetime_showing
                    });
                });

                movieObj.showings = cinemaShowings;
                reply({data: movieObj});
            });
        });

    }*/

};
