var argv = require('minimist')(process.argv.slice(2)),
    babelify = require('babelify');


// file locations
module.exports = {
    src: {
        fonts:   ['./client/assets/fonts/**/*'],
        images:  ['./client/assets/images/**/*'],
        scripts: ['./client/scripts/**/*'],
        styles:  ['./client/styles/**/*'],
        common:  ['./common/components/**/*'],
        locales: ['./locales/**/*.json']
    },
    srcPath: {
        styles: ['./client/styles/']
    },
    dest: {
        fonts:   './public/fonts/',
        images:  './public/images/',
        locales: './public/locales/',
        scripts: './public/js/',
        styles:  './public/css/',
        vendors: './vendors.js'
    },
    browserify: {
        // extensions
        extensions: ['.js', '.jsx'],
        // source maps
        debug: true,
        fullPaths: true,
        // A separate bundle will be generated for config
        bundleConfigs: [{
            entries:    './client/scripts/initialize.js',
            destFolder: './public/js/',
            outputName: 'app.js'
        }],
        babelify: {
            optional: ['es7.classProperties', 'es7.decorators']
        }
    },
    release: !!argv.release
};
