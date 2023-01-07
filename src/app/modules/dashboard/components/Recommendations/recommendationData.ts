export interface IRecommendation {
	percentage: number
	title: string
	price: number
	shares: number
	id: number
	image: string
}

export const recommendations: IRecommendation[] = [
	{
		percentage: 64,
		title: 'Mini Cooper',
		image: 'https://png-library.net/images/f56-cooper-s-profile-main.png',
		price: 32,
		shares: 132000,
		id: 1,
	},
	{
		percentage: 74,
		title: 'Porsche 911 Carrera',
		image: 'https://png-library.net/images/f56-cooper-s-profile-main.png',
		price: 28,
		shares: 130000,
		id: 2,
	},
	{
		percentage: 74,
		title: 'Porsche 911 Carrera',
		image: 'https://png-library.net/images/f56-cooper-s-profile-main.png',
		price: 28,
		shares: 130000,
		id: 3,
	},
]
