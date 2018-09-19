import React from 'react';
import styled from 'styled-components';

const CheckInsIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  margin-bottom: 5px;
`

const CheckInsStyle = styled.div`
  color: #333333;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 12px;
  display: flex;
  flex-flow: row / nowrap;
  align-items: center
`

const CheckIns = (props) => {
    if ( props.numberOfCheckIns > 1) {
      return (
        <CheckInsStyle>
          <CheckInsIcon img src="https://s3-us-west-1.amazonaws.com/hahnyelp/checkin.png" />
            { props.numberOfCheckIns } check-ins
        </CheckInsStyle>
      );
      } else if ( props.numberOfCheckIns === 1 ) {
      return (
        <CheckInsStyle>
          <CheckInsIcon img src="https://s3-us-west-1.amazonaws.com/hahnyelp/checkin.png" />
            { props.numberOfCheckIns } check-in
        </CheckInsStyle>
      );
      } else {
        return (
           <CheckInsStyle>
          </CheckInsStyle>
        )
      }  
};
  
export default CheckIns;

 // <CheckInsStyle>
 //          <CheckInsIcon img src="https://s3-us-west-1.amazonaws.com/hahnyelp/checkin.png" />
 //          { props.numberOfCheckIns } check-ins
 //        </CheckInsStyle>