var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'yelpReviews'
});
 
const getReviews = function (whenReviews) {
  connection.query('SELECT textBody from reviews', function(error, results, fields) {
    if (error) {
      whenReviews(error);
    } else {
      whenReviews(null, results);
    }
  });
};

 

module.exports.getReviews = getReviews;