"use strict";

module.exports = function(sequelize, DataTypes) {
    var Language = sequelize.define("Language", {
        id: {type: DataTypes.STRING(3), allowNull: false, primaryKey: true, unique: true},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Language.hasMany(models.Movie)
            }
        },
        tableName: 'languages',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Language;
};