import React, { FC } from 'react'
import Logo from './components/logo'
import Contents from './components/contents'
import Bottom from './components/bottom'

const SideBar: FC = () => {
	return (
		<section className='sidebar flex flex-col py-[30px] px-6 h-[100vh] gap-[35px] bg-white'>
			<header>
				<Logo />
			</header>
			<div className='tabs flex flex-col justify-between h-full'>
				<Contents />
				<Bottom />
			</div>
		</section>
	)
}

export default SideBar
