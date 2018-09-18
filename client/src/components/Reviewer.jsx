import React from 'react';
import styled from 'styled-components';



const ReviewerName = styled.div`
  color: #0097EC;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 10px;
  font-weight: bold;
`

const ReviewerLocation = styled.div`
  color: black;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 10px;
  font-weight: bold;
`

const ProfilePhoto = styled.div`
  width: 25px,
  height: 25px
`


class Reviewer extends React.Component {
  render() {
    return (
      <div>
      <ProfilePhoto>
          {this.props.reviewer ? <img src = {this.props.reviewer.profilePhoto} /> : null}    
      </ProfilePhoto>

      <ReviewerName>
        {this.props.reviewer ? this.props.reviewer.reviewerName : null}      
      </ReviewerName>

      <ReviewerLocation>
      {this.props.reviewer ? this.props.reviewer.location : null}
      </ReviewerLocation>

      </div>

    );
  }
}



export default Reviewer;