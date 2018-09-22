var faker = require('faker');
var restaurantData = require('./fecData.js')
var mysql = require('mysql');

var generateRestaurantData = function() {
  for (var i = 0; i < restaurantData.data.length; i++){
    var sql = `INSERT INTO restaurants (restaurantName) VALUES ("${restaurantData.data[i].name}")`;
    con.query(sql, function (err, result) {
      if (err) throw err;
        console.log("1 record inserted");
    });
  }
}

var generateReviewData = function(){
  var review = function(restaurantId) {
  return {
    restaurantId: restaurantId,
    reviewerId: Math.ceil(Math.random() * 25),
    stars: Math.floor(Math.random() * 5),
    reviewDate: faker.date.past(),
    checkIns: Math.floor(Math.random() * 5),
    textBody: faker.lorem.sentences(Math.ceil(Math.random() * 5)),
    textBody2: faker.lorem.paragraphs(Math.floor(Math.random() * 4)),
    textBody3: faker.lorem.sentences(Math.floor(Math.random() * 5)),
    textBody4: faker.lorem.lines(Math.floor(Math.random() * 3))
  };
  }

  var reviews = function() {
    var reviews = [];
    for (var i = 1; i <= restaurantData.data.length; i++){
    var numberOfReviews = Math.ceil(Math.random() * 10);
      for (var j = 0; j < numberOfReviews; j++) {
        reviews.push(review(i));
      }
    }
    return reviews;
  }

  var dataArray = reviews();  

  for (var i = 0; i < dataArray.length; i++){
  var sql = `INSERT INTO reviews (restaurantId, reviewerId, stars, reviewDate, checkIns, textBody, textBody2, textBody3, textBody4) VALUES ("${dataArray[i].restaurantId}","${dataArray[i].reviewerId}","${dataArray[i].stars}","${dataArray[i].reviewDate}","${dataArray[i].checkIns}", "${dataArray[i].textBody}", "${dataArray[i].textBody2}", "${dataArray[i].textBody3}", "${dataArray[i].textBody4}")`;
  con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
  });
  }
  }   
    
  var generateReviewerData = function() {
  var reviewer = function(reviewerId) {
    return {
    reviewerId: reviewerId,
    reviewerName: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
    location: faker.address.city() + ', ' + faker.address.stateAbbr(),
    profilePhoto: faker.image.avatar(),
      friends: Math.ceil(Math.random() * 500),
      reviews: Math.ceil(Math.random() * 500),
      photos: Math.ceil(Math.random() * 500),
      elite: Math.floor(Math.random() * 2),
    };
  };

  var reviewers = [];

  for (var i = 1; i <= 50; i++){    
    reviewers.push(reviewer(i));
  }
    
  for (var i = 0; i < reviewers.length; i++){
    var sql = `INSERT INTO reviewers (reviewerName, location, profilePhoto, friends, reviews, photos, elite) VALUES ("${reviewers[i].reviewerName}","${reviewers[i].location}","${reviewers[i].profilePhoto}","${reviewers[i].friends}","${reviewers[i].reviews}","${reviewers[i].photos}", "${reviewers[i].elite}")`;
    con.query(sql, function (err, result) {
      if (err) throw err;
        console.log("1 record inserted");
     });
  }
}

var con = mysql.createConnection({
  host: "tempestyelp.cmhhyglbcvch.us-west-1.rds.amazonaws.com",
  user: "tempest",
  password: "August07",
  database: "yelpReviews"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

generateRestaurantData();
generateReviewerData();
generateReviewData();

con.end(function(err) {
  console.log('The connection is terminated now');
});
