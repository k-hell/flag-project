import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';
import { useLoaderData } from 'react-router-dom';

export default function HomePage() {
	const allCountries = useLoaderData();
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
		} else if (country.name.common.toLowerCase().includes(searchQuery.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="home-page">
			<div className="country-search-container">
				<SearchBar value={searchQuery} onChange={handleSearchChange} />
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountryCard allCountries={allCountries} selectedRegion={selectedRegion} filterFunction={filterCountries} />
		</div>
	);
}

export const allCountriesLoader = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');

	if (!res.ok) {
		throw Error('Failed to load country data');
	}

	return res.json();
};
