var argv = require('minimist')(process.argv.slice(2));


// file locations
module.exports = {
    src: {
        fonts:   ['./client/assets/fonts/**/*'],
        images:  ['./client/assets/images/**/*'],
        styles:  ['./client/app/styles/']
    },
    dest: {
        fonts:   './public/fonts/',
        images:  './public/images/',
        styles:  './public/css/',
        scripts: './public/js/',
        vendors: './vendors.js'
    },
    release: !!argv.release
};