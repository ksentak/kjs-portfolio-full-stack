import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.min.css';

interface data {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const { register, errors, handleSubmit, reset } = useForm();

	const toastifySuccess = () :void => {
		toast('Form sent!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback success'
		});
	};

	const toastifyFail = () :void => {
		toast('Form failed to send!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback fail'
		});
	};

	const onSubmit = (data: data) => {
		// Send form email
		axios
			.post('/send', {
				data: {
					name: data.name,
					email: data.email,
					subject: data.subject,
					message: data.message
				}
			})
			.then((res) => {
				if (res.data.msg === 'success') {
					// Send form
					reset();
					toastifySuccess();
				} else if (res.data.msg === 'fail') {
					//  Notify user of send failure
					toastifyFail();
				}
			})
			.catch(function (res) {
				console.log(res);
			});
	};

	return (
		<div className='ContactForm'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 text-center'>
						<div className='contactForm'>
							<form
								id='contact-form'
								onSubmit={handleSubmit(onSubmit)}
								method='POST'
								noValidate={true}
							>
								{/* Row 1 of form */}
								<div className='row formRow'>
									<div className='col-6'>
										<input
											type='text'
											name='name'
											ref={register({
												required: { value: true, message: 'Please enter your name' },
												maxLength: {
													value: 30,
													message: 'Please use 30 characters or less'
												}
											})}
											className='form-control formInput'
											placeholder='Name'
										></input>
										{errors.name && (
											<span className='errorMessage'>{errors.name.message}</span>
										)}
									</div>
									<div className='col-6'>
										<input
											type='email'
											name='email'
											ref={register({
												required: true,
												pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
											})}
											className='form-control formInput'
											placeholder='Email address'
										></input>
										{errors.email && (
											<span className='errorMessage'>
												Please enter a valid email address
											</span>
										)}
									</div>
								</div>
								{/* Row 2 of form */}
								<div className='row formRow'>
									<div className='col'>
										<input
											type='text'
											name='subject'
											ref={register({
												required: { value: true, message: 'Please enter a subject' },
												maxLength: {
													value: 75,
													message: 'Subject cannot exceed 75 characters'
												}
											})}
											className='form-control formInput'
											placeholder='Subject'
										></input>
										{errors.subject && (
											<span className='errorMessage'>{errors.subject.message}</span>
										)}
									</div>
								</div>
								{/* Row 3 of form */}
								<div className='row formRow'>
									<div className='col'>
										<textarea
											rows={3}
											name='message'
											ref={register({
												required: true
											})}
											className='form-control formInput'
											placeholder='Message'
										></textarea>
										{errors.message && (
											<span className='errorMessage'>Please enter a message</span>
										)}
									</div>
								</div>
								<button className='primary-btn' type='submit'>
									Submit
								</button>
							</form>
						</div>
						<ToastContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
