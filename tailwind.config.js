/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'3card': { max: '1259px' },
				'2card': { max: '939px' },
				'1card': { max: '619px' }
			},
			colors: {
				'dark-blue': '#2b3844',		// darkblue
				'darker-blue': '#202c36',	// darkerblue
				'to-white': '#f2f2f2',		// white
				'primary': {
					'dark-blue': '#2b3844',
					'darker-blue': '#202c36'
				},
				'secondary': '#f2f2f2'
			}
		}
	},
	plugins: []
};
