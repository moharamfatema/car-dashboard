import React, { FC } from 'react'
import { IRecommendation } from '../../../../shared/types'

import Cycle from '../../../../../assets/icons-svgr/Icon5'
import Shares from '../../../../../assets/icons-svgr/Icon6'
import Power from '../../../../../assets/icons-svgr/Icon7'
import Gear from '../../../../../assets/icons-svgr/Icon8'

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
				<Cycle className='grey' />
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
						<Shares />
						{recommendation.shares > 1000
							? `${recommendation.shares / 1000}K`
							: recommendation.shares}
						<Gear className='grey' />
						<Power />
					</div>
					<p>{`$${recommendation.price}/h`}</p>
				</div>
			</footer>
		</div>
	)
}

export default Recommendation
