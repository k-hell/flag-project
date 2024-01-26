import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';
import useRegionCountries from '../hooks/useRegionCountries';

const CountryCard = ({ allCountries, selectedRegion, filterFunction }) => {
	const { countries, loading } = useRegionCountries(selectedRegion);

	const excludedCountries = [
		{
			/* 'Antarctica' */
		}
	];

	const filteredData = allCountries
		.filter((country) => !selectedRegion || country.region === selectedRegion)
		.filter(filterFunction)
		.filter((country) => !excludedCountries.includes(country.name.common))
		.sort((a, b) => a.name.common.localeCompare(b.name.common));

	return (
		<div className="countries-container">
			{loading
				? [1, 2, 3, 4, 5, 6, 7, 8].map((loadingIndex) => (
						<div className="country-card-loading" key={loadingIndex}></div>
					))
				: filteredData.map((country) => (
						<Link to={`${country.cca3}`} key={country.cca3}>
							<div className="country-card">
								<div className="flag">
									<img src={country.flags.png} alt="flag" />
								</div>
								<div className="country-info">
									<div className="country-name">{country.name.common}</div>
									<div className="country-population">
										<span className="population-title">Population:</span>
										<span className="population-value">
											{` ${country.population.toLocaleString()}`}
										</span>
									</div>
									<div className="country-region">
										<span className="region-title">Region:</span>
										<span className="region-value">{` ${country.region}`}</span>
									</div>
									<div className="country-capital">
										<span className="capital-title">Capital:</span>
										<span className="capital-value">
											{Array.isArray(country.capital) && country.capital.length > 1
												? ` ${country.capital.join(', ')}`
												: ` ${country.capital ?? 'N/A'}`}
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
		</div>
	);
};

export default CountryCard;
