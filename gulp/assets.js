var argv            = require('minimist')(process.argv.slice(2)),
    gulp            = require('gulp'),
    plugin          = require('gulp-load-plugins')(),
    // sass            = require('gulp-sass'),
    // sourcemaps      = require('gulp-sourcemaps'),
    // autoprefixer    = require('gulp-autoprefixer'),
    config          = require('./config');


// settings
var RELEASE = config.release;
//var RELEASE = !!argv.release;

// Fonts task
gulp.task('fonts', function() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.dest.fonts));
});

// Images task
gulp.task('images', function() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.dest.images));
});

// Styles taks
gulp.task('styles', function() {
    return gulp.src(config.srcPath.styles + 'app.scss')
        .pipe(plugin.plumber())
        .pipe(plugin.sourcemaps.init())
        .pipe(plugin.sass().on('error', plugin.sass.logError))
        .pipe(plugin.autoprefixer())
        .pipe(plugin.sourcemaps.write())
        .pipe(plugin.if(RELEASE, plugin.cssnano()))
        .pipe(plugin.if(RELEASE, plugin.rename(function(path) {
            path.basename += '.min';
        })))
        .pipe(gulp.dest(config.dest.styles));
});
