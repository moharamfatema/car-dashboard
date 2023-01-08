import React, { FC } from 'react'
import { Chart } from 'react-google-charts'
import { IChart } from '../../../../shared/types'

interface IChartCardProps {
	chart: IChart
}

const ChartCard: FC<IChartCardProps> = ({ chart }) => {
	return (
		<div className='chart-card bg-white py-[15px] px-[25px] flex flex-col text-left items-center content-center gap-2.5 rounded-[14px]'>
			<header className='chart-card__header'>
				<h3 className='chart-card__title'>{chart.options.title}</h3>
			</header>
			<Chart
				chartType={chart.chartType}
				data={chart.data}
				options={chart.options}
				legendToggle
			/>
		</div>
	)
}

export default ChartCard
