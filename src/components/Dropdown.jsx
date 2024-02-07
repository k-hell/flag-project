import React, { useState, useRef, useEffect } from 'react';
import useTheme from '../contexts/theme';

const Dropdown = ({ handleRegionChange }) => {
	const { themeMode } = useTheme();
	const [showWindow, setShowWindow] = useState(false);
	const dropdownRef = useRef(null);

	const handleClick = () => {
		setShowWindow(!showWindow);
	};

	const handleWindowClick = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowWindow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleWindowClick);

		return () => {
			document.removeEventListener('mousedown', handleWindowClick);
		};
	}, []);

	return (
		<div className="dropdown" ref={dropdownRef}>
			<div className="dropdown-toggle" onClick={handleClick}>
				<span>Filter by Region</span>
				<div>
					{themeMode === 'light' ? (
						<img src="./images/arrow-down-dark.svg" alt="Dropdown Menu" />
					) : (
						<img src="./images/arrow-down-light.svg" alt="Dropdown Menu" />
					)}
				</div>
			</div>
			{showWindow && (
				<div className="dropdown-content">
					<div className="dropdown-link rounded-t-xl" onClick={() => handleRegionChange(null)}>
						All
					</div>
					<div className="dropdown-link" onClick={() => handleRegionChange('Americas')}>
						Americas
					</div>
					<div className="dropdown-link" onClick={() => handleRegionChange('Asia')}>
						Asia
					</div>
					<div className="dropdown-link" onClick={() => handleRegionChange('Europe')}>
						Europe
					</div>
					<div className="dropdown-link" onClick={() => handleRegionChange('Africa')}>
						Africa
					</div>
					<div className="dropdown-link rounded-b-xl" onClick={() => handleRegionChange('Oceania')}>
						Oceania
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
