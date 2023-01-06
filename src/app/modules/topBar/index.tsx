import React, { FC } from 'react'
import SearchBar from './components/searchBar'
import notification from '../../../assets/icons/notification.svg'
import ua from '../../../assets/avatars/ua.png'

const TopBar: FC = () => {
	return (
		<div className='top-bar bg-white flex w-full py-4 px-8 items-center content-center justify-between'>
			<SearchBar />
			<div className='flex sb-right flex-row items-center gap-10'>
				<div className='notification'>
					<img src={notification} alt='notification' />
				</div>
				<div className='user '>
					<img
						src={ua}
						alt='user avatar'
						className='w-12 h-12 rounded-full '
					/>
				</div>
			</div>
		</div>
	)
}

export default TopBar
