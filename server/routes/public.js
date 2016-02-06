const publicRoutes = [

    {
        path: '/{path*}',
        method: 'GET',
        handler: require('../handlers/home')
    }, {
        path: '/assets/{path*}',
        method: 'GET',
        handler: {
            directory: {
                index: true,
                listing: false,
                path: './public'
            }
        }
    }, {
        path: '/api/cinema/{cinemaId?}',
        method: 'GET',
        handler: require('../handlers/getCinema')
    }, {
        path: '/api/cinemas/{regionId?}',
        method: 'GET',
        handler: require('../handlers/getCinemas')
    }, {
        path: '/api/movie/{movieId?}',
        method: 'GET',
        handler: require('../handlers/getMovie')
    }, {
        path: '/api/movies/{regionId?}',
        method: 'GET',
        handler: require('../handlers/getMovies')
    }, {
        path: '/api/region/{movieId?}',
        method: 'GET',
        handler: require('../handlers/getRegion')
    }
    //{
    //    path: '/api/showings/{parts*2}',
    //    method: 'GET',
    //    handler: require('../handlers/getShowings')
    //}

];

module.exports = publicRoutes;
