import * as React from 'react'
import { SVGProps } from 'react'
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M15.833 5H4.167a.833.833 0 0 0-.834.833v10c0 .46.373.834.834.834h11.666c.46 0 .834-.373.834-.834v-10A.833.833 0 0 0 15.833 5ZM4.167 3.333a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h11.666a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5H4.167Z'
			fill='#777E91'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8.333 10a.833.833 0 0 0 0 1.667h5.834a.833.833 0 0 0 0-1.667H8.333Zm-2.5 3.333a.833.833 0 0 0 0 1.667h5a.833.833 0 1 0 0-1.667h-5ZM5.833 1.667A.833.833 0 0 0 5 2.5v3.333a.833.833 0 1 0 1.667 0V2.5a.833.833 0 0 0-.834-.833Zm8.334 0a.833.833 0 0 0-.834.833v3.333a.833.833 0 0 0 1.667 0V2.5a.833.833 0 0 0-.833-.833Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
