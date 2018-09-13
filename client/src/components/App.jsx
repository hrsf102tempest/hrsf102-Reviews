import React from 'react';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    listOfReviews: []
  };  
  }

  getReviews(restaurantId) {
    $.ajax({
      url: `http://localhost:3003/restaurants/${restaurantId}`,
      method: 'GET',
      success: (data) => {
      	console.log('GETTING DATA!!!!')
        this.setState({
          listOfReviews: data
        })
      },
      error: function (err) {
        console.log('err', err);
      },
    });
  }

  componentDidMount() {
  	this.getReviews(55);
  }

  render() {
  	return (
	   <div>
	     <ReviewList reviews={this.state.listOfReviews} />
	   </div>
	 )
   }

}

export default App;