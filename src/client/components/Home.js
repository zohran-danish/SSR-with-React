import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<div>I am the best home component</div>
				<button onClick={() => console.log('Hi there!')}>Press me </button>
			</div>
		);
	}
}

export default Home;
