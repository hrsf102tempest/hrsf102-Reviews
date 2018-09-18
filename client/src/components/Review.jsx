import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Stars from './Stars.jsx';
import Reviewer from './Reviewer.jsx';


// import Stars from './Stars.jsx';
// import ReviewDate from './ReviewDate.jsx';
// import Text from './Text.jsx';


// const Reviewer = styled.span`
//   color: blue;
// `

// const Star = styled.span`
//   color: #d32323;
//   font-size: 20px;
//   font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
// `

const DateFormat = styled.span`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
`

const TextBodyFormat = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
`

const LeftSideBar = styled.div`
  flex: 1;
`

const RightSideBar = styled.div`
  flex: 3;
`

const ReviewContainer = styled.div`
  width: 629px;
  margin: 15px;
  border-top: 1px solid #E6E6E6;
  padding-top: 12px;
  display: flex;
  flex-flow: column / nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`



const Review = (props) => (
  <ReviewContainer>
  	<LeftSideBar>
      <Reviewer reviewer={ props.reviewer } />   
	</LeftSideBar>
	<RightSideBar>
	  <Stars number={ props.individualReview.stars } />
      <DateFormat> { moment.parseZone(props.individualReview.reviewDate).format('l') } </DateFormat>
      <TextBodyFormat>{ props.individualReview.textBody } </TextBodyFormat>
  	</RightSideBar>
 	
  </ReviewContainer>
);
 

export default Review;