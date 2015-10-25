"use strict";

module.exports = function(sequelize, DataTypes) {
    var Chain = sequelize.define("Chain", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING,
        website_url: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Chain.hasMany(models.Cinema)
            }
        },
        tableName: 'cinema_chains',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Chain;
};
