#Recipe Tracker App
Our super cool app that is used as a group project for DGM RIA (Rich Internet Apps)

##Summary
It’s dinner time and inside every family home the question is popped what is for dinner?
The recipe tracking app is an app that organizes recipes, makes schedules for pre- planned
meals. Imagine your house with all the recipe books that have been collected, big bulky
books taking up your cabinet or counter space. Now imagine your recipes in the palm of
your hand fitting hundreds of recipes in a tiny Recipe Tracking App. With recipes at your
fingertips it now makes it so much easier to share recipes at your family/friend Get
together’s as they travel around with you on your much used digital devices.

##Technologies Used
For this project we will be using a modifided MEAN stack.
We have decided aginst using the express router to serve the front end for the sake of simplicity. Therfore, the project serves the front end staticly from the /app folder. However, the data API will use the new express 4 routing options to provide RESTful endpoint used for data manipulation.
###Frontend
The frontend will be using Angular.js and Bootstrap and will be the focus of this project.
###Backend
The back end will be using Node with the Express framework to serve static files, and provide back end API. The backend will also use MongoDB with Mongoose for data object modeling. 

##Getting Started
Node is required.

MongoDB is required. Goto www.mongodb.org to install and find instructions to get it up and running. I recommend using homebrew to install if you are on mac.

####Install Dependancies.
Backend dependancies:

    npm install
Frontend dependancies:

    bower install
    
Start the Mongo server (sudo maybe required.)

    mongod

Start the server (I recommend nodemon):

Install nodemon, if needed.

    npm install -g nodemon

Then start the server:
(using Nodemon)

    nodemon server.js
 
    
(or without Nodemon)

    node server.js
    

    
Then open a web browser to http://localhost:8080/ to see magic.
