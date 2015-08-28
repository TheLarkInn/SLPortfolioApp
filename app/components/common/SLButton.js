import React from 'react';

export default class SLButton extends React.Component {
	render() {
		return (
			<a onClick={this.props.onClick} className='sl-button sl-button_my-story sl-button_centered'>
				{this.props.buttonText}
			</a>
		);
	}
}