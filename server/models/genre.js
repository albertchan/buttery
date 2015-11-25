"use strict";

module.exports = function(sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
        id: {type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Genre.belongsToMany(models.Movie,  {through: 'movie_genres'});
            }
        },
        tableName: 'genres',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Genre;
};
