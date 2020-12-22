import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
	const [menu, setAsOpen] = useState<boolean>(false);

	const toggleNav = () :void => {
		setAsOpen(!menu);
	};

	const show: string = menu ? 'show' : '';

	return (
		<div className='Navbar'>
			<nav className='navbar navbar-expand-sm'>
				<div className='container'>
					<button
						className='navbar-toggler ml-auto'
						type='button'
						aria-controls='navbarMobile'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={toggleNav}
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className={'collapse navbar-collapse ' + show} id='navbarMobile'>
						<ul id='menu-primary' className='navbar-nav ml-auto'>
							{/* Home */}
							<li onClick={toggleNav}>
								<NavLink exact to='/' activeClassName='active' className='nav-Link'>
									Home
								</NavLink>
							</li>
							{/* About */}
							<li onClick={toggleNav}>
								<NavLink exact to='/about' activeClassName='active' className='nav-Link'>
									About
								</NavLink>
							</li>
							{/* Portfolio */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/portfolio'
									activeClassName='active'
									className='nav-Link'
								>
									Portfolio
								</NavLink>
							</li>
							{/* Contact */}
							<li onClick={toggleNav}>
								<NavLink
									exact
									to='/contact'
									activeClassName='active'
									className='nav-Link'
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
