import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage, { countriesLoader } from './pages/country/CountryPage';
import RootLayout from './layouts/RootLayout';
import CountriesLayout from './layouts/CountriesLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="country" element={<CountriesLayout />}>
				<Route index element={<HomePage />} />
				<Route path=":countryName" element={<CountryPage />} loader={countriesLoader} />
			</Route>
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
