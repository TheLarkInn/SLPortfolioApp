import React from 'react';
import SLButton from '../common/SLButton.js';
import SLContentSlide from '../common/SLContentSlide.js';
import SLHomeView from './SLHomeView.js';
import SLAboutView from './SLAboutView.js';
import SLWorkView from './SLWorkView.js';
import SLContactView from './SLWorkView.js';

export default class SLMainContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeSlideIndex: this.props.activeSlideIndex
		};
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		let activeSlide = [
			<SLContentSlide>
				<SLHomeView />
			</SLContentSlide>,
			<SLContentSlide>
				<SLAboutView />
			</SLContentSlide>,
			<SLContentSlide>
				<SLWorkView />
			</SLContentSlide>,
			<SLContentSlide>
				<SLContactView />
			</SLContentSlide>,
		];

		return (
			<div className='sl-main-content'>
				{activeSlide[this.props.activeSlideIndex]}
			</div>
		);
	}
}