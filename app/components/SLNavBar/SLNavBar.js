import React from 'react';

export default class SLNavBar extends React.Component {
	render() {
		return (
			<nav className="sl-navbar">
				<div className="sl-navbar--item">
					About
				</div>
				<div className="sl-navbar--item">
					Contact
				</div>
			</nav>
		);
	}
}