import React from 'react';
import styled from 'styled-components';

const ReviewerContainer = styled.div`
  width: 240px;
  display: flex;
  flex-flow: column / nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`
const LeftSideBar = styled.div`
  flex: 60px;
`

const RightSideBar = styled.div`
  flex: 160px;
`

const ReviewerName = styled.div`
  color: #0073BB;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.28571em;
  font-weight: bold;
`
const ReviewerLocation = styled.div`
  color: #4D4D4D;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: bold;
`
const ReviewerFriends = styled.div`
  color: #777777;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: bold;
`

const ImageStyle = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`
const FriendStyle = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`

const Reviewer  = (props) => (
  <ReviewerContainer>
    <LeftSideBar>
      <ImageStyle img src={ props.reviewer ? props.reviewer.profilePhoto : null } />
    </LeftSideBar>
    <RightSideBar>
	    <ReviewerName>
	       { props.reviewer ? props.reviewer.reviewerName : null }      
	    </ReviewerName>
	    <ReviewerLocation>
	      { props.reviewer ? props.reviewer.location : null }
	    </ReviewerLocation>
	    <ReviewerFriends>
	      <FriendStyle img src="https://s3-us-west-1.amazonaws.com/hahnyelp/friends.png" />
	        { props.reviewer ? props.reviewer.friends : null } friends
	    </ReviewerFriends>
    </RightSideBar>
  </ReviewerContainer>
);
  

export default Reviewer;