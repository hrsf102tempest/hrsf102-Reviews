import React from 'react';
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
      url: 'http://localhost:3003/restaurants/10',
      method: 'GET',
      success: (data) => {
      	console.log('THIS BE THE DATA', data);
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
  	this.getReviews(10);
  }

  render() {
  	return (
	 <div>
	    {this.state.listOfReviews}YOYOYOYO
	 </div>
	 )
  }
}

export default App;