import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => (
  <div>
    {
      props.reviews.map(review => <Review individualReview={review}/>)
    }
  </div>
);

export default ReviewList;