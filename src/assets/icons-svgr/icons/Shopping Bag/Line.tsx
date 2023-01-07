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
			d='M14.785 6.667h-9.57c-.962 0-1.724.81-1.664 1.77l.417 6.667a1.667 1.667 0 0 0 1.663 1.563h8.737c.88 0 1.609-.685 1.664-1.563l.417-6.667c.06-.96-.703-1.77-1.664-1.77ZM5.215 5a3.333 3.333 0 0 0-3.327 3.541l.417 6.667a3.333 3.333 0 0 0 3.326 3.125h8.737a3.333 3.333 0 0 0 3.327-3.125l.417-6.667A3.333 3.333 0 0 0 14.785 5h-9.57Z'
			fill='#777E91'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M5.833 5.833a4.167 4.167 0 1 1 8.334 0V7.5a.833.833 0 1 1-1.667 0V5.833a2.5 2.5 0 1 0-5 0V7.5a.833.833 0 0 1-1.667 0V5.833Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
