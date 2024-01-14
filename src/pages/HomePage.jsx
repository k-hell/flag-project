import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

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
			{/* temporary - remove later - start */}
			<div className="flex justify-center m-6">
				<Card />
			</div>
			{/* temporary - remove later - end */}
			<div className="country-search-container">
				<SearchBar value={searchQuery} onChange={handleSearchChange} />
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountryCard selectedRegion={selectedRegion} filterFunction={filterCountries} />
		</div>
	);
}
