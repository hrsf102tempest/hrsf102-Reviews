import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Stars from './Stars.jsx';
import Reviewer from './Reviewer.jsx';
import CheckIns from './CheckIns.jsx';


const DateFormat = styled.span`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  margin-left: 2px;
`

const TextBodyFormat = styled.div`


  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`

const TextBodyFormat2 = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
`

const TextBodyFormat3 = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
`
const TextBodyFormat4 = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
`

const LeftSideBar = styled.div`
  flex: 1;
`

const RightSideBar = styled.div`
  flex: 2;
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
      <DateFormat>
         { moment.parseZone(props.individualReview.reviewDate).format('l') } 
      </DateFormat>
      <CheckIns numberOfCheckIns={ props.individualReview.checkIns } />
	   
      <TextBodyFormat>
        { props.individualReview.textBody } 
      </TextBodyFormat>
      <TextBodyFormat2>
        { props.individualReview.textBody2 } 
      </TextBodyFormat2>
      <TextBodyFormat3>
        { props.individualReview.textBody3 } 
      </TextBodyFormat3>
      <TextBodyFormat4>
        { props.individualReview.textBody4 } 
      </TextBodyFormat4>
  	</RightSideBar>
 	
  </ReviewContainer>

);
 

export default Review;