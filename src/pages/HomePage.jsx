import React, { useState } from 'react';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';

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
		<div className="home-page pb-[70px]">
			<div className="country-search-container flex justify-between m-auto mt-0 mb-5 max-w-[1260px] 3card:max-w-[940px] 2card:max-w-[620px] 1card:flex-col 1card:gap-[25px]">
				<SearchBar value={searchQuery} onChange={handleSearchChange} />
				<Dropdown handleRegionChange={handleRegionChange} />
			</div>
			<CountryCard selectedRegion={selectedRegion} filterFunction={filterCountries} />
		</div>
	);
}
