import * as React from 'react'
import { SVGProps } from 'react'
const SvgRange = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m10.416 17.922 3.104-3.104-1.296-1.313-1.535 1.535V5.15l1.535 1.535 1.313-1.313-3.12-3.103a.937.937 0 0 0-1.314 0L6 5.372l1.313 1.313L8.847 5.15v9.89l-1.534-1.535L6 14.818l3.103 3.104a.937.937 0 0 0 1.313 0Z'
			fill='#000'
		/>
	</svg>
)
export default SvgRange
