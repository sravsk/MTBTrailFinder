var express = require('express');
var bodyParser = require('body-parser');
 const mongoDB = require('../database-mongoose');
 const MTBAPIHelper = require('../helpers/MTBapi.js');

const request = require('request');

var app = express();

 app.use(express.static(__dirname + '/../react-client/dist'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));



app.post('/trails', (req, res) => {
var obj = req.body;

  for(var key in obj) {
    console.log("key in obj ", JSON.parse(key));
  }
  parseObj = JSON.parse(key);
  difficulty = parseObj.difficulty;
  distance = parseObj.distance;
  latitude = parseObj.location.lat;
  longitude = parseObj.location.lng;
  address = parseObj.address;

  MTBAPIHelper.getTrails(difficulty, distance, latitude, longitude,  address, function(save){
    if(save){
      res.json("data sent");
    }
  });
});

app.get('/trails', (req, res) => {

    let retrive = mongoDB.Trail.find({'address': address}).limit(10).sort({id : -1}).exec(function(error, results){
    console.log("results inside server index.js", results);
    res.send(results);
  });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

