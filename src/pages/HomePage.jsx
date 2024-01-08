import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';

export default function HomePage() {
	const [selectedRegion, setSelectedRegion] = useState(null);

	const handleRegionChange = (region) => {
		setSelectedRegion(region);
	};

	return (
		<div className="home-page">
			<div className="country-search-container">
				<div className="searchbar">Search for a country...</div>
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountryCard selectedRegion={selectedRegion} />
		</div>
	);
}
