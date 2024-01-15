import { Link, useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const countries = useLoaderData();

	return (
		<>
			<Link className="no-underline text-darker-blue dark:text-to-white" to="/">
				⬅ Back
			</Link>
			{countries.map((country) => {
				const countriesCurrency = Object.keys(country.currencies);
				const countriesNative = Object.keys(country.name.nativeName);
				const countriesLanguages = Object.keys(country.languages);
				return (
					<div key={country.name.common} className="country-page mt-[50px] flex justify-between items-center">
						<div className="country-page-flag h-[200px] rounded-xl overflow-hidden">
							<img
								className="h-full min-h-[200px] w-full min-w-[300px]"
								src={country.flags.png}
								alt={country.name.common}
							/>
						</div>
						<div className="country-page-container flex flex-col">
							<h1 className="text-3xl text-darker-blue font-semibold my-3 dark:text-to-white">
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
									<p className="text-darker-blue dark:text-to-white">
										Native name: {country.name.nativeName[countriesNative[0]].common}
									</p>
								</div>
								<div>
									<p className="text-darker-blue dark:text-to-white">
										Top level domain: {country.tld}
									</p>
									<p className="text-darker-blue dark:text-to-white">
										Currencies: {country.currencies[countriesCurrency[0]].name}
									</p>
									<p className="text-darker-blue dark:text-to-white">
										Languages: {country.languages[countriesLanguages[0]]}
									</p>
								</div>
							</div>
							{Array.isArray(country.borders) ? (
								<div className="border-country-container mt-[30px] text-darker-blue dark:text-to-white">
									Border countries:
									{country.borders.map((borderCountry) => (
										<div
											className="border-country inline-block bg-white text-dark-blue py-[5px] px-5 rounded-[5px] ml-2.5 dark:bg-dark-blue dark:text-to-white"
											key={borderCountry}
										>
											{borderCountry}
										</div>
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
	const { countryName } = params;

	const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

	if (!res.ok) {
		throw Error(`Failed to load country data with name: ${countryName}`);
	}

	return res.json();
};
