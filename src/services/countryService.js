// ./src/services/countryService.js
export const getAllCountries = async () => {
	try {
		const res = await fetch('https://restcountries.com/v3.1/all');
		if (!res.ok) {
			throw Error('Failed to fetch all countries');
		}
		return res.json();
	} catch (error) {
		throw Error(`Error fetching all countries: ${error.message}`);
	}
};
