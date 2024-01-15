import React from 'react';

const SearchBar = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search for a country..."
			value={value}
			onChange={onChange}
			className="searchbar flex h-[50px] w-[470px] items-center justify-start rounded-xl border-none bg-white p-[30px] text-darker-blue dark:bg-dark-blue dark:text-to-white 2card:w-[250px] 1card:m-0 1card:mx-auto 1card:h-[70px] 1card:w-[350px]"
		/>
	);
};

export default SearchBar;
