/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': '#2b3844',	// darkblue
				'secondary': '#202c36',	// darkerblue
				'tertiary': '#f2f2f2'	// white
			}
		}
	},
	plugins: []
};
