import React, { useState } from 'react';
import data from '../assets/data.json';

const CountryCard = () => {
	const [selectedFilterEnabled, setSelectedFilterEnabled] = useState(false);

	const countryOrder = ['Sweden', 'France', 'Spain', 'Portugal'];

	const selectedCountries = selectedFilterEnabled
		? data
				.filter((country) => countryOrder.includes(country.name))
				.sort((a, b) => countryOrder.indexOf(a.name) - countryOrder.indexOf(b.name))
		: data;

	return (
		<div className="countries-container">
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
};

export default CountryCard;
