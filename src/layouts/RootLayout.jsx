import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header className="h-[100px]">
				<Navbar />
			</header>
			<main className="m-auto my-10 max-w-[1440px] 1card:max-w-[375px]">
				<Outlet />
			</main>
		</div>
	);
}
