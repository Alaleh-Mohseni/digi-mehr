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
				blue: {
					50: '#f6fbfd',
					100: '#f6fbfe',
					200: '#e8f7fa',
					300: '#0b90fb',
					400: '#2e89d6',
					500: '#008eb2',
				},
				green: {
					100: '#f6faf9',
					200: '#5fac94',
					300: '#08af89',
					400: '#059675',
				},
				gray: {
					100: '#f6f6f6',
					200: '#b5b5b5',
					300: '#6f7174',
					400: '#ced0d2',
					500: '#828488',
					600: '#838383',
				},
				black: {
					50: '#3f4064',
					100: '#575757',
					200: '#585a5f',
					300: '#131313',
				},
				red: {
					100: '#ef4056',
					200: '#b2001a',
				},
			},
		},
		plugins: [],
	},
}
export default config
