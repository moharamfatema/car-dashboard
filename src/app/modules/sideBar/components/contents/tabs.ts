import dashboard from '../../../../../assets/icons/dashboard icon.svg'
import assets from '../../../../../assets/icons/icons/Doughnut/Line.svg'
import booking from '../../../../../assets/icons/icons/Car/Line.svg'
import sellCars from '../../../../../assets/icons/icons/Shopping Bag/Line.svg'
import buyCars from '../../../../../assets/icons/icons/Shopping Cart/Line.svg'
import services from '../../../../../assets/icons/icons/Fencing/Line.svg'
import calendar from '../../../../../assets/icons/icons/Calendar/Line.svg'
import messages from '../../../../../assets/icons/icons/Comment/Line.svg'
import { Itab } from '../../../../shared/types'

export const tabs: Itab[] = [
	{
		name: 'Dashboard',
		icon: dashboard,
		link: '/',
	},
	{
		name: 'Assets',
		icon: assets,
		link: '/assets',
	},
	{
		name: 'Booking',
		icon: booking,
		link: '/booking',
	},
	{
		name: 'Sell Cars',
		icon: sellCars,
		link: '/sell-cars',
	},
	{
		name: 'Buy Cars',
		icon: buyCars,
		link: '/buy-cars',
	},
	{
		name: 'Services',
		icon: services,
		link: '/services',
	},
	{
		name: 'Calendar',
		icon: calendar,
		link: '/calendar',
	},
	{
		name: 'Messages',
		icon: messages,
		link: '/messages',
	},
]

/*
tabs:

dashboard, assets, booking, sell cars, buy cars, services, calendar, messages
*/
