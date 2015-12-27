"use strict";

module.exports = function(sequelize, DataTypes) {
    var MovieVersion = sequelize.define("MovieVersion", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: {type: DataTypes.STRING, allowNull: false},
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        tableName: 'movie_versions',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return MovieVersion;
};
