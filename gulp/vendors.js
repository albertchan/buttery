var gulp       = require('gulp'),
    browserify = require('browserify'),
    buffer     = require('vinyl-buffer'),
    plugin     = require('gulp-load-plugins')(),
    source     = require('vinyl-source-stream'),
    config     = require('./config');


// settings
var RELEASE = config.release;

// vendor dependencies
var vendors = [
    { require: 'classnames', expose: 'classnames' },
    { require: 'flux', expose: 'flux' },
    { require: 'i18next-client', expose: 'i18next-client' },
    { require: 'keymirror', expose: 'keymirror' },
    { require: 'object-assign', expose: 'object-assign' },
    { require: 'react', expose: 'react' },
    { require: 'react-dom', expose: 'react-dom' }
];

// Vendors task
gulp.task('vendors', function() {
    var bundler = browserify({
        // no source maps for vendor libs
        debug: false
    });

    vendors.forEach(function(vendor) {
        // bundler.require(vendor);
        if (vendor.expose !== null) {
            bundler.require(vendor.require, {
                expose: vendor.expose
            });
        } else {
            bundler.require(vendor.require);
        }
    });

    return bundler.bundle()
        .pipe(source(config.dest.vendors))
        .pipe(buffer())
        .pipe(plugin.if(RELEASE, plugin.uglify()))
        .pipe(plugin.if(RELEASE, plugin.rename(function(path) {
            path.basename += '.min';
        })))
        .pipe(gulp.dest(config.dest.scripts));
});