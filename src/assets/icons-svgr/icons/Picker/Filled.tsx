import * as React from 'react'
import { SVGProps } from 'react'
const SvgFilled = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m10.59 7.256 2.154 2.155a.833.833 0 0 1 0 1.178l-3.585 3.586a8.333 8.333 0 0 1-1.846 1.392l-3.93 2.183c-.733.407-1.54-.4-1.133-1.133l2.183-3.93a8.332 8.332 0 0 1 1.392-1.846l3.586-3.585a.833.833 0 0 1 1.178 0ZM15.833 7.5l.625.625a.884.884 0 1 1-1.25 1.25l-4.583-4.583a.884.884 0 1 1 1.25-1.25l.625.625L14.167 2.5A2.357 2.357 0 0 1 17.5 5.833L15.833 7.5Z'
			fill='#A9ABAD'
		/>
	</svg>
)
export default SvgFilled
