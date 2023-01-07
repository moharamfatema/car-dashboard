import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow1 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m15.37 11.946-5.66-5.65a1 1 0 1 0-1.42 1.41l4.95 5-4.95 4.95a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1.003 1.003 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z'
			fill='#72767C'
		/>
	</svg>
)
export default SvgArrow1
