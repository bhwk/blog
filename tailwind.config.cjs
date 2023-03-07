/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
};
