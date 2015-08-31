import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLHomeView extends React.Component {
	constructor(props) {
		super(props);
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div className='sl-home-view'>
				<h1 className='sl-main-content--header'>
					<strong>WEB DEVELOPER</strong><span className='sl-main-content--header_accent'>&</span> SOFTWARE ENGINEER
				</h1>

				<SLButton buttonText='LEARN MY STORY' onClick={this._navigateToMyStory} to='about' />
			</div>
		);
	}
}