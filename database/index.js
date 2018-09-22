var mysql = require('mysql');

const connection = mysql.createConnection({
 host: process.env.RDS_HOSTNAME,
 user: process.env.RDS_USERNAME,
 password: process.env.RDS_PASSWORD,
 database: process.env.RDS_DB_NAME,
 port: process.env.RDS_PORT,
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