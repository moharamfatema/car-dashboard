import React from 'react'
import StatusCard from '../StatusCard'
import { statuses } from './statusData'

const Statuses = () => {
	return (
		<div className='status-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
			{statuses.map(status => (
				<StatusCard status={status} key={status.name} />
			))}
		</div>
	)
}

export default Statuses
