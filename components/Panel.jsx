import Image from 'next/image'

const Panel = () => {
	const data = [
		{ id: 1, title: 'تاریخچه سفارشات مهر', src: '/svg/clipboard-list.svg' },
		{ id: 2, title: 'همکاری در فروش', src: '/svg/handshake.svg' },
		{ id: 3, title: 'خروج از حساب کاربری', src: '/svg/sign-out.svg' },
	]
	return (
		<div className='shadow-(0px_0px_8px_0px_rgba(57, 56, 56, 0.1)) absolute left-14 top-8 z-0 w-[206px] rounded-[8px] border bg-white px-[14px] pt-[10px]'>
			<div className='flex items-center gap-sm pb-md' onClick={() => setDropDown(state => !state)}>
				<Image src='/svg/user.svg' alt='user' className='rounded-full border' width={20} height={0} />
				<span className='text-sm font-extrabold'>فرنوش جمالی</span>
			</div>
			<ul className='flex flex-col'>
				{data.map(item => (
					<li className='flex items-center gap-sm pb-base text-xs' key={item.id}>
						<Image src={item.src} alt='' width={20} className='mt-base' height={16} />
						<span className='w-full border-t pt-base'>{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Panel
