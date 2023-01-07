import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m10.387 12.719 4.383-4.392a.776.776 0 1 0-1.093-1.101l-3.88 3.84-3.84-3.84a.776.776 0 0 0-1.266.252.776.776 0 0 0-.061.298.776.776 0 0 0 .233.551l4.383 4.392a.775.775 0 0 0 1.14 0Z'
			fill='#5F6165'
		/>
	</svg>
)
export default SvgArrow
