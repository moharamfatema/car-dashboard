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
			d='m20.772 9.156-1.368-4.105A2.995 2.995 0 0 0 16.559 3H7.441a2.995 2.995 0 0 0-2.845 2.051L3.228 9.156A2.003 2.003 0 0 0 2 11v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.993 1.993 0 0 0 22 16v-5c0-.829-.508-1.541-1.228-1.844ZM4 16v-5h16l.002 5H4ZM7.441 5h9.117c.431 0 .813.274.949.684L18.613 9H5.387l1.105-3.316A1 1 0 0 1 7.441 5Z'
			fill='#777E91'
		/>
		<path
			d='M6.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
