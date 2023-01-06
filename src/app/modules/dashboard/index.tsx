import React, { FC } from 'react'

const Dashboard: FC = () => {
	return (
		<div className='dashboard grid grid-rows-3 h-full w-full gap-[30px] '>
			<div className='statuses'>
				<div>Statuses</div>
			</div>
			<div className='charts'>
				<div>Charts</div>
			</div>
			<div className='recommendations'>
				<div>Recommendations</div>
			</div>
		</div>
	)
}

export default Dashboard
