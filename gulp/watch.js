var gulp   = require('gulp'),
    config = require('./config');

// Watch task
gulp.task('watch', ['build'], function() {
    gulp.watch(config.src.fonts, ['fonts']);
    gulp.watch(config.src.styles, ['styles']);
});