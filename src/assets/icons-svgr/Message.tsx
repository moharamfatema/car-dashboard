import * as React from 'react'
import { SVGProps } from 'react'
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M20.432 4.061a.5.5 0 0 1 .674.598L16.994 19.2a.5.5 0 0 1-.723.302l-4.37-2.421-3.324 2.995.511-4.214.164-.248-.015-.009 8.604-8.392-10.95 7.093-3.814-2.113a.5.5 0 0 1 .05-.898L20.432 4.06Z'
			fill='#0177FD'
		/>
	</svg>
)
export default SvgMessage
