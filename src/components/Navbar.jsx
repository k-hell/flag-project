import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../contexts/theme';
import { getAllCountries } from '../services/countryService';

function Navbar() {
	const { themeMode, lightTheme, darkTheme } = useTheme();
	const [tag, setTag] = useState([]);
	const navigate = useNavigate();

	const onClickBtn = () => {
		if (themeMode === 'light') {
			darkTheme();
		} else {
			lightTheme();
		}
	};

	const debugAllCountries = async () => {
		try {
			const allCountries = await getAllCountries();
			const newTag = allCountries.map((country) => country.cca3);
			setTag(newTag);

			console.log('All Countries:', newTag);

			// Navigate to each country in sequence
			newTag.forEach((countryCode, index) => {
				setTimeout(
					() => {
						console.log(`Navigating to ${countryCode}`);
						// Assuming your route path is "/country/:countryCode"
						navigate(`/${countryCode}`);
					},
					(index + 1) * 2000
				); // Delay navigation by 1 second (adjust as needed)
			});
		} catch (error) {
			console.error('Error fetching all countries:', error.message);
		}
	};

	return (
		<nav className="navbar">
			<Link className="homepage" to="/">
				The Flag App
			</Link>
			<div>
				{themeMode === 'light' ? (
					<img className="logo" src="./images/techover-logo-dark.png" alt="Techover" />
				) : (
					<img className="logo" src="./images/techover-logo.png" alt="Techover" />
				)}
			</div>
			<div className="nav-links">
				<button className="standard-text" onClick={debugAllCountries}>
					Debug All Countries
				</button>
				{console.log('Tag:', tag)}
				<div onClick={onClickBtn}>
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
