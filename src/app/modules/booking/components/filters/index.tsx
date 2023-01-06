import React, { FC } from 'react'
import FiltersLeft from './FiltersLeft'
import FiltersRight from './FiltersRight'

const Filters: FC = () => {
	return (
		<div className='filters flex justify-between'>
			<FiltersLeft filters={['New', 'Toyota']} />
			<FiltersRight />
		</div>
	)
}

export default Filters
