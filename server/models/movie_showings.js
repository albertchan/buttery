"use strict";

module.exports = function(sequelize, DataTypes) {
    var MovieShowing = sequelize.define("MovieShowing", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        datetime_showing: {type: DataTypes.DATE, allowNull: false},
        detail_id: {type: DataTypes.STRING, allowNull: false},
        seats_available: {type: DataTypes.INTEGER},
        seats_capacity: {type: DataTypes.INTEGER}
    }, {
        classMethods: {
            associate: function(models) {
                MovieShowing.belongsTo(models.Cinema);
                MovieShowing.belongsTo(models.Movie);
                MovieShowing.belongsTo(models.MovieVersion);
            }
        },
        tableName: 'movie_showings',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return MovieShowing;
};
