import React from 'react';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';
import styled from 'styled-components';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfReviews: [],
      reviewers: []
    };  
  }

  getReviews(restaurantId) {
    $.ajax({
      url: `http://localhost:3003/restaurants/${restaurantId}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          listOfReviews: data
        })
      },
      error: function (err) {
        console.log('err', err);
      },
    });
  }

   getReviewers() {
    $.ajax({
      url: `http://localhost:3003/reviewers`,
      method: 'GET',
      success: (data) => {
        this.setState({
          reviewers: data
        })
      },
      error: function (err) {
        console.log('err', err);
      },
    });
  }

  componentDidMount() {
  	this.getReviews(59);
  	this.getReviewers();
  }

  render() {
  	return (
	   <div>
	     <ReviewList reviews={this.state.listOfReviews} reviewers={this.state.reviewers} />
	   </div>
	 )
   }

}

export default App;