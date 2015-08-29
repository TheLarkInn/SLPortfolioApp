import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLContactView extends React.Component {
	constructor(props) {
		super(props);
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div clasName='sl-contact-view'>
				<h3>CONTACT</h3>
			</div>
		);
	}
}