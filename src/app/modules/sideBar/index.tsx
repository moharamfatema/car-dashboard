import React, { FC } from 'react'
import Logo from './components/logo'
import Contents from './components/contents'
import Bottom from './components/bottom'

const SideBar: FC = () => {
	return (
		<section className='sidebar flex flex-col py-[30px] px-6 h-[100vh] gap-[35px]'>
			<header>
				<Logo />
			</header>
			<Contents />
			<footer className='flex flex-row items-center absolute bottom-[30px]'>
				<Bottom />
			</footer>
		</section>
	)
}

export default SideBar
