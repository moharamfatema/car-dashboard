import React, { FC } from 'react'
import SearchBar from './components/searchBar'
import notification from '../../../assets/icons/notification.svg'
import ua from '../../../assets/avatars/ua.png'

const TopBar: FC = () => {
	return (
		<div className='top-bar bg-white flex w-full py-4 px-8 items-center content-center justify-between focus:border-secondaryOrange'>
			<SearchBar />
			<div className='flex sb-right flex-row items-center gap-10'>
				<div className='notification hover:bg-hover rounded-full p-3'>
					<img
						src={notification}
						alt='notification'
						className=' w-5 h-6'
					/>
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
