import React, { FC } from 'react'
import { Icar } from './carsData'
import liked from '../../../../../assets/icons/love.svg'
import person from '../../../../../assets/icons/icon.svg'
import type from '../../../../../assets/icons/icon-1.svg'

interface IcarProps {
	car: Icar
}

const Car: FC<IcarProps> = ({ car }) => {
	return (
		<div
			className='car bg-white w-[325px] h=[267px] rounded-2xl flex flex-col gap-[10px] p-6 text-left'
			key={car.id}
		>
			<header className='flex justify-between'>
				<p className='car__name title-1'>{car.name}</p>
				<div className='isliked'>
					<img
						src={liked}
						alt='heart'
						className={`${car.isLiked ? 'fill-secondaryRed' : ''}`}
					/>
				</div>
			</header>
			<h6 className='car__model'>{car.model}</h6>
			<div className='car__image m-auto'>
				<img src={car.image} alt={car.name} />
			</div>
			<footer>
				<div className='car__info flex justify-between'>
					<div className='car__info__left flex'>
						<div className='car__info__seats flex items-center '>
							<img
								src={person}
								alt='person '
								className='text-primaryPurple'
							/>
							{/* TODO: fix color */}
							<p className='title-2'>{car.seats}</p>
						</div>
						<div className='car__info__type flex items-center'>
							<img src={type} alt={car.type} />
							<p className='title-2'>{car.type}</p>
						</div>
					</div>
					<div className='car__info__price'>
						<span className='flex items-center text-xs font-normal'>
							<p className='title-2'>{car.price}$</p>
							<p className='text-[#72767C]'>/d</p>
						</span>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Car
