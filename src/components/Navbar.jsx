import React from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../contexts/theme';

function Navbar() {
	const { themeMode, lightTheme, darkTheme } = useTheme();

	const onClickBtn = () => {
		if (themeMode === 'light') {
			darkTheme();
		} else {
			lightTheme();
		}
	};

	return (
		<nav className="navbar flex justify-between items-center bg-white h-[100px] fixed top-0 w-full dark:bg-dark-blue">
			<NavLink
				className="homepage no-underline text-darker-blue ml-[25px] font-semibold dark:text-to-white"
				to="/"
			>
				The Flag App
			</NavLink>
			<div>
				{themeMode === 'light' ? (
					<img className="darkLogo 1card:hidden" src="./images/techover-logo-dark.png" alt="Techover" />
				) : (
					<img className="lightLogo 1card:hidden" src="./images/techover-logo.png" alt="Techover" />
				)}
			</div>
			<div
				className="nav-links flex gap-4 justify-end items-center max-w-[1200px] h-[30px] mr-[25px] cursor-pointer"
				onClick={onClickBtn}
			>
				<div>
					{themeMode === 'light' ? (
						<img src="./images/moon-bordered.svg" alt="Theme Changer" />
					) : (
						<img src="./images/moon.svg" alt="Theme Changer" />
					)}
				</div>
				<p className="text-darker-blue dark:text-to-white">
					{themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
				</p>
			</div>
		</nav>
	);
}

export default Navbar;
