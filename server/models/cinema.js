"use strict";

module.exports = function(sequelize, DataTypes) {
    var Cinema = sequelize.define("Cinema", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        en_us: {type:DataTypes.STRING, allowNull: false},
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING,
        address_en_us: DataTypes.TEXT,
        address_zh_cn: DataTypes.TEXT,
        address_zh_hk: DataTypes.TEXT,
        cinema_phone: DataTypes.STRING,
        cinema_thumbnail_url: DataTypes.STRING,
        cinema_data_id: DataTypes.STRING,
        cinema_url: DataTypes.STRING,
        cinema_google_map: DataTypes.TEXT,
        cinema_coord_lat: DataTypes.DECIMAL(10,7),
        cinema_coord_long: DataTypes.DECIMAL(10,7),
        cinema_active: {type: DataTypes.BOOLEAN, defaultValue: true}
    }, {
        classMethods: {
            associate: function(models) {
                Cinema.belongsTo(models.Chain);
                Cinema.belongsTo(models.City);
                //Cinema.belongsTo(models.Region, {through: models.City});
                Cinema.hasMany(models.MovieShowing);
            }
        },
        tableName: 'cinemas',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Cinema;
};
