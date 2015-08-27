import React from 'react';
import SLNavBar from './components/SLNavBar/SLNavBar.js';

// Styles
import './App.less';

export default class App extends React.Component {
	render() {
		return (
			<div className='sl-portfolio-app'>
				<header className='sl-portfolio-app--header'>
					<SLNavBar />
				</header>



				
			</div>
		);
	}

}