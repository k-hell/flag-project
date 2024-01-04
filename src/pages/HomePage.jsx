import React from 'react';
import data from '../data.json';

export default function HomePage() {
	return (
		<div className="home-page">
			{data.map((item) => (
				<div className="card">
					{/* <img src={item.flag} alt="flag" /> */}
					<div className="card-body">
						<h2>{item.name}</h2>
						<p>
							<strong>Population:</strong> {item.population}
						</p>
						<p>
							<strong>Region:</strong> {item.region}
						</p>
						<p>
							<strong>Capital:</strong> {item.capital}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
