import React, { FC } from 'react'
import Grid from '../../../../../assets/icons-svgr/DashboardIcon'
import FiltersIcon from '../../../../../assets/icons-svgr/icons/Settings 01/Line'

const FiltersRight: FC = () => {
	return (
		<div className='filters__right flex gap-4'>
			<button
				title='Grid'
				type='button'
				name='grid'
				className='bg-white rounded-full p-2.5 shadow-md'
			>
				<Grid />
			</button>
			<button
				title='Filters'
				type='button'
				name='filters'
				className='bg-primaryPurple rounded-full p-2.5 shadow-md'
			>
				<FiltersIcon className='white' />
			</button>
		</div>
	)
}

export default FiltersRight
