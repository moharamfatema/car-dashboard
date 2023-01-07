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
			d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm6.32-5.094A8.001 8.001 0 0 0 13 4.062v4.064a4.002 4.002 0 0 1 2.446 5.906l2.874 2.874Zm-1.414 1.414-2.874-2.874A3.981 3.981 0 0 1 12 16a3.98 3.98 0 0 1-2.032-.554L7.094 18.32A7.966 7.966 0 0 0 12 20c1.849 0 3.55-.627 4.906-1.68ZM8 12c0 .742.202 1.437.554 2.032L5.68 16.906A8.001 8.001 0 0 1 11 4.062v4.064C9.275 8.57 8 10.136 8 12Zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
