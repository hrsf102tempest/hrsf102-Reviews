import React from 'react';
import Stars from './Stars.jsx';
import ReviewDate from './ReviewDate.jsx';
import Text from './Text.jsx';


const Review = (props) => (
  <div>
    <span> 
      <Stars number = { props.individualReview.stars } />
    </span>
    <span>
      <reviewDate date = { props.individualReview.reviewDate } />
    </span>
    <div> 
      <Text body = { props.individualReview.textBody } />
    </div>
  </div>
);

export default Review;