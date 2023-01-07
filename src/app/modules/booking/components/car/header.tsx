import React, { FC } from 'react'
import Liked from '../../../../../assets/icons-svgr/Love'
import NotLiked from '../../../../../assets/icons-svgr/LoveOutline'
import { Icar } from '../../../../shared/types'

interface ICarHeaderProps {
	car: Icar
}

const CarHeader: FC<ICarHeaderProps> = ({ car }) => {
	return (
		<header className='flex justify-between'>
			<p className='car__name title-1'>{car.name}</p>
			<div className='isliked'>
				{car.isLiked ? <Liked /> : <NotLiked />}
			</div>
		</header>
	)
}

export default CarHeader
