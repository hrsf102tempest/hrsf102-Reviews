var faker = require('faker');
var restaurantData = require('./fecData.js')

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "yelpReviews"
});

var reviewer = function(reviewerId) {
	return {
	reviewerId: reviewerId,
	reviewerName: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
	location: faker.address.city() + ', ' + faker.address.state(),
	profilePhoto: faker.image.avatar(),
  friends: Math.ceil(Math.random() * 500),
  reviews: Math.ceil(Math.random() * 500),
  photos: Math.ceil(Math.random() * 500),
  elite: Math.floor(Math.random() * 2),
  };
};

var reviewers = [];

var generateReviewers = function() {
	for (var i = 1; i <= 25; i++){  	
	  reviewers.push(reviewer(i));
	}
  return reviewers;
};

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  for (var i = 0; i < reviewers.length; i++){
    var sql = `INSERT INTO reviewers (reviewerName, location, profilePhoto, friends, reviews, photos, elite) VALUES ("${reviewers[i].reviewerName}","${reviewers[i].location}","${reviewers[i].profilePhoto}","${reviewers[i].friends}","${reviewers[i].reviews}","${reviewers[i].photos}", "${reviewers[i].elite}")`;
  	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
   });
  }  
});

con.end(function(err) {
  console.log('The connection is terminated now');
});



