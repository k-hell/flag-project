import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const country = useLoaderData();
	const excludedCountries = ['ATA'];
	const [borderCountriesData, setBorderCountriesData] = useState([]);
	const [loading, setLoading] = useState(true);

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
			<Link className="text-darker-blue no-underline dark:text-to-white" to="/">
				⬅ Back
			</Link>
			<div className="country-page mt-[50px] flex items-center justify-between">
				<div className="country-page-flag h-[200px] overflow-hidden rounded-xl">
					<img
						className="h-full min-h-[200px] w-full min-w-[300px]"
						src={country[0].flags.png}
						alt={country[0].name.common}
					/>
				</div>
				<div className="country-page-container flex flex-col">
					<h1 className="my-3 text-3xl font-semibold text-darker-blue dark:text-to-white">
						{country[0].name.common}
					</h1>
					<div className="country-page-context-container flex justify-between gap-[200px]">
						<div>
							<p className="text-darker-blue dark:text-to-white">
								Population: {country[0].population.toLocaleString()}
							</p>
							<p className="text-darker-blue dark:text-to-white">Region: {country[0].region}</p>
							<p className="text-darker-blue dark:text-to-white">
								Capital:
								{Array.isArray(country[0].capital) && country[0].capital.length > 1
									? ` ${country[0].capital.join(', ')}`
									: ` ${country[0].capital ?? 'N/A'}`}
							</p>
							<p className="text-darker-blue dark:text-to-white">
								Native name:
								{!excludedCountries.includes(country[0].cca3)
									? ` ${country[0].name.nativeName[Object.keys(country[0].name.nativeName)[0]].common}`
									: ` N/A`}
							</p>
						</div>
						<div>
							<p className="text-darker-blue dark:text-to-white">Top level domain: {country[0].tld[0]}</p>
							<p className="text-darker-blue dark:text-to-white">
								Currencies:
								{!excludedCountries.includes(country[0].cca3)
									? ` ${country[0].currencies[Object.keys(country[0].currencies)[0]].name} ( ${country[0].currencies[Object.keys(country[0].currencies)[0]].symbol} )`
									: ` N/A`}
							</p>
							<p className="text-darker-blue dark:text-to-white">
								Languages:
								{!excludedCountries.includes(country[0].cca3)
									? ` ${Object.values(country[0].languages).join(', ')}`
									: ` N/A`}
							</p>
						</div>
					</div>
					{Array.isArray(country[0].borders) ? (
						<div className="border-country-container mt-[30px] flex w-[500px] flex-wrap items-center gap-2 text-darker-blue dark:text-to-white">
							<span className="mr-5">Border countries:</span>
							{loading ? (
								<p className="border-country inline-block rounded-[5px] bg-white px-5 py-[5px] text-dark-blue dark:bg-dark-blue dark:text-to-white">
									Loading border countries...
								</p>
							) : (
								country[0].borders.map((borderCountryCode, index) => (
									<Link
										to={`/${borderCountryCode}`}
										className="border-country inline-block rounded-[5px] bg-white px-5 py-[5px] text-dark-blue dark:bg-dark-blue dark:text-to-white"
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
