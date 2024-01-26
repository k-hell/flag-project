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
		<nav className="navbar">
			<NavLink className="homepage" to="/">
				The Flag App
			</NavLink>
			<div>
				{themeMode === 'light' ? (
					<img className="logo" src="./images/techover-logo-dark.png" alt="Techover" />
				) : (
					<img className="logo" src="./images/techover-logo.png" alt="Techover" />
				)}
			</div>
			<div className="nav-links" onClick={onClickBtn}>
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
