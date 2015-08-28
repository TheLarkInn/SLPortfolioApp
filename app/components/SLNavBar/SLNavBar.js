import React from 'react';

export default class SLNavBar extends React.Component {
	render() {
		return (
			<nav className='sl-navbar'>
				<a href='' className='sl-navbar--item sl-button_nav-button'>
					ABOUT
				</a>
				<a href='' className='sl-navbar--item sl-button_nav-button'>
					CONTACT
				</a>
			</nav>
		);
	}
}