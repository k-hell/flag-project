import React from 'react';
import CountryCard from '../components/CountryCard';

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="country-search-container">
				<div className="searchbar">Search for a country...</div>
				<div className="filterdropdown">Filter by Region</div>
			</div>
			<CountryCard />
		</div>
	);
}
