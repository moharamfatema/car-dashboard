import React from 'react'
import search from '../../../../../assets/icons/Component 9.svg'
const SearchBar = () => {
	return (
		<div className='search-bar flex items-center gap-2.5 bg-[#F5F4F6] rounded-lg py-3 px-[14px] w-[358px]'>
			<div className='search-icon flex items-center justify-center'>
				<img src={search} alt='search' />
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
