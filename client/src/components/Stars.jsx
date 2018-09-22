import React from 'react';
import styled from 'styled-components';

const StarStyle = styled.img`
  width: 102px;
  height: 18px;
  margin-right: 4px;
`

const Stars = (props) => {
    if (props.number === 5) {
      return (
        <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_5.png" />
      )
    } else if (props.number === 4) {
        return (
          <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_4.png" /> 
        )
    } else if (props.number === 3) {
        return (
          <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_3.png" /> 
        )
    } else if (props.number === 2) {
        return (
          <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_2.png" /> 
        )          
    } else if (props.number === 1) {
        return (
          <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_1.png" /> 
        )
    } else {
        return (
          <StarStyle img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/large_0.png" /> 
        )      
    }
};
  
export default Stars;