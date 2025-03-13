import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Header'
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

export const metadata: Metadata = {
	title: 'دیجیکالا مهر',
	description:
		'در دیجی کالامهر به سادگیِ یه خرید و با چند کلیک، می‌تونی کالاهای مورد نیاز مؤسسه‌های خیریه رو بهشون اهدا کنی تا به بهترین شکل به دست نیازمندان برسه.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fa' dir='rtl'>
			<body className={`${iranYekan.variable} font-iranYekan`}>
				<div className='flex flex-col justify-between'>
					<Header />
					<main className='flex w-full gap-4'>{children}</main>
				</div>
			</body>
		</html>
	)
}
