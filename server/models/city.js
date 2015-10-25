"use strict";

module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                City.belongsTo(models.Region, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                City.hasMany(models.Cinema);
            }
        },
        tableName: 'cities',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return City;
};
