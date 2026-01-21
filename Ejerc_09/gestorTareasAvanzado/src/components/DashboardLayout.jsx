import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
            <aside style={{ width: "200px" }}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/dashboard">Ver Tareas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/new">Añadir Tarea</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>

            <section style={{ padding: "1rem" }}>
                <Outlet />
            </section>
        </div>
    );
}
