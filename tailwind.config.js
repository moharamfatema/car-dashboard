/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		colors: {
			// Primary
			primaryBlack: '#242731',
			primaryGrey: '#E0E4E7',
			primaryPurple: '#A162F7',
			// Secondary
			secondaryPurple: '#A162F7',
			secondaryBlue: '#2884FF',
			secondaryYellow: '#F6CC0D',
			secondaryRed: '#FF6370',
			secondaryGreen: '#70CF97',
			secondaryOrange: '#FF764C',
			// Gray
			gray100: '#E0E4E7',
			gray200: '#A4A5A6',
			gray300: '#7C7C8D',
			gray400: '#72767C',
			gray500: '#5F6165',
			gray600: '#242731',
		},
		fontFamily: {
			sans: ['DM Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
