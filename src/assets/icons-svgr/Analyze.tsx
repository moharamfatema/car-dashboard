import * as React from 'react'
import { SVGProps } from 'react'
const SvgAnalyze = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M7.5 16A1.5 1.5 0 0 0 9 14.5a.77.77 0 0 0 0-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 1 0 3 0v-.08L20.5 9.5A1.5 1.5 0 1 0 19 8a.767.767 0 0 0 0 .15l-3.61 3.61h-.16L13.5 10a1.5 1.5 0 1 0-3 0l-3 3a1.5 1.5 0 1 0 0 3ZM21 20H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z'
			fill='#72767C'
		/>
	</svg>
)
export default SvgAnalyze
