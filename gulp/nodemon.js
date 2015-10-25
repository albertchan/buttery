var gulp    = require('gulp'),
    Nodemon = require('nodemon');


// Nodemon task
gulp.task('nodemon', function() {

    var nodeArgs = [];

    Nodemon({

        script: 'server.js',
        ignore: [
            'client/**/*',
            'gulp/**/*',
            'node_modules/**/*',
            'public/**/*'
        ],
        nodeArgs: nodeArgs

    }).on('restart', function(files) {

        console.log('change detected:', files)

    });

});