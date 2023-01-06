import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../modules/sideBar'
import TopBar from '../modules/topBar'

const Layout: FC = () => {
	return (
		<div className='flex flex-row h-[100vh]'>
			<SideBar />
			<div className='flex flex-col grow'>
				<TopBar />
				<div className='grow'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
