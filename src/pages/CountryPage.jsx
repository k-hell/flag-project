import { Link, useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const countries = useLoaderData();

	return (
		<>
			<Link className="no-underline text-[#202c36] dark:text-[#f2f2f2]" to="/">
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
							<h1 className="text-3xl text-[#202c36] font-semibold my-3 dark:text-[#f2f2f2]">
								{country.name.common}
							</h1>
							<div className="country-page-context-container flex justify-between gap-[200px]">
								<div>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">
										Population: {country.population.toLocaleString()}
									</p>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">Region: {country.region}</p>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">Capital: {country.capital}</p>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">
										Native name: {country.name.nativeName[countriesNative[0]].common}
									</p>
								</div>
								<div>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">
										Top level domain: {country.tld}
									</p>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">
										Currencies: {country.currencies[countriesCurrency[0]].name}
									</p>
									<p className="text-[#202c36] dark:text-[#f2f2f2]">
										Languages: {country.languages[countriesLanguages[0]]}
									</p>
								</div>
							</div>
							{Array.isArray(country.borders) ? (
								<div className="border-country-container mt-[30px] text-[#202c36] dark:text-[#f2f2f2]">
									Border countries:
									{country.borders.map((borderCountry) => (
										<div
											className="border-country inline-block bg-white text-[#2b3844] py-[5px] px-5 rounded-[5px] ml-2.5 dark:bg-[#2b3844] dark:text-[#f2f2f2]"
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
