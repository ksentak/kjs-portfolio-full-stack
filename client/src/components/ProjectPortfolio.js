import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Projects.css';
import ReactColors from '../assets/images/react-colors.png';
import ReactAuth from '../assets/images/react-auth.png';
import LibertyBeans from '../assets/images/liberty-beans.png';
import GoogleBooks from '../assets/images/GoogleBooks.png';
import Omega from '../assets/images/omega.png';
import TimeMachine from '../assets/images/time_machine.png';

class ProjectPortfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal1: false,
			showModal2: false,
			showModal3: false,
			showModal4: false,
			showModal5: false,
			showModal6: false
		};
		this.toggleModal1 = this.toggleModal1.bind(this);
		this.toggleModal2 = this.toggleModal2.bind(this);
		this.toggleModal3 = this.toggleModal3.bind(this);
		this.toggleModal4 = this.toggleModal4.bind(this);
		this.toggleModal5 = this.toggleModal5.bind(this);
		this.toggleModal6 = this.toggleModal6.bind(this);
	}

	toggleModal1() {
		this.setState({ showModal1: !this.state.showModal1 });
	}

	toggleModal2() {
		this.setState({ showModal2: !this.state.showModal2 });
	}

	toggleModal3() {
		this.setState({ showModal3: !this.state.showModal3 });
	}

	toggleModal4() {
		this.setState({ showModal4: !this.state.showModal4 });
	}

	toggleModal5() {
		this.setState({ showModal5: !this.state.showModal5 });
	}

	toggleModal6() {
		this.setState({ showModal6: !this.state.showModal6 });
	}

	// exitAnyModal() {
	// 	this.setState({
	// 		showModal1: false,
	// 		showModal2: false,
	// 		showModal3: false,
	// 		showModal4: false,
	// 		showModal5: false,
	// 		showModal6: false
	// 	});
	// }

	render() {
		const show1 = this.state.showModal1 ? 'show' : '';
		const show2 = this.state.showModal2 ? 'show' : '';
		const show3 = this.state.showModal3 ? 'show' : '';
		const show4 = this.state.showModal4 ? 'show' : '';
		const show5 = this.state.showModal5 ? 'show' : '';
		const show6 = this.state.showModal6 ? 'show' : '';

		const modalStyle1 = this.state.showModal1 ? 'block' : 'none';
		const modalStyle2 = this.state.showModal2 ? 'block' : 'none';
		const modalStyle3 = this.state.showModal3 ? 'block' : 'none';
		const modalStyle4 = this.state.showModal4 ? 'block' : 'none';
		const modalStyle5 = this.state.showModal5 ? 'block' : 'none';
		const modalStyle6 = this.state.showModal6 ? 'block' : 'none';

		return (
			<div className='Projects'>
				<div className='container'>
					{/* Row 1 */}
					<div className='row'>
						<div className='col-12'>
							<h1 className='section-title'>
								<span className='main-color'>Portfolio</span> Projects
							</h1>
						</div>
					</div>
					{/* Row 2 */}
					<div className='row text-center'>
						{/* Project 1 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal1'
								onClick={this.toggleModal1}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img
									className='img-fluid portfolio-img'
									src={ReactColors}
									alt='React-Colors'
								/>
								<p className='project-title'>React Colors</p>
							</div>
						</div>

						{/* Project 2 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal2'
								onClick={this.toggleModal2}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img
									className='img-fluid portfolio-img'
									src={ReactAuth}
									alt='React-Auth'
								/>
								<p className='project-title'>React User Authentication</p>
							</div>
						</div>

						{/* Project 3 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal3'
								onClick={this.toggleModal3}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img
									className='img-fluid portfolio-img'
									src={LibertyBeans}
									alt='Liberty Beans Coffee'
								/>
								<p className='project-title'>Liberty Beans Coffee</p>
							</div>
						</div>
						{/* Project 4 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal4'
								onClick={this.toggleModal4}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img
									className='img-fluid portfolio-img'
									src={GoogleBooks}
									alt='Google Books App'
								/>
								<p className='project-title'>Google Books</p>
							</div>
						</div>
						{/* Project 5 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal5'
								onClick={this.toggleModal5}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img className='img-fluid portfolio-img' src={Omega} alt='Omega' />
								<p className='project-title'>Omega</p>
							</div>
						</div>
						{/* Project 6 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal6'
								onClick={this.toggleModal6}
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'>
										<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
									</div>
								</div>
								<img
									className='img-fluid portfolio-img'
									src={TimeMachine}
									alt='Time Machine'
								/>
								<p className='project-title'>Time Machine</p>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modals */}
				{/* Portfolio Modal 1 */}
				<div
					className={'portfolio-modal modal fade ' + show1}
					id='portfolioModal1'
					tabIndex='-1'
					role='dialog'
					// aria-hidden='true'
					style={{ display: `${modalStyle1}` }}
					onClick={this.toggleModal1}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal1}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												React-Colors
											</h2>
											{/* Portfolio Modal - Image */}
											<img
												className='img-fluid modal-img mb-3'
												src={ReactColors}
												alt='React Colors'
											/>
											{/* Portfolio Modal - Text */}
											<p>
												A react application that allows users to view, create, and delete
												different color palettes. The user can copy any individual color's
												HEX, RGB, or RGBA code to their clipboard, as well as adjust the
												shade of each palette.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://react-colors-01.netlify.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/react-colors'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Portfolio Modal 2 */}
				<div
					className={'portfolio-modal modal fade ' + show2}
					id='portfolioModal2'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
					style={{ display: `${modalStyle2}` }}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal2}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												React User Authentication
											</h2>
											{/* Portfolio Modal - Image */}
											<img
												className='img-fluid modal-img mb-3'
												src={ReactAuth}
												alt='React Auth'
											/>
											{/* Portfolio Modal - Text */}
											<p>
												A user authentication application I built using React, Passport,
												and JWT that serves as a template for others and allows a user to
												sign up/log in. Input validation is included in and deployment to
												Heroku is made easy.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://react-user-auth.herokuapp.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/react-user-auth'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 3 */}
				<div
					className={'portfolio-modal modal fade ' + show3}
					id='portfolioModal3'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
					style={{ display: `${modalStyle3}` }}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal3}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												Liberty Beans Coffee
											</h2>
											{/* Portfolio Modal - Image */}
											<img
												className='img-fluid modal-img mb-3'
												src={LibertyBeans}
												alt='Liberty Beans'
											/>
											{/* Portfolio Modal - Text */}
											<p>
												A small business coffee shop website that I built to display my
												skills in front-end web development. This website was created with
												a mobile-first design and a simple user interface, in order to
												provide a better user experience. Additionally, I developed a
												React version of this site.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://ksentak.github.io/LB-Coffee/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/LB-Coffee'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 4 */}
				<div
					className={'portfolio-modal modal fade ' + show4}
					id='portfolioModal4'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
					style={{ display: `${modalStyle4}` }}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal4}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												Google Books
											</h2>
											{/* Portfolio Modal - Image */}
											<img
												className='img-fluid modal-img mb-3'
												src={GoogleBooks}
												alt='Google Books'
											/>
											{/* Portfolio Modal - Text */}
											<p>
												A MERN application in which a user can search for different books
												using the Google Books API. Once the user searches for a specific
												book, results are rendered and the user can either favorite a book
												or view more info about the book.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://google-books-app-01.herokuapp.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/google-books-app'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 5 */}
				<div
					className={'portfolio-modal modal fade ' + show5}
					id='portfolioModal5'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
					style={{ display: `${modalStyle5}` }}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal5}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>Omega</h2>
											{/* Portfolio Modal - Image */}
											<img className='img-fluid modal-img mb-3' src={Omega} alt='Omega' />
											{/* Portfolio Modal - Text */}
											<p>
												A full-stack MERN application which allows users to create, plan,
												and keep track of their weekly workouts.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://omegaworkout01.herokuapp.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/omegawo-app'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 6 */}
				<div
					className={'portfolio-modal modal fade ' + show6}
					id='portfolioModal6'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
					style={{ display: `${modalStyle6}` }}
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={this.toggleModal6}
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-lg-8'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												Time Machine
											</h2>
											{/* Portfolio Modal - Image */}
											<img
												className='img-fluid modal-img mb-3'
												src={TimeMachine}
												alt='Time Machine'
											/>
											{/* Portfolio Modal - Text */}
											<p>
												The Time Machine app provides users with an easy, fun way to learn
												about history. The user enters a year into the search box, and a
												historical snapshot from that time will be generated. The data
												returned by the app includes top movies, TV shows and news
												headlines from the search year, as well as a Gif related to the
												time period.
											</p>
											{/* Modal Links */}
											<div className='modal-links text-center'>
												<div className='view-site'>
													<a
														href='https://ksentak.github.io/time-machine/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faExternalLinkAlt}
																className='modal-icon'
															></FontAwesomeIcon>
															View Site
														</button>
													</a>
												</div>
												<div className='view-code'>
													<a
														href='https://github.com/ksentak/time-machine'
														target='_blank'
														rel='noopener noreferrer'
													>
														<button className='modal-btn modal-site-btn'>
															<FontAwesomeIcon
																icon={faCode}
																className='modal-icon'
															></FontAwesomeIcon>
															View Code
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End of Modals */}
			</div>
		);
	}
}

export default ProjectPortfolio;
