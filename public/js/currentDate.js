$(document).ready(function() {
  var displayTime = function() {
    var hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = new Date();
    var currentDay = date.getDay();
    var currentDate = date.getDate();
    var currentMonth = date.getMonth();
    var currentHour = date.getHours();

    var currentMinute = function() {
      if (date.getMinutes() < 10) {
        return ("0" + String(date.getMinutes()));
      } else {
        return date.getMinutes();
      }
    }

    var ampm = function() {
      if (currentHour < 11) {
        return "AM";
      } else {
        return "PM";
      };
    };

    $('#current-time').html(days[currentDay] + " " + currentDate + " " + months[currentMonth] + " " + hours[currentHour] + ":" + currentMinute() + " " + ampm() );
  };

setInterval(displayTime, 1000); // call function and update each second
});
