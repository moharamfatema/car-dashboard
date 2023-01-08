import React, { FC } from 'react'
import Recommendation from '../Recommendation'
import { recommendations } from './recommendationData'

const Recommendations: FC = () => {
	const bgColors = ['bg-[#E1DFA4]', 'bg-[#E3ECF1]', 'bg-[#F4E3E5]']
	return (
		<div className='recommendations grid grid-cols-1 lg:grid-cols-3 gap-6 w-full'>
			{recommendations.map(recommendation => (
				<Recommendation
					recommendation={recommendation}
					bgColor={bgColors[recommendation.id % 3]}
					key={recommendation.id}
				/>
			))}
		</div>
	)
}

export default Recommendations
