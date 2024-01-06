import React from 'react';
import data from '../assets/data.json';

export default function HomePage() {
	// Define the order of countries
	const countryOrder = ['Sweden', 'France', 'Spain', 'Portugal'];

	// Filter the data to include multiple countries
	const selectedCountries = data.filter((country) => countryOrder.includes(country.name));

	// Sort the selected countries based on the defined order
	selectedCountries.sort((a, b) => countryOrder.indexOf(a.name) - countryOrder.indexOf(b.name));

	return (
		<div className="home-page">
			<div className="searchbar">Search for a country...</div>
			<div className="filterbyregion">Filter by Region</div>

			{selectedCountries.map((country) => (
				<div className="country-card" key={country.name}>
					<div className="flag">
						<img src={country.flags.png} alt="flag" />
					</div>
					<div className="country-info">
						<div className="country-name">{country.name}</div>
						<div className="country-population">
							<span className="population-title">Population: </span>
							<span className="population-value">{country.population}</span>
						</div>
						<div className="country-region">
							<span className="region-title">Region: </span>
							<span className="region-value">{country.region}</span>
						</div>
						<div className="country-capital">
							<span className="capital-title">Capital: </span>
							<span className="capital-value">{country.capital}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
