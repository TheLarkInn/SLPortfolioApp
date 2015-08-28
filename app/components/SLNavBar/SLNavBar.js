import React from 'react';

export default class SLNavBar extends React.Component {
	render() {
		return (
			<nav className='sl-navbar'>
				<div className='sl-navbar--item sl-button_nav-button'>
					About
				</div>
				<div className='sl-navbar--item sl-button_nav-button'>
					Contact
				</div>
			</nav>
		);
	}
}