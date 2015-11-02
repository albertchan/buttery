var argv = require('minimist')(process.argv.slice(2));


// file locations
module.exports = {
    src: {
        fonts:   ['./client/assets/fonts/**/*'],
        images:  ['./client/assets/images/**/*'],
        scripts: ['./client/scripts/**/*'],
        styles:  ['./client/styles/**/*'],
        common:  ['./common/components/**/*'],
        locales: ['./locales/**/*']
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
        // source maps
        debug: true,
        // A separate bundle will be generated for config
        bundleConfigs: [{
            entries:    './client/scripts/initialize.js',
            destFolder: './public/js/',
            outputName: 'app.js'
        }]
    },
    release: !!argv.release
};
