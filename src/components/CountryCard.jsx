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
		<div className="countries-container flex flex-wrap gap-5 justify-center">
			{loading
				? [1, 2, 3, 4, 5, 6, 7, 8].map((loadingIndex) => (
						<div
							className="country-card-loading bg-white w-[300px] h-[310px] rounded-xl dark:bg-[#2b3844]"
							key={loadingIndex}
						></div>
				  ))
				: filteredData.map((country) => (
						<Link to={`${country.name}`} key={country.name}>
							<div
								className="country-card bg-white max-w-[300px] rounded-xl overflow-hidden dark:bg-[#2b3844]"
								key={country.name}
							>
								<div className="flag h-[200px]">
									<img
										className="h-full min-h-[200px] w-full min-w-[300px]"
										src={country.flags.png}
										alt="flag"
									/>
								</div>
								<div className="country-info py-[15px] pl-[25px]">
									<div className="country-name font-semibold mb-[5px] text-[#202c36] dark:text-[#f2f2f2]">
										{country.name}
									</div>
									<div className="country-population py-[5px]">
										<span className="population-title font-semibold text-[#202c36] dark:text-[#f2f2f2]">
											Population:
										</span>
										<span className="population-value text-[#202c36] dark:text-[#f2f2f2]">
											{` ${country.population}`}
										</span>
									</div>
									<div className="country-region py-[5px]">
										<span className="region-title font-semibold text-[#202c36] dark:text-[#f2f2f2]">
											Region:
										</span>
										<span className="region-value text-[#202c36] dark:text-[#f2f2f2]">
											{` ${country.region}`}
										</span>
									</div>
									<div className="country-capital py-[5px]">
										<span className="capital-title font-semibold text-[#202c36] dark:text-[#f2f2f2]">
											Capital:
										</span>
										<span className="capital-value text-[#202c36] dark:text-[#f2f2f2]">
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
