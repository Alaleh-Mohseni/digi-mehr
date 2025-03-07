type ListNumberProp = {
	data: {
		id: number
		text: string
	}[]
}

const ListNumber = ({ data }: ListNumberProp) => {
	return (
		<ol className='flex list-none flex-col gap-6' style={{ counterReset: 'list' }}>
			{data.map(item => (
				<li
					className='text14Medium flex gap-sm font-medium before:flex before:size-8 before:items-center before:justify-center before:rounded-full before:bg-blueIce before:font-iranYekan before:font-bold before:text-ref-blue before:content-[counter(list)]'
					style={{ counterIncrement: 'list' }}
					key={item.id}
				>
					{item.text}
				</li>
			))}
		</ol>
	)
}

export default ListNumber
