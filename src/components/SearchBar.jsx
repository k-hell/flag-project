import React from 'react';

const SearchBar = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search for a country..."
			value={value}
			onChange={onChange}
			className="searchbar h-[50px] w-[470px] rounded-xl bg-white flex justify-start items-center p-[30px] border-none dark:bg-dark-blue 2card:w-[250px] 1card:h-[70px] 1card:w-[350px] 1card:m-0 1card:mx-auto"
		/>
	);
};

export default SearchBar;
