import React, { FC } from 'react'
import Charts from './components/Charts'
import Recommendations from './components/Recommendations'
import Statuses from './components/Statuses'

const Dashboard: FC = () => {
	return (
		<div className='dashboard grid grid-rows-3 h-full w-full gap-[30px] '>
			<div className='statuses'>
				<Statuses />
			</div>
			<div className='charts'>
				<Charts />
			</div>
			<Recommendations />
		</div>
	)
}

export default Dashboard
