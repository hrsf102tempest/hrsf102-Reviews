import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';



// const Container = styled.container`
//   display: grid;
//   grid-template-columns: 1fr 2fr;
// `  
// const ReviewItem = styled.item`
//   display: grid;
//   grid-template-columns: 1fr 2fr;
// `  


const ReviewList = (props) => (
  <div>
    {
      props.reviews.map(review => <Review individualReview={review}/>)
    }
  </div>
);

export default ReviewList;