require("font-awesome-webpack");
import React from 'react';
import SLNavBar from './components/SLNavBar/SLNavBar.js';
import SLMainContent from './components/SLMainContent/SLMainContent.js';
import SLFooter from './components/SLFooter/SLFooter.js';

// Styles
import './App.less';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state={activeSlideIndex: 0};
	}

	updateSlideIndex = (newIndex) => {
		this.setState({activeSlideIndex: newIndex});
	}

	render() {
		return (
			<div className='sl-portfolio-app'>
				<header className='sl-portfolio-app--header'>
					<SLNavBar onNavChanged={this.updateSlideIndex.bind(this)} activeNavIndex={this.state.activeSlideIndex} />
				</header>
				<SLMainContent onSlideChange={this.updateSlideIndex.bind(this)} activeSlideIndex={this.state.activeSlideIndex}/>
				<SLFooter />	
			</div>
		);
	}

}