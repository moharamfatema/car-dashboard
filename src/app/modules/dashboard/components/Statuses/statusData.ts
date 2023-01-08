import { IStatus } from '../../../../shared/types'
import EnergyIcon from '../../../../../assets/icons-svgr/icons/Lightning/Filled'
import Tire from '../../../../../assets/icons-svgr/Component5'
import RangeIcon from '../../../../../assets/icons-svgr/Range'
import Fluid from '../../../../../assets/icons-svgr/Blood'

export const statuses: IStatus[] = [
	{
		name: 'Energy',
		percentage: 0.45,
		icon: EnergyIcon,
		color: 'primaryPurple',
		iconColor: 'white',
		dataColor: 'white',
		textColor: 'white',
	},
	{
		name: 'Range',
		percentage: 157000,
		max: 300000,
		icon: RangeIcon,
		iconColor: 'secondaryRed',
		color: 'white',
		dataColor: '#FF7E86',
		textColor: 'primaryBlack',
	},
	{
		name: 'Break Fluid',
		percentage: 0.9,
		icon: Fluid,
		color: 'white',
		iconColor: 'primaryPurple',
		dataColor: '#A162F7',
		textColor: 'primaryBlack',
	},
	{
		name: 'Tire Wear',
		percentage: 0.25,
		icon: Tire,
		color: 'white',
		iconColor: 'secondaryYellow',
		dataColor: '#F6CC0D',
		textColor: 'primaryBlack',
	},
]
