"use strict";

module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define("Country", {
        id: {type: DataTypes.STRING(3), allowNull: false, primaryKey: true, unique: true},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Country.hasMany(models.Region)
            }
        },
        tableName: 'countries',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Country;
};