import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLWorkView extends React.Component {
	constructor(props) {
		super(props);
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div className='sl-work-view'>
				<h3>WORK</h3>
				<div className='sl-work-view--workgrid'>
					
				</div>
			</div>
		);
	}
}