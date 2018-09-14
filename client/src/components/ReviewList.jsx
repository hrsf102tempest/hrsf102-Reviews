import React from 'react';
import Review from './Review.jsx';
import styled, {css} from 'styled-components';




const ReviewList = (props) => (
  <div>
    <table>
    {
      props.reviews.map(review => <tr>
      	<td>
      	  hello	
      	</td>
      	<td><Review individualReview={review} />
      	</td>
      	</tr>)
    }
    </table>
  </div>
);

export default ReviewList;