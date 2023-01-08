import React, { FC } from 'react'
import { IStatus } from '../../../../shared/types'
import Gauge from './Gauge'

interface IStatusCardProps {
	status: IStatus
}

const StatusCard: FC<IStatusCardProps> = ({ status }) => {
	return (
		<div
			className={`status-card bg-${status.color} rounded-[14px] py-5 px-[60px] gap-2.5 `}
		>
			<header className='status-card__title flex flex-col items-center gap-2.5'>
				<status.icon
					className={
						`${status.iconColor} rounded-full bg-opacity-20 p-2 h-[38px] w-[38px]` +
						' bg-' +
						`${status.iconColor}`
					}
				/>
				<h2 className={'text-' + `${status.textColor}`}>
					{status.name}
				</h2>
			</header>
			<Gauge {...status} />
		</div>
	)
}

export default StatusCard
