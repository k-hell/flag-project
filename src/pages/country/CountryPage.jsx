import { useLoaderData } from 'react-router-dom';

export default function CountryPage() {
	const countries = useLoaderData();

	return (
		<div className="country-page">
			{countries.map((country) => {
				const countriesCurrency = Object.keys(country.currencies);
				const countriesNative = Object.keys(country.name.nativeName);
				const countriesLanguages = Object.keys(country.languages);
				return (
					<div>
						<h1 key={country.name.common}>{country.name.common}</h1>
						<p>Population: {country.population}</p>
						<p>Region: {country.region}</p>
						<p>Capital: {country.capital}</p>
						<p>Native name: {country.name.nativeName[countriesNative[0]].common}</p>
						<p>Top level domain: {country.tld}</p>
						<p>Currencies: {country.currencies[countriesCurrency[0]].name}</p>
						<p>Languages: {country.languages[countriesLanguages[0]]}</p>
						{Array.isArray(country.borders) ? (
							<div>
								<p>Border countries:</p>
								{country.borders.map((borderCountry, index) => (
									<p key={index}>{borderCountry}</p>
								))}
							</div>
						) : (
							''
						)}
					</div>
				);
			})}
		</div>
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
