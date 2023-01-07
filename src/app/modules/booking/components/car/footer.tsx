import React, { FC } from 'react'
import Person from '../../../../../assets/icons-svgr/Icon'
import Type from '../../../../../assets/icons-svgr/Icon1'
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
						<Person className='purple' />
						<p className=''>{car.seats}</p>
					</div>
					<div className='car__info__type flex items-center  gap-1'>
						<Type className='purple' />
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
