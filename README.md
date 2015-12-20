# GA Check In

## Overview

GA Check In is a web application built for General Assembly for the purpose of checking event attendees in, allowing General Assembly to log attendees for each event hosted. A list of the email addresses for each event can be downloaded directly by the event organiser as a CSV file and are subsequently compared against the RSVP list for internal use.

## Objective

Build a dynamic and responsive check in page that does not require a page refresh (so attendees can quickly check in) and also allow event organisers to download a CSV file at the end of each event.

*[General Assembly (Melbourne)](https://generalassemb.ly/melbourne) was my client for this project, specifically the Events Management Team who requested a web application with the above functionality.*

## Technologies used

1. Node.js
2. [Express](http://expressjs.com/en/index.html)
3. [Gulp](http://gulpjs.com)
4. JavaScript, including the following libraries:
  - jQuery
  - Ajax
5. PostgreSQL (Sequelize)
6. HTML5
7. Sass / CSS3 (including the [Materialize](http://materializecss.com/) framework)
8. Heroku hosting

## Key features

- Event attendees input their email address with no page refresh
- Custom URL for each event - check in can be run simultaneously on multiple devices and email addresses will be saved to the same list
- Event organisers can:
  - Create new events
  - Delete old events
  - Download the list of email address for each event as a CSV file with a single click
- Fully mobile responsive (check in is done both on a laptop and tablet)

## Links

Check out the project site - [http://gacheckindemo.herokuapp.com](http://gacheckindemo.herokuapp.com)

*Note: the live web application as used by General Assembly is hosted elsewhere*

## Approach / design notes

##### User stories:

1. General Assembly wants each event attendee to check in using their email address
2. Event organisers need to create new events
3. Event organisers need to export the list of email addresses as a CSV for internal use

##### Wireframe:

![Image of Wireframe](https://raw.githubusercontent.com/avielgoh/WDI-Project-5-GA-Check-In/master/public/planning/wireframe.jpg)

##### Database tables:

![Image of Database tables](https://raw.githubusercontent.com/avielgoh/WDI-Project-5-GA-Check-In/master/public/planning/db_tables.png)

##### Presentation:

Link to presentation slides - [https://github.com/avielgoh/WDI-Project-5-GA-Check-In/blob/master/public/planning/GA%20Check%20In.pdf](https://github.com/avielgoh/WDI-Project-5-GA-Check-In/blob/master/public/planning/GA%20Check%20In.pdf)

## Challenges:

This project was mostly challenging due to the time constraints. I was given 3 days to plan / build the web application as General Assembly wanted to use it for an end-of-year party with over 1000 attendees.

###### Other challenges include:

- **Setup** - unlike Ruby on Rails, the setup for this Node.js project was slightly more complicated because I wanted to use Express as the server and Gulp as my task runner. In the end, however, this combination made it much easier in development models
- **Sequelize** - this was my first time using Sequelize with PostgreSQL - the conventions are quite different to Active Record (and documentation not as beefy) but managed to get there in the end
- **Exporting** - getting the right data, converting it from JSON to CSV and implementing a download of this data from the front-end was quite tricky the first time but understanding it now will definitely be useful going forward

## Acknowledgements

Thanks to [DT](https://github.com/epoch), [Matt](https://github.com/mattswann) and the WDI4 appleandriods class for all your assistance and guidance!

*This project was undertaken as part of the General Assembly WDI course I undertook in 2015.*
