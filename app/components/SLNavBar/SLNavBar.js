import React from 'react';
import { Link } from 'react-router';

export default class SLNavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeNavIndex: this.props.activeNavIndex
		};
	}

	render() {
		let navItems = ['home', 'about', 'work', 'contact'].map( (item, index) => {

			return (
				<Link 
					to={item} 
                    key={index} 
                    className={'sl-navbar--item sl-button_nav-button '}>
					{item.toUpperCase()}
				</Link>
			);
		});

		return (
			<nav className='sl-navbar'>
				{navItems}
			</nav>
		);
	}
}