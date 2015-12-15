'use strict';

module.exports = function(sequelize, DataTypes) {
  var attendee = sequelize.define('attendee', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // attendee.hasMany(models.event);
        // attendee.belongsToMany(models.event, {
        //   through: 'eventAttendees',
        //   foreignKey: 'eventId'
        // });
        attendee.belongsToMany(models.event, {
          through: 'eventAttendees'
        });
      }
    }
  });


  return attendee;
};
