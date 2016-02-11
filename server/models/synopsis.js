"use strict";

module.exports = function(sequelize, DataTypes) {
    var Synopsis = sequelize.define("Synopsis", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Synopsis.belongsTo(models.Movie)
            }
        },
        tableName: 'synopsis',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Synopsis;
};