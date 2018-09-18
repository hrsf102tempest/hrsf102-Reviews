import React from 'react';

const Stars = (props) => {
    if (props.number === 5) {
      return (
        <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_5.png" />
      )
    } else if (props.number === 4) {
        return (
          <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_4.png" /> 
        )
    } else if (props.number === 3) {
        return (
          <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_3.png" /> 
        )
    } else if (props.number === 2) {
        return (
          <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_2.png" /> 
        )          
    } else if (props.number === 1) {
        return (
          <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_1.png" /> 
        )
    } else {
        return (
          <img src ="https://s3-us-west-1.amazonaws.com/hahnyelp/small_0.png" /> 
        )      
    }
};
  
export default Stars;