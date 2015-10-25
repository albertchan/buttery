"use strict";

module.exports = {
    up: function(migration, DataTypes, done) {
        migration
            .createTable('countries', {
                username: DataTypes.STRING
            })
            .complete(done)
    },

    down: function(migration, DataTypes, done) {
        migration
            .dropTable('countries')
            .complete(done)
    }
};