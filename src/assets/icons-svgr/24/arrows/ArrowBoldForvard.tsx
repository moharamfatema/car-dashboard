import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowBoldForvard = (props: SVGProps<SVGSVGElement>) => (
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
			d='M12 2.796v5.227C5.451 8.331 2 11.735 2 18v2.414l1.707-1.707C5.954 16.46 8.69 15.52 12 15.872v5.332L22.519 12 12 2.796ZM14 10V7.204L19.481 12 14 16.796v-2.643l-.836-.14c-3.414-.569-6.42.002-8.963 1.704C4.95 11.85 7.8 10 13 10h1Z'
			fill='#72767C'
		/>
	</svg>
)
export default SvgArrowBoldForvard
