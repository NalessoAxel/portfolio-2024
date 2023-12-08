/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
		theme: {
			fontFamily: {
				body: [ 'Satoshi-Regular', 'sans-serif' ],
				title: [ 'var(--font-clashGrotesk)', 'sans-serif' ],
				numbers: [ 'RX100-Regular', 'sans-serif' ],
			},
			extend: { maxWidth: { '8-xl': '90rem' } },
			colors: {
				black: '#080808',
				white: '#FFFFFF',
				body: '#E6E6E6',
				title: '#797979',
				text: '#B9B8AE',
				error: '#E74C3C',
			},
			container: {
				center: true,
				padding: '2rem',
				screens: { '2xl': '1400px' },
			},
	},

	plugins: [
			require('tailwindcss-debug-screens'),
			plugin(function ({ matchUtilities, theme }) {
				matchUtilities(
					{
						'translate-z': (value) => ({
							'--tw-translate-z': value,
							transform: ' translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
						}),
					},
					{ values: theme('translate') }
				);
			}),
		],
}
