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
				'ref-blue': '#0B90FB',
				'ref-lighter': '#DEEFFD40',
				'mehr-lightest': '#E7F7FB',
				'blue-ice': '#F7FBFE',
				'gray-ice': '#DFE0E2',

				secondary: '#059675',
				greenLight: '#08af89',
				greenIce: '#f6faf9',
				grayDark: '#585a5f',
				grayMd: '#828488',
				grayHd: '#515151',
				greenMd: 'rgba(229, 247, 243, 0.5)',
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				base: '16px',
				lg: '18px',
				xl: '20px',
				'2xl': '24px',
				'3xl': '30px',
			},
		},
	},
	plugins: [],
}
export default config
