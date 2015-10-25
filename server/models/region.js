"use strict";

module.exports = function(sequelize, DataTypes) {
    var Region = sequelize.define("Region", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        en_us: DataTypes.STRING,
        zh_cn: DataTypes.STRING,
        zh_hk: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Region.belongsTo(models.Country, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Region.hasMany(models.City);
            }
        },
        tableName: 'regions',
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        underscored: true
    });

    return Region;
};


//"use strict";
//
//module.exports = function(sequelize, DataTypes) {
//    var Region = sequelize.define("Region", {
//        //id: {type: DataTypes.BIGINT, primaryKey: true},
//        en_us: DataTypes.STRING,
//        zh_cn: DataTypes.STRING,
//        zh_hk: DataTypes.STRING
//    }, {
//        classMethods: {
//            associate: function(models) {
//                Region.hasMany(models.City)
//            }
//        },
//        tableName: 'regions',
//        createdAt: false,
//        deletedAt: false,
//        updatedAt: false,
//        underscored: true
//    });
//
//    return Region;
//};
