import React, { FC } from 'react'
import grid from '../../../../../assets/icons/dashboard icon.svg'
import FiltersIcon from '../../../../../assets/icons/icons/Settings 01/Line.svg'

const FiltersRight: FC = () => {
	return (
		<div className='filters__right flex gap-4'>
			<button
				title='Grid'
				type='button'
				name='grid'
				className='bg-white rounded-full p-2.5 shadow-md'
			>
				<img src={grid} alt='grid' />
			</button>
			<button
				title='Filters'
				type='button'
				name='filters'
				className='bg-primaryPurple rounded-full p-2.5 shadow-md'
			>
				<img src={FiltersIcon} alt='filters' />
			</button>
		</div>
	)
}

export default FiltersRight
