var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'yelpReviews'
});
 
connection.connect();
 

connection.end();