import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m8.63 12.054 5.66 5.65A1.002 1.002 0 0 0 16 17a1 1 0 0 0-.29-.705l-4.95-5 4.95-4.95a1 1 0 0 0 0-1.41 1 1 0 0 0-.71-.3 1 1 0 0 0-.71.3l-5.66 5.65a1 1 0 0 0 0 1.47Z'
			fill='#72767C'
		/>
	</svg>
)
export default SvgArrow2
