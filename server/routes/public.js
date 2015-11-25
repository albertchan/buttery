var publicRoutes = [

    {
        path: '/{path*}',
        method: 'GET',
        handler: {
            directory: {
                path: './public'
            }
        }
    }, {
        path: '/',
        method: 'GET',
        handler: require('../handlers/home')
    }, {
        // redirect home to root
        path: '/home',
        method: 'GET',
        handler: function(request, reply) {
            return reply.redirect('/').code(301);
        }
    }, {
        path: '/cinemas',
        method: 'GET',
        handler: require('../handlers/cinemas')
    }, {
        path: '/cinema/{cinemaId}',
        method: 'GET',
        handler: require('../handlers/cinemas')
        // handler: require('../handlers/showCinema')
    }, {
        path: '/api/cinema/{cinemaId?}',
        method: 'GET',
        handler: require('../handlers/getCinema')
    }

];

module.exports = publicRoutes;
