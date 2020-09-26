import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ReactColors from '../assets/images/react-colors.png';
import ReactAuth from '../assets/images/react-auth.png';
import LibertyBeans from '../assets/images/liberty-beans.png';
import GoogleBooks from '../assets/images/GoogleBooks.png';
import Omega from '../assets/images/omega.png';
import TimeMachine from '../assets/images/time_machine.png';

const Projects = (props) => {
	const { className = 'portfolio-modal' } = props;
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
	const [modal4, setModal4] = useState(false);
	const [modal5, setModal5] = useState(false);
	const [modal6, setModal6] = useState(false);
	const toggle1 = () => setModal1(!modal1);
	const toggle2 = () => setModal2(!modal2);
	const toggle3 = () => setModal3(!modal3);
	const toggle4 = () => setModal4(!modal4);
	const toggle5 = () => setModal5(!modal5);
	const toggle6 = () => setModal6(!modal6);

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
						<div className='portfolio-item mx-auto' onClick={toggle1}>
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
					<Modal
						size='lg'
						isOpen={modal1}
						toggle={toggle1}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle1}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>

					{/* Project 2 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle2}>
							<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
								<div className='portfolio-item-caption-content text-center text-white'>
									<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
								</div>
							</div>
							<img className='img-fluid portfolio-img' src={ReactAuth} alt='React-Auth' />
							<p className='project-title'>React User Authentication</p>
						</div>
					</div>
					<Modal
						size='lg'
						isOpen={modal2}
						toggle={toggle2}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle2}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>

					{/* Project 3 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle3}>
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
					<Modal
						size='lg'
						isOpen={modal3}
						toggle={toggle3}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle3}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>

					{/* Project 4 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle4}>
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
					<Modal
						size='lg'
						isOpen={modal4}
						toggle={toggle4}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle4}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>

					{/* Project 5 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle5}>
							<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
								<div className='portfolio-item-caption-content text-center text-white'>
									<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
								</div>
							</div>
							<img className='img-fluid portfolio-img' src={Omega} alt='Omega' />
							<p className='project-title'>Omega</p>
						</div>
					</div>
					<Modal
						size='lg'
						isOpen={modal5}
						toggle={toggle5}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle5}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>
					{/* Project 6 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle6}>
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

					<Modal
						size='lg'
						isOpen={modal6}
						toggle={toggle6}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								onClick={toggle6}
								type='button'
								className='close'
								aria-label='Close'
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
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Projects;
