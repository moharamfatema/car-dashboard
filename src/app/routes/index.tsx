import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layouts'
import Booking from '../modules/booking'
import Dashboard from '../modules/dashboard'

const AppRoutes: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="*" element={<div>404</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
