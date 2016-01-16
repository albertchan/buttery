import * as models from '../models';


module.exports = function(request, reply) {
    const locale = 'en_us';
    let movieId = request.params.movieId;

    if (movieId) {

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

    } else {

        models.Movie.findAll({
            where: {
                active: true
            }
        }).then(function(movies) {
            var arrayMovie = [];

            movies.forEach(function(movie) {
                arrayMovie.push({
                    id: movie.id,
                    title: movie[locale],
                    image: movie.thumbnail_url
                });
            });

            reply({data: arrayMovie});
        });

    }

};
