const mongoose = require('mongoose');
//const dotenv = require('dotenv').config();
//mongoose.connect('mongodb://${user}:${pass}@${uri}/${db}?authMechanism=SCRAM-SHA-1')
//mongoose.connect('mongodb://${user}:${pass}@${uri}/${db}?authMechanism=MONGODB-CR')


const dbconnection = 'mongodb://localhost/trails-data'
mongoose.connect(dbconnection, {useMongoClient: true});
console.log("dbconnection here", dbconnection);


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function(){
  console.log('db connected');
});

let trailSchema = mongoose.Schema({
  // TODO: your schema here!
  id : {type : Number, unique : true},
  name : String,
  difficulty : String,
  summary : String,
  url : String,
  stars : Number,
  location : String,
  imgMedium : String,
  longitude : Number,
  latitude : Number,
  type : String,
  conditionStatus : String,
  address : String
});

let Trail = mongoose.model('Trail', trailSchema);

let save = (trails, address, callback) => {
  // TODO: Your code here

    let count = 0;

    console.log("trails inside db file", trails.trails);
    let trailsValue = trails.trails;
    trailsValue.forEach(function(trail) {
    let trailObj = new Trail({
      id : trail.id,
      name : trail.name,
      difficulty : trail.difficulty,
      summary : trail.summary,
      url : trail.url,
      stars : trail.stars,
      location : trail.location,
      imgMedium : trail.imgMedium,
      longitude : trail.longitude,
      latitude : trail.latitude,
      type : trail.type,
      conditionStatus : trail.conditionStatus,
      address : address
    });

    Trail.find({'id': trail.id}, function(error, savedRepos){
      console.log("if no repos exists", trail.id);
      if(error) {
        console.log("error saving repos", error);
      }
      else if(savedRepos.length === 0) {

        trailObj.save((error, repoObj) => {
          if(error) {
          } else if(trailObj !== null) {
            count++;
            if(count === trailsValue.length) {
              callback(true);
            }
          }
        });
      } else {
        count++;
        if(count === trails.length) {
          callback(true);
        }
      }
    });
  });
}


module.exports.save = save;
module.exports.Trail = Trail;