import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLMainContent extends React.Component {

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div className='sl-main-content'>
				<h1 className='sl-main-content--header'>
					<strong>WEB DEVELOPER</strong>& SOFTWARE ENGINEER
				</h1>

				<SLButton buttonText='LEARN MY STORY' onClick={this._navigateToMyStory} />
			</div>
		);
	}
}