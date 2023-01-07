import * as React from 'react'
import { SVGProps } from 'react'
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
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
			d='M14.09 7.265a1 1 0 0 1 1.414.057l3.23 3.5a1 1 0 0 1 0 1.356l-3.23 3.5a1 1 0 1 1-1.47-1.356l1.682-1.822H6a1 1 0 1 1 0-2h9.716l-1.682-1.822a1 1 0 0 1 .057-1.413Z'
			fill='#fff'
		/>
	</svg>
)
export default SvgLine
