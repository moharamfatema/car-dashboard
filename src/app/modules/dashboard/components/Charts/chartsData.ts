import { IChart } from '../../../../shared/types'

export const chartsData: IChart[] = [
	{
		chartType: 'ColumnChart',
		options: {
			title: 'Miles Statistics',
			hAxis: { title: 'Hour', viewWindow: { min: 0, max: 7 } },
			vAxis: { title: 'Miles', viewWindow: { min: 0, max: 300000 } },
			legend: 'none',
		},
		data: [
			['Hour', 'Miles'],
			['1', 100000],
			['2', 120000],
			['3', 157000],
			['4', 40000],
			['5', 300000],
			['6', 50000],
			['7', 200000],
		],
	},
	{
		chartType: 'AreaChart',
		options: {
			title: 'Car Statistics',
			hAxis: {
				title: '20 February 2022',
				viewWindow: { min: 7, max: 21 },
			},
			vAxis: { title: 'cars', viewWindow: { min: 0, max: 4 } },
			legend: 'none',
			colors: ['#FF764C'],
		},
		data: [
			['Hour', 'Cars'],
			[7, 0],
			[8, 1],
			[9, 1],
			[10, 2],
			[11, 2],
			[12, 3],
			[13, 4],
			[14, 1],
			[15, 2],
			[16, 2],
			[17, 1],
			[18, 0],
			[19, 0],
		],
	},
]
