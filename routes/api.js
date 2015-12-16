var express = require('express');
var router = express.Router();
var models = require('../server/models/index'); // database models

// API ROUTES

// GET - display all events
router.get('/events', function(req, res) {
  models.event.findAll({
  }).then(function(events) {
    res.json(events);
  });
});

// GET - display single
router.get('/events/:id', function(req, res) {
  models.event.find({
    where: {
      id: req.params.id
    }
  }).then(function(events) {
    res.json(events);
  });
});

// PUT update to single event
router.put('/events/update/:id', function(req, res) {
  models.event.find({
    where: {
      id: req.params.id
    }
  }).then(function(event) {
    if(event){
      event.updateattributes({
        name: req.body.eventName,
        date: req.body.eventDate
      }).then(function(event) {
        res.send(event);
      });
    }
  });
});



// GET all events
router.get('/attendees', function(req, res) {
  models.attendee.findAll({
  }).then(function(attendees) {
    res.json(attendees);
  });
});

module.exports = router;

// node_modules/.bin/sequelize db:migrate

// curl --data "name=UNPLUG + PLAY: SUMMER WAREHOUSE PARTY WITH ANDRÁS (DJ SET)&date=17 December, 2015" http://localhost:3000/api/events
// curl --data "email=test@ga.co&event_id=1" http://localhost:3000/api/attendees
// curl --data "email=test2@ga.co&event_id=1" http://localhost:3000/api/attendees
