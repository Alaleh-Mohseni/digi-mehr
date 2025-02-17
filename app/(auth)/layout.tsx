import localFont from 'next/font/local'
import '../globals.css'

const iranYekan = localFont({
	src: [
		{ path: '../../public/font/iranyekanweblightfanum.woff', weight: '300', style: 'normal' },
		{ path: '../../public/font/iranyekanwebregularfanum.woff', weight: '400', style: 'normal' },
		{ path: '../../public/font/iranyekanwebmediumfanum.woff', weight: '500', style: 'normal' },
		{ path: '../../public/font/iranyekanwebboldfanum.woff', weight: '700', style: 'normal' },
	],
	variable: '--font-iran-yekan',
})

export const metadata = {
	title: 'دیجی کالا مهر',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fa' dir='rtl'>
			<body className={`${iranYekan.className}`}>{children}</body>
		</html>
	)
}
