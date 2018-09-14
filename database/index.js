var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'yelpReviews'
});
 
const getReviews = function (id, whenReviews) {
  connection.query(`SELECT * from reviews WHERE ${id} = restaurantId`, function(error, results, fields) {
    if (error) {
      whenReviews(error);
    } else {
      whenReviews(null, results);
    }
  });
};

const getReviewers = function (whenReviewers) {
  connection.query(`SELECT * from reviewers`, function(error, results, fields) {
    if (error) {
      whenReviewers(error);
    } else {
      whenReviewers(null, results);
    }
  });
};

 

module.exports.getReviews = getReviews;
module.exports.getReviewers = getReviewers;