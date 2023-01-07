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
			d='M3 22a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z'
			fill='#258C60'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M16.707 3.121a1 1 0 0 0-1.414 0L14.414 4 18 7.586l.879-.879a1 1 0 0 0 0-1.414L16.707 3.12ZM6.914 11.5 13 5.414 16.586 9 10.5 15.086 6.914 11.5ZM5.5 12.914l-.5.5V17h3.586l.5-.5L5.5 12.914Zm8.379-11.207a3 3 0 0 1 4.242 0l2.172 2.172a3 3 0 0 1 0 4.242L10 18.414A2 2 0 0 1 8.586 19H5a2 2 0 0 1-2-2v-3.586A2 2 0 0 1 3.586 12L13.879 1.707Z'
			fill='#258C60'
		/>
	</svg>
)
export default SvgLine
