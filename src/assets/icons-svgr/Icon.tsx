import * as React from 'react'
import { SVGProps } from 'react'
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M15.646 12.716a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1.006 1.006 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19Zm-3.71-.71a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'
			fill='#939090'
		/>
	</svg>
)
export default SvgIcon
