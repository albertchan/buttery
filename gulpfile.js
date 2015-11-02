var gulp = require('gulp'),
    requireDir = require('require-dir');


// helper to require directories
requireDir('./gulp');

// client-side Gulp tasks
gulp.task('default', ['build', 'nodemon', 'watch']);
gulp.task('build', ['fonts', 'images', 'locales', 'scripts', 'styles']);
