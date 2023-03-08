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
			},
			backgroundImage: {
				image: "url('/synthwave-night-sunset-anime-girl-4k-2j.jpg')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
};
