import * as models from '../models';


module.exports = function(request, reply) {
    const locale = 'en_us';
    const movieId = request.params.movieId;

    if (movieId) {

        models.Movie.findById(movieId).then(function(movie) {

            let data = {
                id: movie.id,
                title: movie[locale],
                image: movie.thumbnail_url
            };

            reply({data: data});
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
            console.log(arrayMovie);

            reply({data: arrayMovie});
        });

    }

};
