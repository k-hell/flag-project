import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header className="h-[100px]">
				<Navbar />
			</header>
			<main className="max-w-[1440px] my-10 m-auto">
				<Outlet />
			</main>
		</div>
	);
}
