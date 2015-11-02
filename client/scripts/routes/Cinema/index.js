module.exports = {
    path: 'cinema',
    getComponent(location, cb) {
        // require.ensure([], (require) => {
        //     cb(null, require('./components/Cinema'))
        // });
        cb(null, require('./components/Cinema'));
    }
};
