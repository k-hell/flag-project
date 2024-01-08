import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';

export default function HomePage() {
	const [selectedRegion, setSelectedRegion] = useState(null);

	const handleRegionChange = (region) => {
		setSelectedRegion(region);
	};

	return (
		<div className="home-page">
			<div className="country-search-container">
				<div className="searchbar">Search for a country...</div>
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
			</div>
			<CountryCard selectedRegion={selectedRegion} />
		</div>
	);
}
