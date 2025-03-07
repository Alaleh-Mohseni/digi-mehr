const ListNumber = ({
	data,
}: {
	data: {
		id: number
		text: string
	}[]
}) => {
	return (
		<ol className='flex list-none flex-col gap-7' style={{ counterReset: 'list' }}>
			{data.map(item => (
				<li
					className='text14Medium before:bg-blue-ice flex gap-sm font-medium before:flex before:size-8 before:items-center before:justify-center before:rounded-full before:font-iranYekan before:font-bold before:text-ref-blue before:content-[counter(list)]'
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
