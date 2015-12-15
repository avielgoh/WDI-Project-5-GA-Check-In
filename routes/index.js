var express = require('express');
var router = express.Router();

var models = require('../server/models/index');

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

var json2csv = require('json2csv');
var fs = require('fs');

// GET download of .csv file
router.get('/download/:event_id', function(req, res) {
  console.log(req.params.event_id);
  models.event.find({
    where: {
      id: req.params.event_id
    }
  }).then(function(events) {
    var fields = ['id', 'name', 'date', 'createdAt', 'updatedAt'];

    json2csv({ data: events, fields: fields }, function(err, csv) {
      if (err) console.log(err);
      fs.writeFileSync('attendees.csv', csv);
      res.download('./attendees.csv');
      // res.json(events);
      // res.redirect('/download/csv');
    });
  });
});

router.get('/download/csv', function(req, res) {
  // res.redirect('/dashboard');
});

module.exports = router;
