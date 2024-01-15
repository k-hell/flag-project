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
		<div className="home-page pb-[70px]">
			<div className="country-search-container m-auto mb-5 mt-0 flex max-w-[1260px] justify-between 3card:max-w-[940px] 2card:max-w-[620px] 1card:flex-col 1card:gap-[25px]">
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
