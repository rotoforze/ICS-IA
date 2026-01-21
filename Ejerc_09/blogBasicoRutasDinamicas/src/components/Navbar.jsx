import { Outlet, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav>
                <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '40dvw' }}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                            end
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/posts"
                            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                        >
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Navbar;