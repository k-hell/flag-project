import React from 'react';
import { Link } from 'react-router-dom';
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
			<Link className="nav-button nav-effect" to="/">
				The Flag App
			</Link>
			<Link to="/">
				<div>
					{themeMode === 'light' ? (
						<img className="logo" src="./images/techover-logo-dark.png" alt="Techover" />
					) : (
						<img className="logo" src="./images/techover-logo.png" alt="Techover" />
					)}
				</div>
			</Link>
			<div className="nav-button nav-effect mr-6 max-w-40" onClick={onClickBtn}>
				<div className="nav-links">
					{themeMode === 'light' ? (
						<img src="./images/moon-bordered.svg" alt="Theme Changer" />
					) : (
						<img src="./images/moon.svg" alt="Theme Changer" />
					)}
					<p className="standard-text">{themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
