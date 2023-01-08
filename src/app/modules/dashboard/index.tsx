import React, { FC } from 'react'
import Recommendations from './components/Recommendations'
import Statuses from './components/Statuses'

const Dashboard: FC = () => {
	return (
		<div className='dashboard grid grid-rows-3 h-full w-full gap-[30px] '>
			<div className='statuses'>
				<Statuses />
			</div>
			<div className='charts'>
				<div>Charts</div>
			</div>
			<Recommendations />
		</div>
	)
}

export default Dashboard
