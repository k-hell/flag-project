import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';

export default function HomePage() {
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');

	const handleRegionChange = (region) => {
		setSelectedRegion(region);
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const filterCountries = (country) => {
		if (searchQuery === '') {
			return true;
		} else if (country.name.toLowerCase().includes(searchQuery.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="home-page">
			<div className="country-search-container">
				<input
					text="text"
					placeholder="Search for a country..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="searchbar"
				/>
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountryCard selectedRegion={selectedRegion} filterFunction={filterCountries} />
		</div>
	);
}
