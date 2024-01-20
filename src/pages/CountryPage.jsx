import { Link, useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const countries = useLoaderData();

	return (
		<>
			<Link className="text-darker-blue no-underline dark:text-to-white" to="/">
				⬅ Back
			</Link>
			{countries.map((country) => {
				const excludedCountries = ['ATA'];

				const excludedFilter = countries.filter((country) => !excludedCountries.includes(country.cca3));

				const excludedCountry = excludedFilter.length > 0;
				let countriesCurrency, countriesNative, countriesLanguages;

				if (excludedCountry) {
					countriesCurrency = Object.keys(country.currencies);
					countriesNative = Object.keys(country.name.nativeName);
					countriesLanguages = Object.keys(country.languages);
				}

				return (
					<div key={country.name.common} className="country-page mt-[50px] flex items-center justify-between">
						<div className="country-page-flag h-[200px] overflow-hidden rounded-xl">
							<img
								className="h-full min-h-[200px] w-full min-w-[300px]"
								src={country.flags.png}
								alt={country.name.common}
							/>
						</div>
						<div className="country-page-container flex flex-col">
							<h1 className="my-3 text-3xl font-semibold text-darker-blue dark:text-to-white">
								{country.name.common}
							</h1>
							<div className="country-page-context-container flex justify-between gap-[200px]">
								<div>
									<p className="text-darker-blue dark:text-to-white">
										Population: {country.population.toLocaleString()}
									</p>
									<p className="text-darker-blue dark:text-to-white">Region: {country.region}</p>
									<p className="text-darker-blue dark:text-to-white">
										Capital:
										{Array.isArray(country.capital) && country.capital.length > 1
											? ` ${country.capital.join(', ')}`
											: ` ${country.capital ?? 'N/A'}`}
									</p>
									{excludedCountry ? (
										<p className="text-darker-blue dark:text-to-white">
											Native name: {country.name.nativeName[countriesNative[0]].common}
										</p>
									) : (
										''
									)}
								</div>
								<div>
									<p className="text-darker-blue dark:text-to-white">
										Top level domain: {country.tld}
									</p>
									{excludedCountry ? (
										<p className="text-darker-blue dark:text-to-white">
											Currencies: {country.currencies[countriesCurrency[0]].name}
										</p>
									) : (
										''
									)}
									{excludedCountry ? (
										<p className="text-darker-blue dark:text-to-white">
											Languages: {country.languages[countriesLanguages[0]]}
										</p>
									) : (
										''
									)}
								</div>
							</div>
							{Array.isArray(country.borders) ? (
								<div className="border-country-container mt-[30px] flex w-[500px] flex-wrap items-center gap-2 text-darker-blue dark:text-to-white">
									<span className="mr-5">Border countries:</span>
									{country.borders.map((borderCountry) => (
										<Link
											to={`/${borderCountry}`}
											className="border-country inline-block rounded-[5px] bg-white px-5 py-[5px] text-dark-blue dark:bg-dark-blue dark:text-to-white"
											key={borderCountry}
										>
											{borderCountry}
										</Link>
									))}
								</div>
							) : (
								''
							)}
						</div>
					</div>
				);
			})}
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
