import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Stars from './Stars.jsx';


// import Stars from './Stars.jsx';
// import ReviewDate from './ReviewDate.jsx';
// import Text from './Text.jsx';


const Reviewer = styled.span`
  color: blue;
`

// const Star = styled.span`
//   color: #d32323;
//   font-size: 20px;
//   font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
// `

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


class Review extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      numberOfStars: props.individualReview.stars,
      reviewer: props.individualReview.reviewerId,
      text: props.individualReview.textBody,
      date: moment.utc(props.individualReview.reviewDate).format("MM/DD/YYYY")
    };
  }   

  render() {
    return (
	  <ReviewContainer>
	  	<LeftSideBar>
	      <Reviewer>{ this.state.reviewer }</Reviewer>   
		</LeftSideBar>
		<RightSideBar>
		  <Stars number={ this.state.numberOfStars } />
	      <DateFormat> { this.state.date } </DateFormat>
	      <TextBodyFormat>{ this.state.text } </TextBodyFormat>
	  	</RightSideBar>
	  </ReviewContainer>
    );
  }

}

export default Review;