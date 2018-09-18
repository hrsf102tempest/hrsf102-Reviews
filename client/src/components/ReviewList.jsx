import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';



// const Container = styled.div`
//   display: grid;
//   gridTemplateColumns: 40% 60%;
//   width: 350px;
//   gridGap: 20px;
// `  

// const ReviewStyle = styled.div`
//   columnStart: 2;
// `

const ReviewList = (props) => (
  <div>
    {
      props.reviews.map(review => <Review individualReview={review} reviewer={props.reviewers[review.reviewerId]} />)
    }
  </div>
);

export default ReviewList;