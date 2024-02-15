import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage, { allCountriesLoader } from './pages/HomePage/HomePage';
import CountryPage, { countriesLoader } from './pages/CountryPage/CountryPage';
import RootLayout from './layouts/RootLayout';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

const getInitialThemeMode = () => {
  if (import.meta.env.MODE === 'development') {
    return 'dark';
  } else {
    const storedThemeMode = localStorage.getItem('themeMode');
    return storedThemeMode ? storedThemeMode : 'light';
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={allCountriesLoader} />
      <Route path=":countryCode" element={<CountryPage />} loader={countriesLoader} />
    </Route>
  )
);

function App() {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode);

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    if (import.meta.env.MODE !== 'development') {
      localStorage.setItem('themeMode', themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
