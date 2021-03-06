import { Link } from 'react-router-dom';

const Error: React.FC = () => {
	return (
		<div className='Error'>
			<div className='jumbotron jumbotron-fluid error-jumbotron'>
				<h1>
					<span className='main-color'>404</span> Page Not Found
				</h1>
				<h6>Sorry but the page you are looking for is not available.</h6>
				<Link to='/'>
					<button className='primary-btn'>Return home</button>
				</Link>
			</div>
		</div>
	);
};

export default Error;
