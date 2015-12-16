'use strict';

module.exports = function(sequelize, DataTypes) {
  var attendee = sequelize.define('attendee', {
    email: DataTypes.STRING,
    event_id: DataTypes.INTEGER,
    event_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // attendee.belongsTo(models.event);
        // attendee.hasMany(models.event);
        // attendee.belongsToMany(models.event, {
        //   through: 'eventAttendees',
        //   foreignKey: 'eventId'
        // });
        // attendee.belongsToMany(models.event, {
        //   through: 'eventAttendees'
        // });
      }
    }
  });


  return attendee;
};
