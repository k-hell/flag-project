import React from 'react';

const SearchBar = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search for a country..."
			value={value}
			onChange={onChange}
			className="searchbar h-[50px] w-[470px] rounded-xl bg-white flex justify-start items-center p-[30px] border-none dark:bg-[#2b3844]"
		/>
	);
};

export default SearchBar;
