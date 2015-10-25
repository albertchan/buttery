"use strict";

// Sequelize connection options
var options = {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.HOST
};

var db = {},
    env = process.env.NODE_ENV || 'development',
    fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        options
    );

// read all models in directory
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

// associate models with each other
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;