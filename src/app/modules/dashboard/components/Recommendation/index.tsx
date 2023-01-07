import React, { FC } from 'react'
import { IRecommendation } from '../../../../shared/types'

import cycle from '../../../../../assets/icons/icon-5.svg'
import shares from '../../../../../assets/icons/icon-6.svg'
import power from '../../../../../assets/icons/icon-7.svg'
import gear from '../../../../../assets/icons/icon-8.svg'

export interface IRecommendationProps {
	recommendation: IRecommendation
	bgColor: string
}

const Recommendation: FC<IRecommendationProps> = ({
	recommendation,
	bgColor,
}) => {
	return (
		<div
			className={`recommendation ${bgColor} rounded-[14px] py-[15px] px-[27px] gap-2.5 flex flex-col items-stretch text-left text-gray300 w-fit m-auto`}
		>
			<header className='flex items-center text-left gap-2.5'>
				<img src={cycle} alt='recommended' />
				<p className=' text-base leading-[21px] text-primaryBlack font-bold'>
					{recommendation.percentage}% Recommended
				</p>
			</header>
			<div className='content m-auto'>
				<img
					src={recommendation.image}
					alt={recommendation.title}
					className=' max-w-[217px]'
				/>
			</div>
			<footer className='flex flex-col gap-2 items-start'>
				<p className=' text-xl  leading-[26px] text-gray600 font-bold'>
					{recommendation.title}
				</p>
				<div className='info flex items-center gap-[105px]'>
					<div className='left flex items-center gap-4'>
						<img src={shares} alt='shares' />
						{recommendation.shares > 1000
							? `${recommendation.shares / 1000}K`
							: recommendation.shares}
						<img src={gear} alt='gear' />
						<img src={power} alt='power' />
					</div>
					<p>{`$${recommendation.price}/h`}</p>
				</div>
			</footer>
		</div>
	)
}

export default Recommendation
