import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const CountryCard = ({ selectedRegion, filterFunction }) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = Math.floor(Math.random() * 300) + 200;
		setTimeout(() => {
			setCountries(data);
			setLoading(false);
		}, timer); // Only temporary, remove later
	}, []);

	const filteredData = data
		.filter((country) => !selectedRegion || country.region === selectedRegion)
		.filter(filterFunction);

	return (
		<div className="countries-container">
			{loading
				? [1, 2, 3, 4, 5, 6, 7, 8].map((loadingIndex) => (
						<div className="country-card-loading" key={loadingIndex}></div>
				  ))
				: filteredData.map((country) => (
						<Link to={`country/${country.name}`} key={country.name}>
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
						</Link>
				  ))}
		</div>
	);
};

export default CountryCard;
