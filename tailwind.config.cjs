/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: '#24283b',
				link: '#f7768e',
				title: '#ff9e64',
				content: '#c0caf5',
				tag: '#565f89',
				date: '#bb9af7',
				heading: '#7aa2f7'
			},
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
