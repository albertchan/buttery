"use strict";

module.exports = function(sequelize, DataTypes) {
    var ParseMovie = sequelize.define("ParseMovie", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: {type: DataTypes.STRING, allowNull: false},
        detail_id: DataTypes.STRING,
        detail_url: DataTypes.STRING,
        date_created: {type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.NOW},
        date_modified: {type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.NOW}
    }, {
        classMethods: {
            associate: function(models) {
                ParseMovie.belongsTo(models.Chain);
                ParseMovie.belongsTo(models.Movie);
            }
        },
        tableName: 'parse_movies',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return ParseMovie;
};

