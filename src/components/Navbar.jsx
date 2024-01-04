import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/images/techover-logo.png';

function Navbar() {
	return (
		<nav className="navbar">
			<h3>The Flag App</h3>
			<img className="logo" src={logo} alt="Techover" />
			<div className="nav-links">
				<NavLink className="nav-link" to="/">
					Home
				</NavLink>
				<NavLink className="nav-link" to="country">
					Country
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
