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
    }

];

module.exports = publicRoutes;