import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Itab } from '../../../../shared/types'

interface Iprops {
	tabs: Itab[]
}

const TabsList: FC<Iprops> = ({ tabs }) => {
	const current = useLocation().pathname

	return (
		<div className='tabs grid grid-cols-1 gap-2.5'>
			{tabs.map(tab => {
				return (
					<Link to={tab.link} key={tab.name}>
						<div
							className={`flex flex-row items-center rounded-md py-[7px] px-[8px] text-gray500 gap-2 grow w-44 ${
								current == tab.link
									? 'bg-hover'
									: 'hover:bg-hover'
							}`}
						>
							<img
								src={tab.icon}
								alt={tab.name}
								className='w-5 h-5'
							/>
							<p className='title-2'>{tab.name}</p>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default TabsList
