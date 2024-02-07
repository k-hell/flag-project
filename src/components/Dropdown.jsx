import React from 'react';
import useTheme from '../contexts/theme';

const Dropdown = ({ handleRegionChange }) => {
	const { themeMode } = useTheme();

	return (
		<div className="filterdropdown group">
			<span>Filter by Region</span>
			<div>
				{themeMode === 'light' ? (
					<img src="./images/arrow-down-dark.svg" alt="Dropdown Menu" />
				) : (
					<img src="./images/arrow-down-light.svg" alt="Dropdown Menu" />
				)}
			</div>
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
		</div>
	);
};

export default Dropdown;
