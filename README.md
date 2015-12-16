# GA Check In

## Overview

GA Check In is an application built for General Assembly for the purpose of collecting the email addresses of event attendees on check in.  A list of the email addresses for each event can be downloaded directly by the event organiser as a CSV file. The email addresses are subsequently compared against the RSVP list for internal use.

## Objective

Build a dynamic and responsive check in page that does not require a page refresh (so attendees can quickly check in) and also allow event organisers to download a CSV file at the end of each event.

*General Assembly Melbourne was my client, specifically the Events Management Team*

## Technologies used

1. Node.js
2. [Express](http://expressjs.com/en/index.html)
3. Gulp
4. JavaScript, including the following libraries:
  - jQuery
  - Ajax
5. PostgreSQL (including Sequelize)
6. HTML5
7. Sass / CSS3 (including the Materialize framework)
8. Heroku hosting

## Key features

- Event attendees input their email address with no page refresh
- Custom URL for each event - check in can be run simultaneously on multiple devices and saved to the same list
- Event organisers can:
  - Create new events
  - Delete old events
  - Download the list of email address for each event as a CSV file with a single click
- Fully mobile responsive (check in's are done both on a laptop and tablet)

## Links

Check out the site - [http://gacheckin.herokuapp.com](http://gacheckin.herokuapp.com)

*General Assembly are currently using this to manage the check in of their events. Their site can be found at: .......*

## Approach / design notes

##### User stories:

1. General Assembly wants each event attendee to check in using their email address
2. Event organisers need to create new events
2. Event organisers need to export the list of email addresses as a CSV for internal use

#### Challenges:



##### Wireframe:

![Image of Wireframe](https://raw.githubusercontent.com/avielgoh/WDI-Project-4-Conference/master/public/images/planning/wireframe.jpg)

## Acknowledgements

Thanks to [DT](https://github.com/epoch), [Matt](https://github.com/mattswann) and the WDI4 appleandriods class for all your assistance and guidance!

*This project was undertaken as part of the General Assembly WDI course I undertook in 2015.*
