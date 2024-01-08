import React from 'react';

const Dropdown = ({ handleRegionChange }) => {
	return (
		<div className="filterdropdown">
			Filter by Region
			<div className="dropdown-content">
				<a href="#" onClick={() => handleRegionChange(null)}>
					All
				</a>
				<a href="#" onClick={() => handleRegionChange('Americas')}>
					Americas
				</a>
				<a href="#" onClick={() => handleRegionChange('Asia')}>
					Asia
				</a>
				<a href="#" onClick={() => handleRegionChange('Europe')}>
					Europe
				</a>
				<a href="#" onClick={() => handleRegionChange('Africa')}>
					Africa
				</a>
				<a href="#" onClick={() => handleRegionChange('Oceania')}>
					Oceania
				</a>
			</div>
		</div>
	);
};

export default Dropdown;
