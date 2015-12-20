var express = require('express');
var router = express.Router();
var fs = require('fs');
var json2csv = require('json2csv'); // json to csv conversion
var models = require('../server/models/index'); // database models

// GET - display homepage
router.get('/', function(req, res) {
  res.redirect('/dashboard');
});

// GET - display admin dashboard
router.get('/dashboard', function(req, res) {
  var attendeesArray;
  models.attendee.findAll({
  }).then(function(attendees) {
    attendeesArray = attendees;
  });
  models.event.findAll({
  }).then(function(events) {
    res.render('dashboard', { // render events to dashboard
      events: events,
      attendees: attendeesArray
    });
  });
});

// GET - initiate download of .csv file
router.get('/download/event/:event_id', function(req, res) {
  models.attendee.findAll({
    where: {
      event_id: parseInt(req.params.event_id)
    }
  }).then(function(attendees) {
    console.log(attendees.length);
    var fields = ['id', 'email', 'event_id', 'event_name', 'createdAt', 'updatedAt'];

    // convert JSON from database to csv
    json2csv({ data: attendees, fields: fields }, function(err, csv) {
      if (err) console.log(err);
      fs.writeFileSync('attendees.csv', csv); // write data to the csv file
      console.log('file saved');
    });

    // export and download csv file
    res.setHeader('Content-disposition', 'attachment; filename=attendees.CSV');
    res.setHeader('Content-type', 'text/csv');
    res.download('./attendees.csv');
  });
});

// GET - display event check in page
router.get('/event/:event_id', function(req, res) {
  models.event.find({
    where: {
      id: req.params.event_id
    }
  }).then(function(event) {
    res.render('index', { // render events to dashboard
      event: event
    });
  });
});

// POST - create new event
router.post('/events/new', function(req, res) {
  models.event.create({
    name: req.body.eventName,
    date: req.body.eventDate
  }).then(function(event) {
    res.redirect('/dashboard');
  });
});

// POST - create new attendee
router.post('/attendees/new', function(req, res) {
  models.attendee.create({
    email: req.body.email,
    event_id: req.body.event_id,
    event_name: req.body.event_name
  }).then(function(attendee) {
    res.json(attendee);
  });
});

// DELETE - delete a single event
router.delete('/events/delete/:id', function(req, res) {
  models.attendee.destroy({
    where: {
      event_id: req.params.id
    }
  }).then(function(attendee) {
    res.json(attendee);
  });
  models.event.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(event) {
    res.json(event);
  });
});

module.exports = router;
