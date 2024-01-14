/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-blue': '#2b3844',		// darkblue
				'darker-blue': '#202c36',	// darkerblue
				'to-white': '#f2f2f2'		// white
			},
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
