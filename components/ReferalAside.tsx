import Image from 'next/image'

type TableProps = {
	data: {
		heading: string
		roules: {
			id: number
			value: string
			description: string
			icon: string
		}[]
	}
}
const ReferalAside: React.FC<TableProps> = ({ data }) => {
	return (
		<aside className='border-gray-ice max-h-fit min-w-[315px] max-w-[315px] rounded-[12px] border border-solid px-lg pt-[28px]'>
			<h4 className='text-grayHd text-base font-bold'>{data.heading}</h4>
			<ul className='divide-y-2 divide-solid'>
				{data?.roules.map(item => (
					<li key={item.id} className='border-gray-ice flex flex-col py-lg'>
						<div className='flex items-center gap-[12px]'>
							<div className='bg-mehr-lightest flex min-h-10 min-w-10 items-center justify-center rounded-full'>
								<Image src={item.icon} alt='icon' width={16} height={16} />
							</div>
							<p className='text-lg font-extrabold'>{item.value}</p>
						</div>
						<p className='ps-[47px] text-sm font-medium text-[#81858A]'>{item.description}</p>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
