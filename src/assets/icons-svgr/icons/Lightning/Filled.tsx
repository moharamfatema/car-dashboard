import * as React from 'react'
import { SVGProps } from 'react'
const SvgFilled = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M4.145 13.415 13.501.46c.62-.857 1.971-.293 1.797.75L14 9h5.044a1 1 0 0 1 .81 1.585L10.5 23.54c-.62.857-1.971.293-1.797-.75L10 15H4.956a1 1 0 0 1-.81-1.585Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgFilled
