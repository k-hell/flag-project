import React from 'react';
import CountryCard from '../components/CountryCard';

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="country-search-container">
				<div className="searchbar">Search for a country...</div>
				<div className="filterdropdown">
					Filter by Region
					<div className="dropdown-content">
						<a href="#">America</a>
						<a href="#">Asia</a>
						<a href="#">Europe</a>
						<a href="#">Africa</a>
						<a href="#">Oceania</a>
					</div>
				</div>
			</div>
			<CountryCard />
		</div>
	);
}
