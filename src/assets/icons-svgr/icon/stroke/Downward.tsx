import * as React from 'react'
import { SVGProps } from 'react'
const SvgDownward = (props: SVGProps<SVGSVGElement>) => (
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
			d='M17.914 8a.65.65 0 0 1 .508 1.056l-5.581 6.976a.65.65 0 0 1-1.015 0L6.245 9.056A.65.65 0 0 1 6.752 8h11.162Z'
			fill='#1F2937'
		/>
	</svg>
)
export default SvgDownward
