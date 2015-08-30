import React from 'react';
import SLButton from '../common/SLButton.js';

export default class SLAboutView extends React.Component {
	constructor(props) {
		super(props);
	}

	_navigateToMyStory = (event) => {
		console.log("Goto my story");
	}

	render() {
		return (
			<div className='sl-about-view'>
				<div className='sl-about-view--dialogue'>				
					<div className="sl-about-view--dialogue_reverse-colors">
						<h2>ABOUT SEAN LARKIN</h2>
						<p>
							My name is Sean and I've been a Software Engineer and Web Developer. 
							I am self-taught and proud of it. In fact, I started out as a Technical Support Representative at a local tech company. 
							The everyday frustration with only being able to work around a persons issue, drove me to want to become a developer instead.
						</p>
						<p>
							Now almost 4 years later, I have impacted customers in markets from large to small; Working on large-scale eCommerce websites, 
							to small blogs, business to business applications and even Mac/iOS-Native Medical Management Software.
						</p>
					</div>
					<div className='sl-about-view--dialogue_normal-colors'>
						<h2>I BELIEVE IN...</h2>
						<h3>READIBILITY</h3>
						<p>
							The ability to read, understand, and maintain code is just as important as its execution. 
							I write my code in the DAMP philosphy so that anyone, can look into any line, and see what is trying to be accomplished.
							When you write with readable code, you tell a story of what you are trying to achieve through each line. 
							It not only makes you better at understanding the problems you need to accomplish, but makes it easier for other to support and maintain your code in the future.
						</p>
						<h3>MENTORSHIP</h3>
						<p>
							I would not be where I am today if it was not for fellow co-workers who sacrificed their own time to mentor me.
							I believe strongly in mentoring those around you, by offering what ever skills you can. A collaboarative learning environment not only fosters growth from within an organization, 
							but it also unifies eachother.
						</p>
						<p>
							Regardless of what is going on, I will always try to give help to those who need it. Whether it be pointing them towards documentation, paired coding, code-shadowing, or simply talking out the issue at hand, the end-goal is to help others become better at what they do. 
						</p>
						<h3>RAW. HARD. WORK.</h3>
						<p>
							Since I was very young, my mom told me that anyone can do anything they want as long as they work hard, focus, and do their best to their abilities. 
							I have lived and died by hard work. 
							As a self-taught programmer, hard-work and quick learning has been a key role in my career success. Regardless of the task I am working on, I know that as long as I give 110%, that assuridly the outcome will be positive.
						</p>
						<h3>THE END-USER</h3>
						<p>
							One of the most satisfying parts of what I do is that I make a direct impact on the end-user. I take pride knowing that what I have done has made their experience more positive. 
							Ever line of code I write, every scrum task, every design I implement, and every redline I review, I constantly reminding myself:
						</p>
						<b>
							"What are we trying to accomplish, and is this the best expereience?"
						</b> 
						<p>
							Although the road traveled for the end user is not always the easiest road,
							it is the road worth taken. Companies and their Employees who are customer-centric, succeed. 
						</p>					
					</div>
				</div>
			</div>
		);
	}
}