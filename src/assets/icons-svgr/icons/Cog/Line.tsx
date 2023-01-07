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
			d='M19.95 7.09a2.991 2.991 0 0 0-.879-2.161 3.004 3.004 0 0 0-3.835-.342.182.182 0 0 1-.174.02.183.183 0 0 1-.109-.137 2.983 2.983 0 0 0-.803-1.562A2.993 2.993 0 0 0 12 2a3.004 3.004 0 0 0-2.953 2.47.183.183 0 0 1-.11.137.182.182 0 0 1-.173-.02 2.979 2.979 0 0 0-1.673-.536 2.993 2.993 0 0 0-2.162.878 3.004 3.004 0 0 0-.342 3.835.182.182 0 0 1 .02.174.183.183 0 0 1-.137.109 2.979 2.979 0 0 0-1.562.803A2.993 2.993 0 0 0 2 12a3.005 3.005 0 0 0 2.47 2.953.182.182 0 0 1 .117.283 2.977 2.977 0 0 0-.536 1.673c-.01.78.282 1.566.878 2.162a3.005 3.005 0 0 0 3.835.342.182.182 0 0 1 .174-.02.183.183 0 0 1 .109.137 2.977 2.977 0 0 0 .803 1.562c.545.56 1.307.908 2.15.908a3.004 3.004 0 0 0 2.953-2.47.183.183 0 0 1 .11-.137.182.182 0 0 1 .173.02 2.976 2.976 0 0 0 1.673.537 2.993 2.993 0 0 0 2.162-.879 3.005 3.005 0 0 0 .342-3.835.182.182 0 0 1-.02-.174.183.183 0 0 1 .137-.109 2.983 2.983 0 0 0 1.562-.803c.56-.545.908-1.307.908-2.15a2.99 2.99 0 0 0-.907-2.15 3.004 3.004 0 0 0-1.563-.803.183.183 0 0 1-.137-.11.182.182 0 0 1 .02-.173 2.978 2.978 0 0 0 .537-1.674Zm-2.293-.747a1 1 0 0 0-1.277-.115 2.182 2.182 0 0 1-3.396-1.407 1.001 1.001 0 0 0-1.968 0A2.182 2.182 0 0 1 7.62 6.228 1 1 0 0 0 6.228 7.62a2.182 2.182 0 0 1-1.407 3.396 1 1 0 0 0 0 1.968 2.182 2.182 0 0 1 1.407 3.396 1 1 0 0 0 1.392 1.392 2.183 2.183 0 0 1 3.396 1.407 1.001 1.001 0 0 0 1.968 0 2.182 2.182 0 0 1 3.396-1.407 1 1 0 0 0 1.392-1.392 2.182 2.182 0 0 1 1.407-3.396 1.001 1.001 0 0 0 0-1.968 2.182 2.182 0 0 1-1.407-3.396 1 1 0 0 0-.115-1.277Z'
			fill='#777E91'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
			fill='#777E91'
		/>
	</svg>
)
export default SvgLine
