import Card from '@/components/Card'
import React from 'react'

const page = () => {
	return (
		<section>
			<Card className='bg-mehr-lightest text-greenLight'>
				<p className='text-greenLight'>تاریخچه یارهای گذشته در دیجی کالامهر</p>
				<span>{'<'}</span>
			</Card>
			<Card>
				<h2>تاریخچه یاری شا</h2>
				<div>
					<span>در انتظار پرداخت</span>
					<span>جاری</span>
					<span>تحویل شده</span>
				</div>
				<span>هنوز سفارشی ندارید</span>
			</Card>
		</section>
	)
}

export default page
