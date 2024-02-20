import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange, suggestions }) => {
  const showSuggestions = value.length > 2;

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
        className="searchbar"
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {suggestions.map((country, index) => (
            <li key={index} onClick={() => onChange({ target: { value: country } })}>
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
