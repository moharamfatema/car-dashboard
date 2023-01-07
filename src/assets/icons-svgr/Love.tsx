import * as React from 'react'
import { SVGProps } from 'react'
const SvgLove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M20.347 4.653A5.66 5.66 0 0 0 12 5.04a5.66 5.66 0 0 0-8.347-.386 5.66 5.66 0 0 0 0 7.996l8.04 8.039a.434.434 0 0 0 .614 0l8.04-8.04a5.659 5.659 0 0 0 0-7.995Z'
			fill='#F84F56'
		/>
	</svg>
)
export default SvgLove
