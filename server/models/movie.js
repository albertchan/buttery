"use strict";

module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        active: {type: DataTypes.BOOLEAN, defaultValue: false},
        en_us: {type: DataTypes.STRING, allowNull: false},
        zh_hk: DataTypes.STRING,
        content_rating_local: DataTypes.STRING,
        content_rating_mpaa: DataTypes.STRING,
        imdb_id: DataTypes.STRING,
        release_date: DataTypes.DATE,
        trailer_url: DataTypes.STRING,
        thumbnail_url: DataTypes.STRING,
        runtime: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Movie.belongsToMany(models.Actor, {through: 'movie_actors'});
                Movie.belongsToMany(models.Director, {through: 'movie_directors'});
                Movie.belongsToMany(models.Genre, {through: 'movie_genres'});
                Movie.belongsTo(models.Language);
                Movie.hasMany(models.MovieShowing);
            }
        },
        tableName: 'movies',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Movie;
};
