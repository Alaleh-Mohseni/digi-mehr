import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			spacing: {
				xs: '4px',
				sm: '8px',
				md: '16px',
				lg: '24px',
				xl: '32px',
				'2xl': '64px',
				'18': '4.5rem',
			},
			fontFamily: {
				iranYekan: 'var(--font-iran-yekan)',
			},
			colors: {
				'ref-blue': '#0b90fb',
				'ref-lighter': '#DEEFFD40',
				'meher-lightest': '#E7F7FB',

				blueAqua: '#008eb2',
				blueLight: '#e7f7fb',
				blueMidnight: '#3f4064',
				blueIce: '#f7fbfe',
				secondery: '#059675',
				greenLight: '#08af89',
				greenIce: '#f6faf9',
				grayDark: '#585a5f',
				grayIce: '#dfe0e2',
			},
		},
	},
	plugins: [],
}
export default config
