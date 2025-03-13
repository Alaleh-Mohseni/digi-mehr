import Image from 'next/image'
import Card from './Card'

type TableProps = {
	heading: string
	referralStats: {
		id: number
		value: string
		description: string
		icon: string
	}[]
}

const ReferralAside = ({ heading, referralStats }: TableProps) => {
	return (
		<aside className='max-h-fit min-w-[315px] max-w-[315px]'>
			<Card>
				<h4 className='text-base font-bold text-grayHd'>{heading}</h4>
				<ul className='divide-y-2 divide-solid'>
					{referralStats.map(item => (
						<li key={item.id} className='flex flex-col border-gray-ice py-lg'>
							<div className='flex items-center gap-[12px]'>
								<div className='flex min-h-10 min-w-10 items-center justify-center rounded-full bg-mehr-lightest'>
									<Image src={item.icon} alt='icon' width={16} height={16} />
								</div>
								<p className='text-lg font-extrabold'>{item.value}</p>
							</div>
							<p className='ps-[47px] text-sm font-medium text-[#81858A]'>{item.description}</p>
						</li>
					))}
				</ul>
			</Card>
		</aside>
	)
}

export default ReferralAside
