import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLAboutView extends React.Component {
	constructor(props) {
		super(props);
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div clasName='sl-about-view'>
				
				<h3> About </h3>

				<p>ABOUT ME!</p>

			</div>
		);
	}
}