import React, { FC } from 'react'
import liked from '../../../../../assets/icons/love.svg'
import notLiked from '../../../../../assets/icons/love-outline.svg'
import { Icar } from '../../../../shared/types'

interface ICarHeaderProps {
	car: Icar
}

const CarHeader: FC<ICarHeaderProps> = ({ car }) => {
	return (
		<header className='flex justify-between'>
			<p className='car__name title-1'>{car.name}</p>
			<div className='isliked'>
				<img
					src={car.isLiked ? liked : notLiked}
					alt='heart'
					className=''
				/>
			</div>
		</header>
	)
}

export default CarHeader
