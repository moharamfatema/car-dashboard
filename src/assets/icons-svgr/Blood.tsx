import * as React from 'react'
import { SVGProps } from 'react'
const SvgBlood = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M10.383 2.12a.34.34 0 0 0-.517 0C9.625 2.4 4 9.114 4 12.326a6.07 6.07 0 0 0 6.125 6.003 6.071 6.071 0 0 0 6.125-6.003c0-3.212-5.625-9.926-5.866-10.208Zm1.937 14.325a.34.34 0 0 1-.306-.606 3.94 3.94 0 0 0 2.194-3.512.34.34 0 0 1 .68 0 4.614 4.614 0 0 1-2.568 4.118Z'
			fill='#444'
		/>
	</svg>
)
export default SvgBlood
