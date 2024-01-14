import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/images/techover-logo.png';
import ThemeBtn from './ThemeBtn';

function Navbar() {
	return (
		<nav className="navbar">
			<NavLink className="homepage" to="/">
				<p>The Flag App</p>
			</NavLink>
			<img className="logo" src={logo} alt="Techover" />
			<div className="nav-links">
				<ThemeBtn />
			</div>
		</nav>
	);
}

export default Navbar;
