import React, { FC } from 'react'
import { carsData } from './carsData'
import { Icar } from '../../../../shared/types'
import Car from '../car'

const Cars: FC = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
			{carsData.map((car: Icar) => {
				return <Car car={car} key={car.id} />
			})}
		</div>
	)
}

export default Cars
