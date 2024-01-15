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
		<nav className="navbar fixed top-0 flex h-[100px] w-full items-center justify-between bg-white dark:bg-dark-blue">
			<NavLink
				className="homepage ml-[25px] font-semibold text-darker-blue no-underline dark:text-to-white"
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
				className="nav-links mr-[25px] flex h-[30px] max-w-[1200px] cursor-pointer items-center justify-end gap-4"
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
