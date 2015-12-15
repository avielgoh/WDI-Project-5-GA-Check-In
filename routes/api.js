var express = require('express');
var router = express.Router();

// Include database models
var models = require('../server/models/index');

// POST to create new event
router.post('/events', function(req, res) {
  models.event.create({
    name: req.body.eventName,
    date: req.body.eventDate
  }).then(function(event) {
    res.json(event);
  });
});

// GET all events
router.get('/events', function(req, res) {
  models.event.findAll({
  }).then(function(events) {
    res.json(events);
  });
});

// GET single event
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
router.put('/events/:id', function(req, res) {
  models.event.find({
    where: {
      id: req.params.id
    }
  }).then(function(event) {
    if(event){
      event.updateattributes({
        name: req.body.name,
        date: req.body.date
      }).then(function(event) {
        res.send(event);
      });
    }
  });
});

// DELETE a single event
router.delete('/events/:id', function(req, res) {
  models.event.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(event) {
    res.json(event);
  });
});

// POST to create new attendee
router.post('/attendees', function(req, res) {
  models.attendee.create({
    email: req.body.email
  }).then(function(attendee) {
    res.json(attendee);
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
