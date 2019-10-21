// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

var path = require("path");

var bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
// Data
// ===========================================================

var friends= [
    {
    routeName:  "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
    },

    {
    routeName:  "darthMaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
    }
];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;
  
  if (chosen) {
    
    console.log(chosen);

    for (var i=0; i<friends.length; i++){
      if (chosen===friends[i].routeName) {
        res.json(friends[i]);
        return;
      }
     }

    res.send("No friends found");

} else {
  res.json(friends);
}

});



// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
 