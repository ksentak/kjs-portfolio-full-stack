import React from 'react';
import PDF from '../assets/files/Keaton_Sentak_Resume.pdf';
import Headshot from '../assets/images/profile-headshot.jpg';

const Info = () => {
	return (
		<div className='Info'>
			<div className='container'>
				{/* Row 1 */}
				<div className='row'>
					<div className='col-12'>
						<h1 className='section-title'>
							<span className='main-color'>About</span> Me
						</h1>
					</div>
				</div>
				{/* Row 2 */}
				<div className='row text-md-left text-center'>
					<div className='col-md-6 mb-3'>
						<img src={Headshot} className='img-fluid profile-picture' alt='Profile' />
					</div>
					<div className='col-md-6 about-section'>
						<p className='about-text'>
							A Full-Stack Developer and graduate of both Rutgers University and the
							University of Pennsylvania LPS Coding Bootcamp looking to contribute
							long-term organizational value through my knowledge of both front and
							back-end technologies. Well-versed in various web technologies such as
							JavaScript, Node.js, React.js, MongoDB and MySQL used to generate fully
							functional websites, web applications, and databases. Equipped to work
							collaboratively in a team setting to ensure optimal results for user and
							technology centered designs.
						</p>
						<a href={PDF} target='_blank' rel='noopener noreferrer'>
							<button className='resume-btn mt-2 mb-3'>Download Resume</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
