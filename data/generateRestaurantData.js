var faker = require('faker');
var restaurantData = require('./fecData.js')

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "yelpReviews"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  for (var i = 0; i < restaurantData.data.length; i++){

    var sql = `INSERT INTO restaurants (restaurantName) VALUES ("${restaurantData.data[i].name}")`;
  	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });
  }  
});

con.end(function(err) {
  console.log('The connection is terminated now');
});
