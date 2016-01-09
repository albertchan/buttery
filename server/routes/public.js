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
    }

];

module.exports = publicRoutes;
