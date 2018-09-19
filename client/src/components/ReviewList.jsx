import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';

const ReviewList = (props) => (
  <div>
    {
      props.reviews.map(review => <Review individualReview={review} reviewer={props.reviewers[review.reviewerId]} />)
    }
  </div>
);

export default ReviewList;