import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search for a country..."
			value={value}
			onChange={onChange}
			className="searchbar"
		/>
	);
};

export default SearchBar;
