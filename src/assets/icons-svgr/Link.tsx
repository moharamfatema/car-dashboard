import * as React from 'react'
import { SVGProps } from 'react'
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m18.271 12.398-6.18 6.19a4.25 4.25 0 0 1-6-6l8-8a2.57 2.57 0 0 1 3.54 0 2.52 2.52 0 0 1 0 3.54l-6.9 6.89a.765.765 0 0 1-1.12-1.04l5.13-5.12a1.004 1.004 0 1 0-1.42-1.42l-5.13 5.14a2.74 2.74 0 0 0 0 3.89 2.82 2.82 0 0 0 3.89 0l6.89-6.9a4.5 4.5 0 0 0-6.36-6.36l-8 8a6.25 6.25 0 0 0 8.89 8.77l6.19-6.18a1.005 1.005 0 0 0-1.42-1.42v.02Z'
			fill='#757575'
		/>
	</svg>
)
export default SvgLink
