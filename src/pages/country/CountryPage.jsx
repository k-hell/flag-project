import { useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const countries = useLoaderData();

	return (
		<>
			{countries.map((country) => {
				const countriesCurrency = Object.keys(country.currencies);
				const countriesNative = Object.keys(country.name.nativeName);
				const countriesLanguages = Object.keys(country.languages);
				return (
					<div key={country.name.common} className="country-page">
						<div className="country-page-flag">
							<img src={country.flags.png} alt={country.name.common} />
						</div>
						<div className="country-page-container">
							<h1>{country.name.common}</h1>
							<div className="country-page-context-container">
								<div>
									<p>Population: {country.population.toLocaleString()}</p>
									<p>Region: {country.region}</p>
									<p>Capital: {country.capital}</p>
									<p>Native name: {country.name.nativeName[countriesNative[0]].common}</p>
								</div>
								<div>
									<p>Top level domain: {country.tld}</p>
									<p>Currencies: {country.currencies[countriesCurrency[0]].name}</p>
									<p>Languages: {country.languages[countriesLanguages[0]]}</p>
								</div>
							</div>
							{Array.isArray(country.borders) ? (
								<div className="border-country-container">
									Border countries:
									{country.borders.map((borderCountry) => (
										<div className="border-country" key={borderCountry}>
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
