import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTheme from '../contexts/theme';

export default function CountryPage() {
	const { country, allCountries } = useLoaderData();
	const [loading, setLoading] = useState(true);
	const { themeMode } = useTheme();

	const filteredBorderCountries = country[0].borders
		? allCountries.filter((borderCountryCode) => country[0].borders.includes(borderCountryCode.cca3))
		: [];

	const excludedCountries = [
		{ code: 'ATA', excluded: ['nativeName', 'currencies', 'languages'] },
		{ code: 'UNK', excluded: ['tld'] },
		{ code: 'BVT', excluded: ['currencies'] },
		{ code: 'HMD', excluded: ['currencies'] },
		{ code: country[0].cca3, excluded: [] }
	];

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500); //temporary
	}, []);

	return (
		<>
			<Link
				className={`back-button back-effect bg-white dark:bg-primary-dark-blue ${themeMode === 'light' ? 'back-btn-dark' : 'back-btn-light'}`}
				to="/"
			>
				<span>Back</span>
			</Link>
			<div className="country-page">
				<div className="country-page-flag">
					<img src={country[0].flags.png} alt={country[0].name.common} />
				</div>
				<div className="country-page-container">
					<h1>{country[0].name.common}</h1>
					<div className="country-page-context-container">
						<div className="w-full max-w-52">
							<p className="standard-text">
								<span className="font-semibold">Population:</span>
								{` ${country[0].population.toLocaleString()}`}
							</p>
							<p className="standard-text">
								<span className="font-semibold">Region:</span>
								{` ${country[0].region}`}
							</p>
							<p className="standard-text">
								<span className="font-semibold">Capital:</span>
								{Array.isArray(country[0].capital) && country[0].capital.length > 1
									? ` ${country[0].capital.join(', ')}`
									: ` ${country[0].capital ?? 'N/A'}`}
							</p>
							<p className="standard-text">
								<span className="font-semibold">Native name:</span>
								{!excludedCountries
									.find((c) => c.code === country[0].cca3)
									.excluded.includes('nativeName')
									? ` ${country[0].name.nativeName[Object.keys(country[0].name.nativeName)[0]].common}`
									: ` N/A`}
							</p>
						</div>
						<div className="w-full max-w-56">
							<p className="standard-text">
								<span className="font-semibold">Top level domain:</span>
								{!excludedCountries.find((c) => c.code === country[0].cca3).excluded.includes('tld')
									? ` ${country[0].tld[0]}`
									: ` N/A`}
							</p>
							<p className="standard-text">
								<span className="font-semibold">Currencies:</span>
								{!excludedCountries
									.find((c) => c.code === country[0].cca3)
									.excluded.includes('currencies')
									? ` ${country[0].currencies[Object.keys(country[0].currencies)[0]].name} ${country[0].currencies[Object.keys(country[0].currencies)[0]].symbol ? `(${country[0].currencies[Object.keys(country[0].currencies)[0]].symbol})` : ''}`
									: ` N/A`}
							</p>
							<p className="standard-text">
								<span className="font-semibold">Languages:</span>
								{!excludedCountries
									.find((c) => c.code === country[0].cca3)
									.excluded.includes('languages')
									? ` ${Object.values(country[0].languages).join(', ')}`
									: ` N/A`}
							</p>
						</div>
					</div>
					{Array.isArray(country[0].borders) ? (
						<div className="border-country-container">
							<span className="font-semibold">Border countries:</span>
							{loading ? (
								<p className="border-country">Loading border countries...</p>
							) : (
								filteredBorderCountries.map((borderCountry) => (
									<Link
										to={`../${borderCountry.cca3}`}
										className="border-country"
										key={borderCountry.cca3}
									>
										{`${borderCountry.flag} ${borderCountry.name.common}`}
									</Link>
								))
							)}
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
}

export const countriesLoader = async ({ params }) => {
	const { countryCode } = params;

	const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

	if (!countryRes.ok) {
		throw Error(`Failed to load country data with code: ${countryCode}`);
	}
	const countryData = await countryRes.json();

	const allCountriesRes = await fetch('https://restcountries.com/v3.1/all');
	if (!allCountriesRes.ok) {
		throw Error('Failed to load country data');
	}
	const allCountriesData = await allCountriesRes.json();

	return { country: countryData, allCountries: allCountriesData };
};
