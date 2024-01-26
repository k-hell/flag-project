import React from 'react';

const Dropdown = ({ handleRegionChange }) => {
	return (
		<div className="filterdropdown group">
			Filter by Region
			<div className="dropdown-content">
				<a className="dropdown-link rounded-t-xl" onClick={() => handleRegionChange(null)}>
					All
				</a>
				<a className="dropdown-link" onClick={() => handleRegionChange('Americas')}>
					Americas
				</a>
				<a className="dropdown-link" onClick={() => handleRegionChange('Asia')}>
					Asia
				</a>
				<a className="dropdown-link" onClick={() => handleRegionChange('Europe')}>
					Europe
				</a>
				<a className="dropdown-link" onClick={() => handleRegionChange('Africa')}>
					Africa
				</a>
				<a className="dropdown-link rounded-b-xl" onClick={() => handleRegionChange('Oceania')}>
					Oceania
				</a>
			</div>
		</div>
	);
};

export default Dropdown;
