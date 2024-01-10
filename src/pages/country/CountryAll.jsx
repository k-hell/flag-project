import { Link, useLoaderData } from 'react-router-dom';

export default function CountryAll() {
	const allCountries = useLoaderData();

	return (
		<div className="country-all">
			{allCountries.map((country) => (
				<div>
					<Link to={`${country.name.common}`} key={country.name.common}>
						<h1>{country.name.common}</h1>
					</Link>
				</div>
			))}
		</div>
	);
}

export const countriesAllLoader = async () => {
	const res = await fetch(`https://restcountries.com/v3.1/name/all`);

	if (!res.ok) {
		throw Error(`Failed to load all country data`);
	}

	return res.json();
};
