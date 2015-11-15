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
        // redirect plural to singular
        path: '/cinemas',
        method: 'GET',
        handler: function(request, reply) {
            return reply.redirect('/cinema').code(301);
        }
    }, {
        path: '/cinema',
        method: 'GET',
        handler: require('../handlers/cinema')
    }, {
        path: '/api/cinema',
        method: 'GET',
        handler: require('../handlers/getCinema')
    }

];

module.exports = publicRoutes;
