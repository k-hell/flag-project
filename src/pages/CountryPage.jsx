import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTheme from '../contexts/theme';

export default function CountryPage() {
	const country = useLoaderData();
	const [borderCountriesData, setBorderCountriesData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { themeMode } = useTheme();

	const excludedCountries = [
		{ code: 'ATA', excluded: ['nativeName', 'currencies', 'languages'] },
		{ code: 'UNK', excluded: ['tld'] },
		{ code: 'BVT', excluded: ['currencies'] },
		{ code: 'HMD', excluded: ['currencies'] },
		{ code: country[0].cca3, excluded: [] }
	];

	const loadAdditionalData = async () => {
		if (Array.isArray(country[0].borders)) {
			try {
				const borderDataPromises = country[0].borders.map(async (borderCountryCode) => {
					const response = await fetch(`https://restcountries.com/v3.1/alpha/${borderCountryCode}`);
					if (!response.ok) {
						throw Error(`Failed to load data for country code: ${borderCountryCode}`);
					}
					return response.json();
				});

				const borderCountriesData = await Promise.all(borderDataPromises);
				setBorderCountriesData(borderCountriesData);
			} catch (error) {
				console.error('Error loading additional data for borders:', error.message);
			} finally {
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		loadAdditionalData();
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
						<div>
							<p className="standard-text">Population: {country[0].population.toLocaleString()}</p>
							<p className="standard-text">Region: {country[0].region}</p>
							<p className="standard-text">
								Capital:
								{Array.isArray(country[0].capital) && country[0].capital.length > 1
									? ` ${country[0].capital.join(', ')}`
									: ` ${country[0].capital ?? 'N/A'}`}
							</p>
							<p className="standard-text">
								Native name:
								{!excludedCountries
									.find((c) => c.code === country[0].cca3)
									.excluded.includes('nativeName')
									? ` ${country[0].name.nativeName[Object.keys(country[0].name.nativeName)[0]].common}`
									: ` N/A`}
							</p>
						</div>
						<div>
							<p className="standard-text">
								Top level domain:
								{!excludedCountries.find((c) => c.code === country[0].cca3).excluded.includes('tld')
									? ` ${country[0].tld[0]}`
									: ` N/A`}
							</p>
							<p className="standard-text">
								Currencies:
								{!excludedCountries
									.find((c) => c.code === country[0].cca3)
									.excluded.includes('currencies')
									? ` ${country[0].currencies[Object.keys(country[0].currencies)[0]].name} ( ${country[0].currencies[Object.keys(country[0].currencies)[0]].symbol} )`
									: ` N/A`}
							</p>
							<p className="standard-text">
								Languages:
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
							<span>Border countries:</span>
							{loading ? (
								<p className="border-country">Loading border countries...</p>
							) : (
								country[0].borders.map((borderCountryCode, index) => (
									<Link
										to={`/${borderCountryCode}`}
										className="border-country"
										key={borderCountryCode}
										reloadDocument
									>
										{`${borderCountriesData[index][0].flag} ${borderCountriesData[index][0].name.common}`}
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

	const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

	if (!res.ok) {
		throw Error(`Failed to load country data with code: ${countryCode}`);
	}

	return res.json();
};
