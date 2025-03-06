import Link from 'next/link'
import Image from 'next/image'

interface Project {
	link: string
	title: string
	description: string
	image: string
}

const projects: Project[] = [
	{
		link: '/project/1',
		title: 'موسسه موج مهربانی',
		description: 'آموزش و مدرسه‌ یاری در مناطق محروم',
		image: '/project1.jpg',
	},
	{
		link: '/project/2',
		title: 'موسسه سیمای سبز رهایی',
		description: 'تجهیز مرکز بهبود اعتیاد کارتن‌خواب‌ها',
		image: '/project2.jpg',
	},
	{
		link: '/project/3',
		title: 'انجمن روشنگران فردای کودک',
		description: 'تجهیزات مددکاری و روانشناسی کودکان',
		image: '/project3.png',
	},
	{
		link: '/project/4',
		title: 'انجمن دوستداران کودک پویش',
		description: 'تامین نیازهای تحصیلی روستاهای محروم حاشیه',
		image: '/project4.jpg',
	},
	{
		link: '/project/5',
		title: 'موسسه بچه های آسمان',
		description: 'تامین پوشاک سال نو برای مددجویان موسسه بچه های آسمان',
		image: '/project5.jpg',
	},
]

export default function Home() {
	return (
		<div className='mb-sm flex w-full flex-col gap-md'>
			<div className='h-[400px] w-full bg-gray-300' />
			<div className='h-[292px] w-full bg-gray-300 px-4' />

			<section className='flex h-[428px] flex-col gap-md px-lg'>
				<div className='flex flex-row items-center justify-between'>
					<h1 className='text-2xl font-bold'>فرصت‌های نیکوکاری</h1>
					<Link href='/projects' className='text-green-50'>
						مشاهده همه
					</Link>
				</div>

				<div className='flex h-[344px] flex-row items-center gap-sm overflow-hidden py-md'>
					{projects.map(project => (
						<Link key={project.link} href={project.link} aria-label={`مشاهده پروژه ${project.title}`} className='flex h-[308px] w-[325px] flex-col'>
							<div className='border-1-gray-200 h-full w-[325px] overflow-hidden rounded-xl shadow-lg'>
								<Image src={project.image} alt={project.title} width={325} height={180} className='h-[180px] w-full object-cover' loading='lazy' />
								<div className='flex flex-col gap-md px-3 py-2'>
									<h3 className='text-sm font-bold'>{project.title}</h3>
									<p className='text-base text-gray-900'>{project.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className='flex flex-col items-center justify-center gap-xl'>
				<h1 className='text-2xl font-bold'>خیریه های منتخب</h1>
				<div className='h-[180px] w-full bg-gray-300' />
			</section>
		</div>
	)
}
