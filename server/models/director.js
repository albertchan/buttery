"use strict";

module.exports = function(sequelize, DataTypes) {
    var Director = sequelize.define("Director", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Director.belongsToMany(models.Movie,  {through: 'movie_directors'})
            }
        },
        tableName: 'directors',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Director;
};