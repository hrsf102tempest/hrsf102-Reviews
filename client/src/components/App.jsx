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



  componentDidMount() {
    // function that gets all search params
    const parseQueryString = () => {
      const str = window.location.search;
      const objURL = {};
      str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
        objURL[$1] = $3;
      });
      return objURL;
    };
    
    const params = parseQueryString();
    const restaurantId = params.id;
    $.ajax({
      url: `http://127.0.0.1:3003/restaurants/${restaurantId}`,
      // url: `http://127.0.0.1:3004/business/12`,
      method: 'GET',
      success: data => {
        const parsedData = JSON.parse(data);
        // console.log('Data for this business', businessData);
        this.setState({
          listOfReviews: parsedData
        });
      },
      error: function(err) {
        console.log('err', err);
      }
    });

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


  getReviews(restaurantId) {
    $.ajax({
      url: `http://localhost:3003/restaurants/${restaurantId}`,
      method: 'GET',
      success: (data) => {
        var parsedData = JSON.parse(data);
        this.setState({
          listOfReviews: parsedData
        })
      },
      error: function (err) {
        console.log('err', err);
      },
    });
  }

  //  getReviewers() {
  //   $.ajax({
  //     url: `http://localhost:3003/reviewers`,
  //     method: 'GET',
  //     success: (data) => {
  //       this.setState({
  //         reviewers: data
  //       })
  //     },
  //     error: function (err) {
  //       console.log('err', err);
  //     },
  //   });
  // }

  // componentDidMount() {
  // 	this.getReviews(115);
  // 	this.getReviewers();
  // }

  render() {
  	return (
	   <div>
	     <ReviewList reviews={this.state.listOfReviews} reviewers={this.state.reviewers} />
	   </div>
	 )
   }

}

export default App;