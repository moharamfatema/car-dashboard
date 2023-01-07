import React from 'react'
import Search from '../../../../../assets/icons-svgr/Component9'
const SearchBar = () => {
	return (
		<div className='search-bar flex items-center gap-2.5 bg-[#F5F4F6] rounded-lg py-3 px-[14px] w-[358px]'>
			<div className='search-icon flex items-center justify-center'>
				{/* <img src={search} alt='search' /> */}
				<Search />
			</div>
			<input
				type='text'
				placeholder='Search or type'
				name='search'
				className='caret-secondaryOrange bg-[#F5F4F6] placeholder:text-gray300 rounded-lg text-base font-medium leading-5 focus-visible:outline-none'
				autoFocus
			/>
		</div>
	)
}

export default SearchBar
