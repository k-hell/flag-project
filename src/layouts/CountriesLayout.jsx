import { Outlet } from 'react-router-dom';

export default function CountriesLayout() {
	return (
		<div className="countries-layout">
			<Outlet />
		</div>
	);
}
