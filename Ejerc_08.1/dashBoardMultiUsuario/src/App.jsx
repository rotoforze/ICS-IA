import { AuthProvider, useAuth } from "./context/AuthContext";
import { TasksProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import UserInfo from "./components/UserInfo";
import AddTask from "./components/AddTask";
import usuarios from "./data/usuarios";

function UserSelector() {
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <select
      value={currentUser.id ?? "guest"}
      onChange={e => {
        const value = e.target.value;
        if (value === "guest") {
          setCurrentUser({ id: null, nombre: "Invitado" });
        } else {
          const user = usuarios.find(u => u.id === Number(value));
          setCurrentUser(user);
        }
      }}
    >
      <option value="guest">Invitado</option>
      {usuarios.map(user => (
        <option key={user.id} value={user.id}>
          {user.nombre}
        </option>
      ))}
    </select>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <UserInfo />
        <UserSelector />
        <AddTask />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}