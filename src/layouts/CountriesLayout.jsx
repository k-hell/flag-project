import { Link, Outlet } from 'react-router-dom';

export default function CountriesLayout() {
	return (
		<div className="countries-layout">
			<Link to="/">⬅ Back</Link>
			<Outlet />
		</div>
	);
}
