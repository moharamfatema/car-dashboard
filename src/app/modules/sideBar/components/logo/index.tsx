import React from 'react'
import logo from '../../../../../assets/logo.svg'

const Logo = () => {
	return (
		<div className='logo flex flex-row gap-2.5 items-center'>
			<img
				src={logo}
				alt='logo'
				className='bg-primaryPurple px-[5px] py-1.5 mr-1 rounded-md w-6 h-6'
			/>
			<h2 className='text-grayDark'>Motiv.</h2>
		</div>
	)
}

export default Logo
