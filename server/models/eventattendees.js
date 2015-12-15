'use strict';
module.exports = function(sequelize, DataTypes) {
  var eventAttendees = sequelize.define('eventAttendees', {
    eventId: DataTypes.INTEGER,
    attendeeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // eventAttendees.hasMany(models.attendee);
        // eventAttendees.hasMany(models.event);
      }
    }
  });
  return eventAttendees;
};
