import React from 'react';
import SLSocialLinks from '../SLSocialLinks/SLSocialLinks.js';

export default class SLFooter extends React.Component {
	render() {
		return (
			<footer className='sl-footer'>
				<SLSocialLinks />
			</footer>
		); 
	}
}