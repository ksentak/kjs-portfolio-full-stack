import PDF from '../assets/files/KeatonSentakResume.pdf';
import Headshot from '../assets/images/profile-headshot.jpg';

const Info: React.FC = () => {
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
            A full-stack developer with experience building modern web applications and custom software solutions for clients. Educated at both Rutgers University and the University of Pennsylvania LPS Coding Bootcamp. Looking to contribute long-term organizational value through my knowledge of various programming technologies. Passionate about working in a collaborative environment to create meaningful web applications and solve programming challenges that benefit the end user.
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
