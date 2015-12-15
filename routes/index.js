var express = require('express');
var router = express.Router();

var models = require('../server/models/index');

var json2csv = require('json2csv');
var fs = require('fs');

// GET homepage
router.get('/', function(req, res) {
  res.render('index');
});

// GET admin dashboard
router.get('/dashboard', function(req, res) {
  models.event.findAll({
  }).then(function(events) {
    res.render('dashboard', { // render events to dashboard
      events: events
    });
  });
});
//
// var fields = ['id', 'email', 'createdAt', 'updatedAt'];
// var blah = [
//   {
//     id: 1,
//     email: "test@ga.co",
//     createdAt: "2015-12-15T01:36:42.776Z",
//     updatedAt: "2015-12-15T01:36:42.776Z"
//   }, {
//     id: 2,
//     email: "test2@ga.co",
//     createdAt: "2015-12-15T01:36:49.231Z",
//     updatedAt: "2015-12-15T01:36:49.231Z"
//   }, {
//     id: 3,
//     email: "test3@ga.co",
//     createdAt: "2015-12-15T01:36:54.364Z",
//     updatedAt: "2015-12-15T01:36:54.364Z"
//   }
// ];



router.post('/download', function(req, res) {
  var fields = ['id', 'email', 'createdAt', 'updatedAt'];

})
router.get('/download', function(req, res) {
  models.attendee.findAll({
  }).then(function(attendees) {
    var fields = ['id', 'email', 'createdAt', 'updatedAt'];
    var file = attendees;

      json2csv({ data: JSON.parse(file), fields: fields }, function(err, csv) {
        if (err) console.log(err);
        fs.writeFile('attendees3.csv', csv, function(err) {
          if (err) throw err;
          console.log('file saved');
        });
      });
//
//     // JSON.parse(file)
    // console.log(file);
//     // res.download(file);
  });
//   // var downloadFile = './attendees.csv';
//   // res.download(downloadFile); // Set disposition and send it.
});


module.exports = router;
