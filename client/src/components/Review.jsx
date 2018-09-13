import React from 'react';

const Review = (props) => (
  <div>
    <div> { props.individualReview.stars } </div>
    <div> { props.individualReview.reviewDate } </div>
    <div> { props.individualReview.textBody } </div>
  </div>
);

export default Review;