import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage, { allCountriesLoader } from './pages/HomePage';
import CountryPage, { countriesLoader } from './pages/CountryPage';
import RootLayout from './layouts/RootLayout';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} loader={allCountriesLoader} />
			<Route path=":countryCode" element={<CountryPage />} loader={countriesLoader} />
		</Route>
	)
);

function App() {
	const [themeMode, setThemeMode] = useState(import.meta.env.MODE === 'development' ? 'dark' : 'light');

	const darkTheme = () => {
		setThemeMode('dark');
	};

	const lightTheme = () => {
		setThemeMode('light');
	};

	useEffect(() => {
		document.querySelector('html').classList.remove('dark', 'light');
		document.querySelector('html').classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
