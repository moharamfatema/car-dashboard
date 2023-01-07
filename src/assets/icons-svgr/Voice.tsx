import * as React from 'react'
import { SVGProps } from 'react'
const SvgVoice = (props: SVGProps<SVGSVGElement>) => (
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
			d='M6.708 10.368c.392 0 .709.317.709.707v.708a4.248 4.248 0 0 0 4.25 4.245c2.347 0 4.25-1.9 4.25-4.245v-.707a.708.708 0 0 1 1.416 0v.707a5.664 5.664 0 0 1-4.958 5.617v2.166H14.5a.708.708 0 1 1 0 1.415H8.833a.708.708 0 1 1 0-1.415h2.125V17.4A5.664 5.664 0 0 1 6 11.783v-.707c0-.391.317-.708.708-.708Z'
			fill='#A9ABAD'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.083 11.783V6.83a1.416 1.416 0 0 0-2.834 0v4.953a1.416 1.416 0 0 0 2.834 0ZM11.666 4a2.832 2.832 0 0 0-2.833 2.83v4.953a2.832 2.832 0 0 0 2.833 2.83 2.832 2.832 0 0 0 2.833-2.83V6.83A2.832 2.832 0 0 0 11.666 4Z'
			fill='#A9ABAD'
		/>
	</svg>
)
export default SvgVoice
