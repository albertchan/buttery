module.exports = {
    path: 'movie',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Movie'))
        });
    }
};
