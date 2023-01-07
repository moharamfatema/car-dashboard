import React, { FC } from 'react'
import Downward from '../../../../../assets/icons-svgr/icon/stroke/Downward'

interface IFiltersLeftProps {
	filters: string[]
}

const FiltersLeft: FC<IFiltersLeftProps> = ({ filters }) => {
	return (
		<div className='filters__left flex gap-4'>
			{filters.map(filter => (
				<div
					className='filter flex items-center py-2.5 px-5 gap-6 bg-white rounded-[22.5px] text-gray300'
					key={filter}
				>
					<p className=' text-base '>{filter}</p>
					<Downward className='grey' />
				</div>
			))}
		</div>
	)
}

export default FiltersLeft
