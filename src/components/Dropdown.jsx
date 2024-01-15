import React from 'react';

const Dropdown = ({ handleRegionChange }) => {
	return (
		<div className="filterdropdown group relative flex h-[50px] w-[200px] items-center justify-start rounded-xl bg-white p-[30px] text-darker-blue dark:bg-dark-blue dark:text-to-white 1card:ml-[12.5px] 1card:mr-auto 1card:h-[70px]">
			Filter by Region
			<div className="dropdown-content absolute left-0 top-[60px] z-[1] hidden w-[200px] rounded-xl border border-solid border-[hsla(0,0%,100%,0.075)] bg-white group-hover:block dark:bg-dark-blue 1card:top-[75px]">
				<a
					className="block rounded-t-xl px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange(null)}
				>
					All
				</a>
				<a
					className="block px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange('Americas')}
				>
					Americas
				</a>
				<a
					className="block px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange('Asia')}
				>
					Asia
				</a>
				<a
					className="block px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange('Europe')}
				>
					Europe
				</a>
				<a
					className="block px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange('Africa')}
				>
					Africa
				</a>
				<a
					className="block rounded-b-xl px-[30px] py-[15px] no-underline hover:bg-to-white dark:text-white dark:hover:bg-darker-blue"
					onClick={() => handleRegionChange('Oceania')}
				>
					Oceania
				</a>
			</div>
		</div>
	);
};

export default Dropdown;
