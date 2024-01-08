import React from 'react';
import data from '../assets/data.json';

const CountryCard = ({ selectedRegion }) => {
	const filteredData = selectedRegion ? data.filter((country) => country.region === selectedRegion) : data;

	return (
		<div className="countries-container">
			{filteredData.map((country) => (
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
