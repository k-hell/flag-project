import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage, { countriesLoader } from './pages/country/CountryPage';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} /> {/* all countries loader missing */}
			{/* <Route path="country" element={<CountriesLayout />}> */} {/* Error handling when entering /country/ */}
			<Route path=":countryName" element={<CountryPage />} loader={countriesLoader} />
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
