import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../modules/sideBar'
import TopBar from '../modules/topBar'

const Layout: FC = () => {
	return (
		<div className='flex flex-row h-[100vh] gap-x-px'>
			<SideBar />
			<div className='flex flex-col grow ml-[225px]'>
				<TopBar />
				<div className='grow p-[30px]'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
