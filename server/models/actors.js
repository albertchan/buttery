"use strict";

module.exports = function(sequelize, DataTypes) {
    var Actor = sequelize.define("Actor", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Actor.belongsToMany(models.Movie, {through: 'movie_actors'})
            }
        },
        tableName: 'actors',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Actor;
};