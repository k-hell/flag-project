import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
	const { name, flags, population, region, capital, cca3 } = country;

	return (
		<Link to={`${cca3}`} key={cca3}>
			<div className="country-card">
				<div className="flag">
					<img src={flags.png} alt="flag" />
				</div>
				<div className="country-info">
					<div className="country-name">{name.common}</div>
					<div className="country-population">
						<span className="population-title">Population:</span>
						<span className="population-value">{` ${population.toLocaleString()}`}</span>
					</div>
					<div className="country-region">
						<span className="region-title">Region:</span>
						<span className="region-value">{` ${region}`}</span>
					</div>
					<div className="country-capital">
						<span className="capital-title">Capital:</span>
						<span className="capital-value">
							{Array.isArray(capital) && capital.length > 1
								? ` ${capital.join(', ')}`
								: ` ${capital ?? 'N/A'}`}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
