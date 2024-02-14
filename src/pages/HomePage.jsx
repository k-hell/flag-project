import React, { useState } from 'react';
import CountriesGrid from '../components/CountriesGrid';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';
import useRegionCountries from '../hooks/useRegionCountries';

export default function HomePage() {
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const { countries, loading } = useRegionCountries(selectedRegion);

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

	const filteredData = countries.filter(filterCountries).sort((a, b) => a.name.common.localeCompare(b.name.common));

	return (
		<div className="home-page">
			<div className="country-search-container">
				<SearchBar value={searchQuery} onChange={handleSearchChange} />
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountriesGrid loading={loading} filteredData={filteredData} />
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
