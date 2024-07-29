/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			colors: {
				'primary': '#1b1b1b',
				'secondary': '#f5f5f5',
				'accent': '#FA682C',
			},
		},
	}, 
	plugins: [], 
}