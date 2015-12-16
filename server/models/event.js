'use strict';

module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // event.hasMany(models.attendee);
      }
    }
  });
  return event;
};
