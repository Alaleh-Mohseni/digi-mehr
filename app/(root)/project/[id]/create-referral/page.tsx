'use client'

import { useState } from 'react'
import ReferralAside from '@/components/ReferralAside'
import ListNumber from '@/components/ListNumber'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { useParams } from 'next/navigation'

export const mockData = {
	heading: 'همکاری در فروش به تحصیل کودکان کار افرک',
	description:
		'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.',
	rules: [
		{ id: 1, text: 'تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای...' },
		{ id: 2, text: 'این متن برای بررسی و شبیه‌سازی طراحی رابط کاربری استفاده می‌شود.' },
		{ id: 3, text: 'قوانین همکاری را مطالعه کرده و با شرایط موافقت کنید.' },
	],
}
const heading = ' تاریخچه همکاری در فروش این پروژه'
const referralStats = [
	{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده', icon: '/svg/money-bill.svg' },
	{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است', icon: '/svg/shopping-bag.svg' },
	{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند', icon: '/svg/building.svg' },
]

const CreateReferral = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [showLinkBox, setShowLinkBox] = useState(false)
	const [uniqueLink, setUniqueLink] = useState('')
	const params = useParams()

	const handleCheckboxChange = () => setIsChecked(prev => !prev)

	const handleButtonClick = () => {
		if (isChecked) {
			setShowLinkBox(true)
			const newLink = `https://mehr.digikala.com/project/${params.id}/farnooshjamali`
			setUniqueLink(newLink)
		}
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(uniqueLink)
		alert('لینک کپی شد!')
	}

	return (
		<section className='flex w-full flex-col gap-[36px] px-[36px] py-xl'>
			<h3 className='heading'>{mockData.heading}</h3>
			<div className='flex gap-2xl'>
				<div className='flex w-[85%] flex-col gap-lg'>
					<p className='text14Medium text-justify'>{mockData.description}</p>
					<ListNumber data={mockData.rules} />

					{!showLinkBox ? (
						<div className='flex flex-col gap-[20px]'>
							<label className='flex items-center gap-sm'>
								<input
									type='checkbox'
									id='check-rule'
									checked={isChecked}
									onChange={handleCheckboxChange}
									className='size-4 rounded-full border-2 border-blue-500 checked:border-transparent checked:bg-blue-500 focus:ring-2 focus:ring-blue-300'
								/>
								<p className='text14Medium'>
									با{' '}
									<Button type='link' href='/terms'>
										شرایط و قوانین همکاری در فروش
									</Button>{' '}
									موافقم.
								</p>
							</label>
							<div>
								<Button type='primary' disabled={!isChecked} onClick={handleButtonClick}>
									ساخت لینک اختصاصی
								</Button>
							</div>
						</div>
					) : (
						<Card className='flex items-center justify-between bg-ref-lighter'>
							<Button type='link' href='/user/history-cooperation'>
								{uniqueLink}
							</Button>
							<Button onClick={handleCopy}>کپی کردن</Button>
						</Card>
					)}
				</div>
				<ReferralAside heading={heading} referralStats={referralStats} />
			</div>
		</section>
	)
}

export default CreateReferral
