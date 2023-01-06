import React, { FC } from 'react'
import { Icar, carsData } from './carsData'
import Car from './Car'

const Cars: FC = () => {
	return (
		<div className='grid grid-cols-3 gap-6'>
			{carsData.map((car: Icar) => {
				return <Car car={car} key={car.id} />
			})}
		</div>
	)
}

export default Cars
