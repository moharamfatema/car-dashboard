import * as React from 'react'
import { SVGProps } from 'react'
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
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
			d='M2 16a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H2Zm17 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z'
			fill='#777E91'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M16 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H2Zm9 0a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H11Z'
			fill='#777E91'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
