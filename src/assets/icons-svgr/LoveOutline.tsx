import * as React from 'react'
import { SVGProps } from 'react'
const SvgLoveOutline = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g clipPath='url(#love-outline_svg__a)'>
			<path
				d='M19.816 5.184a4.91 4.91 0 0 1 0 6.934L12 19.934l-7.816-7.816a4.91 4.91 0 0 1 0-6.935 4.91 4.91 0 0 1 7.238.334l.577.698.579-.697a4.91 4.91 0 0 1 7.239-.334Z'
				stroke='#A4A5A6'
				strokeWidth={1.5}
			/>
		</g>
		<defs>
			<clipPath id='love-outline_svg__a'>
				<path fill='#fff' d='M0 0h24v24H0z' />
			</clipPath>
		</defs>
	</svg>
)
export default SvgLoveOutline
