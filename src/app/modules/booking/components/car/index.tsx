import React, { FC } from 'react'
import { Icar } from '../cars/carsData'
import CarHeader from './header'
import CarFooter from './footer'

interface IcarProps {
	car: Icar
}

const Car: FC<IcarProps> = ({ car }) => {
	return (
		<div
			className='car bg-white min-w-[325px] min-h-[267px] rounded-2xl flex flex-col gap-[10px] p-6 text-left text-[#72767C]'
			key={car.id}
		>
			<CarHeader car={car} />
			<h6 className='car__model'>{car.model}</h6>
			<div className='car__image m-auto'>
				<img src={car.image} alt={car.name} />
			</div>
			<CarFooter car={car} />
		</div>
	)
}

export default Car
