'use strict';

module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // event.hasMany(models.attendee);
        // event.hasMany(models.attendee);
        // event.belongsToMany(models.attendee, {
        //   through: 'eventAttendees',
        //   foreignKey: 'attendeeId'
        // });
        // event.belongsToMany(models.attendee, {
        //   through: 'eventAttendees'
        // });
      }
    }
  });
  return event;
};
