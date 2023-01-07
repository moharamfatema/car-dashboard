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
			d='M12 21.511c0 .277.224.502.5.488 5.29-.26 9.5-4.635 9.5-9.993C22 6.48 17.523 2 12 2S2 6.48 2 12.006c0 4.628 3.14 8.522 7.404 9.665A.478.478 0 0 0 10 21.2v-7.193H9a1 1 0 0 1 0-2.001h1v-2.001a3 3 0 0 1 3-3.002h1a1 1 0 0 1 0 2.001h-1a1 1 0 0 0-1 1v2.002h2a1 1 0 0 1 0 2.001h-2v7.504Z'
			fill='#fff'
		/>
	</svg>
)
export default SvgFilled
