import Link from 'next/link'

export const mockData = {
	heading: 'همکاری در فروش به تحصیل کودکان کار افرک',
	description:
		'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.',
	rules: [
		{ id: 1, text: 'تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.' },
		{ id: 2, text: 'این متن برای بررسی و شبیه‌سازی طراحی رابط کاربری استفاده می‌شود.' },
		{ id: 3, text: 'قوانین همکاری را مطالعه کرده و با شرایط موافقت کنید.' },
	],
}

const CreateReferal = () => {
	return (
		<section className='w-full'>
			<h3 className='pb-11 text-2xl font-bold'>{mockData.heading}</h3>
			<div className='flex flex-col gap-10'>
				<p>{mockData.description}</p>
				<ol className='flex list-inside list-decimal flex-col gap-5'>
					{mockData.rules.map(rule => (
						<li key={rule.id}>{rule.text}</li>
					))}
				</ol>
				<label className='flex items-center gap-3'>
					<input type='checkbox' name='check-rule' id='check-rule' />
					<p>
						با <Link href='digikala.com'>شرایط و قوانین همکاری در فروش</Link> دیجی‌کالا مهر موافقم.
					</p>
				</label>
				<div>
					<button type='button'>ساخت لینک اختصاصی</button>
				</div>
			</div>
		</section>
	)
}

export default CreateReferal
