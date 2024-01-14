import React from 'react';
import { NavLink } from 'react-router-dom';
import lightLogo from '/images/techover-logo.png';
import darkLogo from '/images/techover-logo-dark.png';
import ThemeBtn from './ThemeBtn';
import useTheme from '../contexts/theme';

function Navbar() {
	const { themeMode } = useTheme();

	return (
		<nav className="navbar flex justify-between items-center bg-white h-[100px] fixed top-0 w-full dark:bg-[#2b3844]">
			<NavLink
				className="homepage no-underline text-darker-blue ml-[25px] font-semibold dark:text-[#f2f2f2]"
				to="/"
			>
				The Flag App
			</NavLink>
			<div>
				{themeMode === 'light' ? (
					<img className="darkLogo" src={darkLogo} alt="Techover" />
				) : (
					<img className="lightLogo" src={lightLogo} alt="Techover" />
				)}
			</div>
			<div className="nav-links flex gap-4 justify-end items-center max-w-[1200px] h-[30px] mr-[25px]">
				<ThemeBtn />
			</div>
		</nav>
	);
}

export default Navbar;
