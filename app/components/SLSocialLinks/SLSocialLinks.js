import React from 'react';

export default class SLSocialLinks extends React.Component {
	render() {
		return (
			<div className='sl-social-links'>
				<a href='http://careers.stackoverflow.com/seanlarkin' className='fa icon-large fa-stack-overflow fa-2x'>
					<span>Stack Overflow</span>
				</a>				
				<a href='https://twitter.com/TheLarkInn' className='fa icon-large fa-twitter-square fa-2x'>
					<span>Twitter</span>
				</a>				
				<a href='http://linkedin.com/in/seanthomaslarkin/' className='fa icon-large fa-linkedin-square fa-2x'>
					<span>LinkedIn</span>
				</a>
				<a href='https://github.com/TheLarkInn' className='fa icon-large fa-github-square fa-2x'>
					<span>Github</span>
				</a>
				<a href='https://medium.com/@TheLarkInn' className='fa icon-large fa-medium fa-2x'>
					<span>Medium</span>
				</a>
				<a href='http://codepen.io/TheLarkInn/' className='fa icon-large fa-codepen fa-2x'>
					<span>Codepen</span>
				</a>
			</div>
		); 
	}
}