import React, { FC } from 'react'
import Cars from './components/cars'
import Filters from './components/filters'

const Booking: FC = () => {
	return (
		<div className='booking'>
			<h1 className=' text-left'>Booking</h1>
			<Filters />
			<Cars />
		</div>
	)
}

export default Booking
