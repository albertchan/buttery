var _ = require('lodash'),
    //authenticatedRoutes = require('./authenticated'),
    publicRoutes = require('./public');

//var routes = publicRoutes.concat(authenticatedRoutes).filter(function(route) {
var routes = publicRoutes.filter(function(route) {

    // any filter logic otherwise true
    return true;

}).reduce(function(routes, route) { // arr.reduce(callback[, initialValue])

    // if route defines an array of paths,
    // register each as an individual route
    if (route.paths) {
        route.paths.forEach(function(path) {
            var r = _.cloneDeep(route);
            delete r.paths;
            r.path = path;
            routes.push(r);
        });
    } else {
        routes.push(route);
    }

    return routes;

}, []);

module.exports = routes;