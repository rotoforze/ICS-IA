import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask, toggleTaskStatus } = useTasks();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) return <p>Tarea no encontrada</p>;

  const handleDelete = () => {
    deleteTask(taskId);
    navigate("/dashboard", { replace: true });
  };

  const handleToggleStatus = () => {
    toggleTaskStatus(taskId);
  };

  return (
    <>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <p>
        Estado actual:{" "}
        <strong>
          {task.status === "pending" ? "Pendiente" : "Completada"}
        </strong>
      </p>

      <button onClick={handleToggleStatus} style={{ marginRight: "1rem" }}>
        {task.status === "pending"
          ? "Marcar como completada"
          : "Marcar como pendiente"}
      </button>

      <button onClick={handleDelete}>Borrar</button>
    </>
  );
}
