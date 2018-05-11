const request = require('request');
 const MongoDB = require('../database-mongoose');

let getTrails = (difficulty, distance, latitude, longitude, address, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

   let options = {
    url: 'https://www.mtbproject.com/data/get-trails',
    qs : {
      'lat' : latitude,
      'lon' : longitude,
      'maxDistance' : distance,
      'maxResults' : 20,
      'key' : '200259773-c39af3b6ae28c344c9a36eb758184c9c'
    },
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/vnd.github.v3+json'
    }
  };



  //GET request to fetch users data from API
  request(options, function(error, response, body){
    if(error) {
      console.log("error fetching data from API", error);
    }
    let trails = JSON.parse(body);
    console.log("trails from API helper method", trails);
    console.log("address", address);
    MongoDB.save(trails, address, callback);
  });

}

module.exports.getTrails = getTrails;