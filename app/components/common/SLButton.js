import React from 'react';
import { Link } from 'react-router';

export default class SLButton extends React.Component {
	render() {
		return (
			<Link onClick={this.props.onClick} to={this.props.to} className='sl-button sl-button_my-story sl-button_centered'>
				{this.props.buttonText}
			</Link>
		);
	}
}