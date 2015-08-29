import React from 'react';

export default class SLNavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeNavIndex: this.props.activeNavIndex
		};
	}

	_navItemWasSelected(index, event) {
		event.preventDefault();
		this.props.onNavChanged(index);
	}

	render() {
		let navItems = ['HOME', 'ABOUT', 'WORK', 'CONTACT'].map( (item, index) => {
			let activeClass = '';

			if (this.props.activeNavIndex == index) {
				activeClass = 'sl-button__active';
			}

			return (
				<a href='' key={index} onClick={this._navItemWasSelected.bind(this, index)} className={'sl-navbar--item sl-button_nav-button ' + activeClass}>
					{item}
				</a>
			);

		});


		return (
			<nav className='sl-navbar'>
				{navItems}
			</nav>
		);
	}
}