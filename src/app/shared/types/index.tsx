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
