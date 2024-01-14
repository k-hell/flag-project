import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const CountryCard = ({ allCountries, selectedRegion, filterFunction }) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = Math.floor(Math.random() * 300) + 200;
		setTimeout(() => {
			setCountries(allCountries);
			setLoading(false);
		}, timer); // Only temporary, remove later
	}, []);

	const filteredData = allCountries
		.filter((country) => !selectedRegion || country.region === selectedRegion)
		.filter(filterFunction);

	return (
		<div className="countries-container flex flex-wrap gap-5 justify-center">
			{loading
				? [1, 2, 3, 4, 5, 6, 7, 8].map((loadingIndex) => (
						<div
							className="country-card-loading bg-white w-[300px] h-[310px] rounded-xl dark:bg-dark-blue 3card:h-[361px]"
							key={loadingIndex}
						></div>
				  ))
				: filteredData.map((country) => (
						<Link to={`${country.name.common}`} key={country.name.common}>
							<div
								className="country-card bg-white max-w-[300px] rounded-xl overflow-hidden dark:bg-dark-blue"
								key={country.name.common}
							>
								<div className="flag h-[200px]">
									<img
										className="h-full min-h-[200px] w-full min-w-[300px]"
										src={country.flags.png}
										alt="flag"
									/>
								</div>
								<div className="country-info py-[15px] pl-[25px]">
									<div className="country-name font-semibold mb-[5px] text-darker-blue dark:text-to-white">
										{country.name.common}
									</div>
									<div className="country-population py-[5px]">
										<span className="population-title font-semibold text-darker-blue dark:text-to-white">
											Population:
										</span>
										<span className="population-value text-darker-blue dark:text-to-white">
											{` ${country.population.toLocaleString()}`}
										</span>
									</div>
									<div className="country-region py-[5px]">
										<span className="region-title font-semibold text-darker-blue dark:text-to-white">
											Region:
										</span>
										<span className="region-value text-darker-blue dark:text-to-white">
											{` ${country.region}`}
										</span>
									</div>
									<div className="country-capital py-[5px]">
										<span className="capital-title font-semibold text-darker-blue dark:text-to-white">
											Capital:
										</span>
										<span className="capital-value text-darker-blue dark:text-to-white">
											{` ${country.capital}`}
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
