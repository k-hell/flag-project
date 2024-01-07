import React from 'react';
import CountryCard from '../components/CountryCard';

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="searchbar">Search for a country...</div>
			<div className="filterbyregion">Filter by Region</div>
			<CountryCard />
		</div>
	);
}
