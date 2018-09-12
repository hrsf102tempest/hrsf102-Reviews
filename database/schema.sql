DROP DATABASE IF EXISTS yelpReviews;

CREATE DATABASE yelpReviews;

USE yelpReviews;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  restaurantName VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviewers (
  reviewerId INT NOT NULL AUTO_INCREMENT,
  reviewerName VARCHAR(99),
  location VARCHAR(99),
  profilePhoto VARCHAR(255),
  friends INT,
  reviews INT,
  photos INT,
  elite VARCHAR(1),
  PRIMARY KEY (reviewerId)
);

CREATE TABLE reviews (
  reviewId INT NOT NULL AUTO_INCREMENT,
  restaurantId INT,
  reviewerId INT,
  stars INT,
  reviewDate VARCHAR(99),
  checkIns INT,
  textBody VARCHAR(9999),
  PRIMARY KEY (reviewId),
  FOREIGN KEY (restaurantId) REFERENCES restaurants(id),
  FOREIGN KEY (reviewerId) REFERENCES reviewers(reviewerId)
);
