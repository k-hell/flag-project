import React from 'react';
import CountryCard from './CountryCard/CountryCard';
import './CountriesGrid.css';

const CountriesGrid = ({ loading, filteredData }) => {
  return (
    <div className="countries-container">
      {loading
        ? filteredData.map((country) => <div className="country-card-loading" key={country.cca3}></div>)
        : filteredData.map((country) => <CountryCard country={country} key={country.cca3} />)}
    </div>
  );
};

export default CountriesGrid;
