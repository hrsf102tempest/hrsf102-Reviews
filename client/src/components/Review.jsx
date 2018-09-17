import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// import Stars from './Stars.jsx';
// import ReviewDate from './ReviewDate.jsx';
// import Text from './Text.jsx';


const Reviewer = styled.span`
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

const LeftSideBar = styled.div`
  width: 37.5%;
`

const RightSideBar = styled.div`
  width: 62.5%;
`

const ReviewContainer = styled.div`
  display: flex;
`


const Review = (props) => (
  <ReviewContainer>
  	<LeftSideBar>
      <Reviewer>{ props.individualReview.reviewerId }</Reviewer>   
	</LeftSideBar>
	<RightSideBar>
	  <Star>{ props.individualReview.stars }</Star>
      <DateFormat> { moment.utc(props.individualReview.reviewDate).format("MM/DD/YYYY") } </DateFormat>
      <TextBodyFormat>{ props.individualReview.textBody } </TextBodyFormat>
  	</RightSideBar>
  </ReviewContainer>

);

export default Review;