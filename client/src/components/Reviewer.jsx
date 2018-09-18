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
  flex: 69px;
`

const RightSideBar = styled.div`
  flex: 147px;
`

const ReviewerName = styled.div`
  color: #0097EC;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.28571em;
  font-weight: bold;
`
const ReviewerLocation = styled.div`
  color: black;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: bold;
`

const ImageStyle = styled.img`
  width: 60px;
  height: 60px;
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
        </RightSideBar>
      </ReviewerContainer>

    );
  

export default Reviewer;