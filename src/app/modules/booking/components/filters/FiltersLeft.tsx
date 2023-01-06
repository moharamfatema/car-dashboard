import React, { FC } from 'react'
import downward from '../../../../../assets/icons/icon/stroke/downward.svg'

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
					<img src={downward} alt='dropdown' />
				</div>
			))}
		</div>
	)
}

export default FiltersLeft
