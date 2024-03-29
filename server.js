// Dependencies
// ===========================================================
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

var bodyParser = require("body-parser");

// create application/json parser
// var jsonParser = bodyParser.json();
 
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Data:  app/data/friends.js
// =================================================================


// Routes:  app/routing/apiRoutes.js && app/routing/htmlRoutes.js
// =================================================================


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
 