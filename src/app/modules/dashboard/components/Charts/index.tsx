import React, { FC } from 'react'
import ChartCard from '../ChartCard'
import { chartsData } from './chartsData'

const Charts: FC = () => {
	return (
		<div className='charts grid grid-cols-1 lg:grid-cols-2 gap-2.5 h-full'>
			{chartsData.map(chart => (
				<ChartCard key={chart.name} chart={chart} />
			))}
		</div>
	)
}

export default Charts
