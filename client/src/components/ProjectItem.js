import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = (props) => {
	const {
		title,
		imgSrc,
		imgAlt,
		viewCode,
		viewSite,
		projectDescription
	} = props;

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	return (
		<>
			{/* Project */}
			<div className='col-lg-4 col-md-6'>
				<div className='portfolio-item mx-auto' onClick={toggle}>
					<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
						<div className='portfolio-item-caption-content text-center text-white'>
							<FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
						</div>
					</div>
					<img className='img-fluid portfolio-img' src={imgSrc} alt={imgAlt} />
					<p className='project-title'>{title}</p>
				</div>
			</div>

			{/* Modal */}
			<Modal
				size='lg'
				isOpen={modal}
				toggle={toggle}
				className='portfolio-modal'
				role='dialog'
			>
				<div className='modal-content'>
					<button
						onClick={toggle}
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
										{title}
									</h2>
									{/* Portfolio Modal - Image */}
									<img
										className='img-fluid modal-img mb-3'
										src={imgSrc}
										alt={imgAlt}
									/>
									{/* Portfolio Modal - Text */}
									<p>{projectDescription}</p>
									{/* Modal Links */}
									<div className='modal-links text-center'>
										<div className='view-site'>
											<a
												href={viewSite}
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
												href={viewCode}
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
		</>
	);
};

export default ProjectItem;
