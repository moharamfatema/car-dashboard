import * as React from 'react'
import { SVGProps } from 'react'
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M21.916 11.6C19.898 6.91 16.1 4 12 4s-7.897 2.91-9.917 7.6a1 1 0 0 0 0 .8C4.103 17.09 7.901 20 12 20s7.897-2.91 9.916-7.6a1 1 0 0 0 0-.8ZM12 18c-3.169 0-6.168-2.29-7.897-6C5.833 8.29 8.83 6 12 6c3.169 0 6.168 2.29 7.897 6-1.73 3.71-4.728 6-7.897 6Zm0-10a3.998 3.998 0 0 0-3.922 4.78 4 4 0 0 0 5.452 2.915 3.998 3.998 0 0 0 1.297-6.523A3.998 3.998 0 0 0 12 8Zm0 6a1.999 1.999 0 1 1 0-3.998A1.999 1.999 0 0 1 12 14Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgEye
