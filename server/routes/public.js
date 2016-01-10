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
        path: '/api/movie/{movieId?}',
        method: 'GET',
        handler: require('../handlers/getMovie')
    }

];

module.exports = publicRoutes;
