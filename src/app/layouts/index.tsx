import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../modules/sideBar'
import TopBar from '../modules/topBar'

const Layout: FC = () => {
	return (
		<div>
			<TopBar />
			<div className="flex">
				<SideBar />
				<div className="grow">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
