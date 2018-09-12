var faker = require('faker');
var restaurantData = require('./fecData.js');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "yelpReviews"
});

var review = function(restaurantId) {
  var obj = {
	restaurantId: restaurantId,
	reviewerId: Math.ceil(Math.random() * 25),
  stars: Math.floor(Math.random() * 5),
  reviewDate: faker.date.recent(),
  checkIns: Math.floor(Math.random() * 5),
  textBody: faker.lorem.paragraphs(Math.ceil(Math.random() * 4))
  };
  return JSON.stringify(obj);
}

var reviews = function() {
  var reviews = [];
  for (var i = 1; i <= data.length; i++){
	var numberOfReviews = Math.ceil(Math.random() * 10);
	    for (var j = 0; j < numberOfReviews; j++) {
	    	reviews.push(review(i));
	    }
  }
  return reviews;
}
  
var dataArray = reviews();  

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  for (var i = 0; i < dataArray.length; i++){
    var sql = `INSERT INTO reviews (restaurantId, reviewerId, stars, reviewDate, checkIns, textBody) VALUES ("${dataArray[i].restaurantId}","${dataArray[i].reviewerId}","${dataArray[i].stars}","${dataArray[i].reviewDate}","${dataArray[i].checkIns}", "${dataArray[i].textBody}")`;
  	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });
  }  
});

con.end(function(err) {
  console.log('The connection is terminated now');
});

