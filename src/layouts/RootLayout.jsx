import { Outlet, NavLink } from 'react-router-dom';
import logo from '/public/images/techover-logo.png';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav className="navbar">
					<img className="logo" src={logo} alt="Techover" />
					<div className="nav-links">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
						<NavLink className="nav-link" to="country">
							Country
						</NavLink>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
