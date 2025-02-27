import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	const project = ['/project/1', '/project/2', '/project/3', '/project/4', '/project/5', '/project/6']

	return (
		<div className='mb-8 flex w-full flex-col gap-[32px]'>
			<div className='card-gray h-[400px] w-full'></div>
			<div className='flex flex-col gap-[24px] px-[24px]'>
				<div className='flex flex-row items-center justify-between'>
					<h1 className='text-2xl font-bold'>فرصت های نیکوکاری</h1>
					<p className='text-secondery'>مشاهده همه</p>
				</div>
				<div className='flex flex-row items-center gap-3 overflow-hidden'>
					{project.map((link, index) => (
						<Link key={index} href={link}>
							<div className='h-[308px] w-[325px]'>
								<Image src='/project.jpg' alt='project' width={325} height={308} className='h-[308px]' />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
