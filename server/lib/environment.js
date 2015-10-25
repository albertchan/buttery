var dotenv = require('dotenv'),
    fs     = require('fs'),
    path   = require('path');

module.exports = function() {

    // create a .env file in the root directory of your project
    dotenv.load();

    var content = fs.readFileSync(path.resolve(__dirname, "../../", ".env"), "utf-8");

    var missing = fs.readFileSync(path.resolve(__dirname, "../../", ".env"), "utf-8")
        .match(/^(\w+)/gm)
        .filter(function(varrr) {
            return !process.env[varrr];
        });

    if (missing.length) {
        console.error("\nmissing: " + missing.join(", "));
        console.error("please update your .env or service.json");
        process.exit(1);
    }

};