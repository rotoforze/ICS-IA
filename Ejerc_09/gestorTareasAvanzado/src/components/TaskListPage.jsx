import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export default function TaskListPage() {
  const { tasks } = useTasks();

  return (
    <>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}
              style={{
                opacity: task.status === "completed" ? 0.6 : 1,
                textDecoration:
                  task.status === "completed" ? "line-through" : "none",
              }}>
              <Link to={`/dashboard/task/${task.id}`}>
                {task.title} ({task.status})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
