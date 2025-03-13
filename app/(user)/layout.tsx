import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import '../globals.css'
import Card from '@/components/Card'
import Button from '@/components/Button'

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
					<main className='flex w-full gap-4'>
						<aside className='flex flex-col gap-4'>
							<Card className='divide-y-2'>
								<div>
									<h2>فرنوش جمالی</h2>
									<p>09385709936</p>
								</div>
								<Button type='link' href='digikala.com'>
									رفتن به دیجی کالا
								</Button>
							</Card>
							<Card>
								<h2>تاریخ چه مهرباین شما خالی است</h2>
								<p>تاکنون به هیچ پروژه ای یاری نرساندید.</p>
							</Card>
							<Card>
								<h2>دیگران را به مهر دعوت کن!</h2>
								<p className='text-center'>هنوز کسی دعوت شما را نپذیرفته</p>
								<Button>مشاهده جزئیات</Button>
							</Card>
							<Card>
								<h2>دیگران را به مهر دعوت کن!</h2>
								<p>هنوز کسی دعوت شما را نپذیرفته</p>
								<Button>مشاهده جزئیات</Button>
							</Card>
						</aside>
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
