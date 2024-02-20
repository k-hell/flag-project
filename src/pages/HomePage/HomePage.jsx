import React, { useState, useEffect } from 'react';
import CountriesGrid from '../../components/CountriesGrid/CountriesGrid';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';
import useRegionCountries from '../../hooks/useRegionCountries';
import './HomePage.css';

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { countries, loading } = useRegionCountries(selectedRegion);

  useEffect(() => {
    setSuggestions(countries.map((country) => country.name.common));
  }, [countries]);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const filteredSuggestions = countries
        .map((country) => country.name.common)
        .filter((country) => country.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(countries.map((country) => country.name.common));
    }
  };

  const filterCountries = (country) => {
    if (searchQuery === '') {
      return true;
    } else if (country.name.common.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const filteredData = countries.filter(filterCountries).sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="home-page">
      <div className="country-search-container">
        <SearchBar value={searchQuery} onChange={handleSearchChange} suggestions={suggestions} />
        <Dropdown handleRegionChange={handleRegionChange} />
      </div>
      <CountriesGrid loading={loading} filteredData={filteredData} />
    </div>
  );
}

export const allCountriesLoader = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');

  if (!res.ok) {
    throw Error('Failed to load country data');
  }

  return res.json();
};
