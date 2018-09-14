import React from 'react';
import styled from 'styled-components';


// import Stars from './Stars.jsx';
// import ReviewDate from './ReviewDate.jsx';
// import Text from './Text.jsx';


// const itemStyle = {
//   gridArea: 'review',
//   borderTop: '1px solid #D3D3D3'
// }
  




const Reviewer = styled.div`
  color: blue;

`

const Star = styled.span`
  color: #d32323;
  font-size: 20px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`

const DateFormat = styled.span`
  color: #999999;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 9px;
`

const TextBodyFormat = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 10px;
`

const Review = (props) => (
  	
  <div>
      <Reviewer>{ props.individualReview.reviewerId }</Reviewer>
      <Star>{ props.individualReview.stars }</Star>
      <DateFormat>{ props.individualReview.reviewDate } </DateFormat>
      <TextBodyFormat>{ props.individualReview.textBody } </TextBodyFormat>
  </div>
  
);

export default Review;