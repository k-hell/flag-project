import React from 'react';

const Dropdown = ({ handleRegionChange }) => {
	return (
		<div className="filterdropdown">
			Filter by Region
			<div className="dropdown-content">
				<a onClick={() => handleRegionChange(null)}>All</a>
				<a onClick={() => handleRegionChange('Americas')}>Americas</a>
				<a onClick={() => handleRegionChange('Asia')}>Asia</a>
				<a onClick={() => handleRegionChange('Europe')}>Europe</a>
				<a onClick={() => handleRegionChange('Africa')}>Africa</a>
				<a onClick={() => handleRegionChange('Oceania')}>Oceania</a>
			</div>
		</div>
	);
};

export default Dropdown;
