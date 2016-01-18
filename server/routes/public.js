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
        path: '/api/cinema/{cinemaParams*}',
        method: 'GET',
        handler: require('../handlers/getCinema')
    }, {
        path: '/api/movie/{movieId?}',
        method: 'GET',
        handler: require('../handlers/getMovie')
    }, {
        path: '/api/region/{movieId?}',
        method: 'GET',
        handler: require('../handlers/getRegion')
    }

];

module.exports = publicRoutes;
