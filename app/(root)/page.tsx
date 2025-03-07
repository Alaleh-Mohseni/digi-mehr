import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

type Project = {
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
			<div className={styles.gray_container} />
			<div className={`${styles.green_container} px-4`} />

			<section className={`${styles.section} flex flex-col gap-md px-lg`}>
				<div className='flex flex-row items-center justify-between'>
					<h1>فرصت‌های نیکوکاری</h1>
					<Link href='/projects' className='flex flex-row items-center gap-3 text-greenLight'>
						مشاهده همه
						<Image src='/svg/angle-left 1.svg' alt='angle-left' width={10} height={12} loading='lazy' />
					</Link>
				</div>

				<div className={`${styles.charity} flex flex-row items-center gap-sm overflow-hidden py-md`}>
					{projects.map(project => (
						<Link key={project.link} href={project.link} aria-label={`مشاهده پروژه ${project.title}`} className='flex flex-col'>
							<div className={`${styles.charity_content} border-1-gray-200 h-full overflow-hidden rounded-xl shadow-lg`}>
								<Image src={project.image} alt={project.title} width={325} height={180} className='object-cover' loading='lazy' />
								<div className='flex flex-col gap-md px-3 py-2'>
									<h4 className='text-xs font-bold'>{project.title}</h4>
									<p className='text-sm text-gray-900'>{project.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className='flex flex-col items-center justify-center gap-xl'>
				<h1>خیریه های منتخب</h1>
				<div className={styles.green_container} />
			</section>
		</div>
	)
}
