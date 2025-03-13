import Image from 'next/image'
import Link from 'next/link'

const Panel = () => {
	const data = [
		{ id: 1, title: 'تاریخچه سفارشات مهر', src: '/svg/clipboard-list.svg', link: '/' },
		{ id: 2, title: 'همکاری در فروش', src: '/svg/handshake.svg', link: '/' },
		{ id: 3, title: 'خروج از حساب کاربری', src: '/svg/sign-out.svg', link: '/' },
	]
	return (
		<div className='shadow-[0px_8px_0px_rgba(57, 56, 56, 0.1)] absolute left-14 top-8 z-0 w-[206px] cursor-pointer rounded-md border bg-white px-md pt-md transition-all'>
			<div className='flex items-center gap-sm pb-md'>
				<Image src='/svg/user.svg' alt='user' className='rounded-full border' width={20} height={0} />
				<span className='text-sm font-extrabold'>فرنوش جمالی</span>
			</div>
			<ul className='flex flex-col'>
				{data.map(item => (
					<li className='flex items-center gap-sm pb-md text-xs' key={item.id}>
						<Image src={item.src} alt='' width={20} className='mt-md' height={16} />
						<Link className='w-full border-t pt-md' href={item.link}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Panel
