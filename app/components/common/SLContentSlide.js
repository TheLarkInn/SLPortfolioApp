import React from 'react';

export default class SLContentSlide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='sl-content-slide'>
				{this.props.children}
			</div>
		);
	}
}