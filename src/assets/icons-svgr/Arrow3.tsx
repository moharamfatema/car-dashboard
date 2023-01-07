import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow3 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m12.054 15.37 5.65-5.66a1 1 0 1 0-1.41-1.42l-5 4.95-4.95-4.95a1 1 0 0 0-1.41 0 1 1 0 0 0-.3.71 1 1 0 0 0 .3.71l5.65 5.66a1 1 0 0 0 1.47 0Z'
			fill='#72767C'
		/>
	</svg>
)
export default SvgArrow3
