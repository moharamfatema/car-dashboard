import { FC } from 'react'

export interface Itab {
	name: string
	link: string
	icon: string
}
export interface Icar {
	name: string
	price: number
	image: string
	model: string
	type: string
	seats: number
	isLiked: boolean
	id: number
}

export interface IRecommendation {
	percentage: number
	title: string
	price: number
	shares: number
	id: number
	image: string
}

export interface IStatus {
	name: string
	percentage: number
	icon: FC<{ className: string }>
	color: string
	dataColor: string
	textColor: string
	iconColor: string
	max?: number
}

export interface IChart {
	chartType: any
	options: any
	data: Array<Array<any>>
}
