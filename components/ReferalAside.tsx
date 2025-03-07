type TableProps = {
	data: {
		heading: string
		roules: {
			id: number
			value: string
			description: string
		}[]
	}
}
const ReferalAside: React.FC<TableProps> = ({ data }) => {
	return (
		<aside className='border-gray-ice max-h-fit min-w-[315px] max-w-[315px] rounded-[12px] border border-solid px-lg pt-[28px]'>
			<h3 className='text-md font-bold'>{data.heading} </h3>
			<ul className='divide-y-2 divide-solid'>
				{data?.roules.map(item => (
					<li key={item.id} className='border-gray-ice relative flex flex-col py-lg'>
						<div className='flex gap-[12px]'>
							<div className='relative -top-3 min-h-10 min-w-10 rounded-full bg-meher-lightest'></div>
							<p className='text-[18px] font-extrabold'>{item.value}</p>
						</div>
						<p className='ps-[47px] text-[14px] font-medium text-[#81858A]'>{item.description}</p>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
