var authenticatedRoutes = [
    {
        path: '/settings',
        method: 'GET',
        handler: require('../handlers/user')
    }
];

module.exports = authenticatedRoutes;