import React from 'react';
import { RouteHandler } from 'react-router';
import SLButton from '../common/SLButton.js';

export default class SLMainContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='sl-main-content'>
				<RouteHandler />
			</div>
		);
	}
}