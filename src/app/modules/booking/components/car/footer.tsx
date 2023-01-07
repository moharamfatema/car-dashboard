import React, { FC } from 'react'
import person from '../../../../../assets/icons/icon.svg'
import type from '../../../../../assets/icons/icon-1.svg'
import { Icar } from '../../../../shared/types'
interface ICarFooterProps {
	car: Icar
}

const CarFooter: FC<ICarFooterProps> = ({ car }) => {
	return (
		<footer>
			<div className='car__info flex justify-between'>
				<div className='car__info__left flex gap-5'>
					<div className='car__info__seats flex items-center gap-1'>
						<img src={person} alt='person ' className=' w-4 h-4' />
						{/* TODO: fix color */}
						<p className=''>{car.seats}</p>
					</div>
					<div className='car__info__type flex items-center  gap-1'>
						<img src={type} alt={car.type} className='w-4 h-4' />
						<p className=''>{car.type}</p>
					</div>
				</div>
				<div className='car__info__price'>
					<span className='flex items-center text-xs font-normal'>
						<p className='title-2'>${car.price}</p>
						<p className=''>/d</p>
					</span>
				</div>
			</div>
		</footer>
	)
}

export default CarFooter
