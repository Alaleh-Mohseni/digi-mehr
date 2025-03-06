import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			spacing: {
				xs: '4px',
				sm: '8px',
				base: '10px',
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
				green: {
					50: '#059675',
				},
				gray: {
					500: '#828488',
					900: '#080a38',
				},
				blue: {
					500: '#0b90fb',
				},
			},
		},
		plugins: [],
	},
}
export default config
