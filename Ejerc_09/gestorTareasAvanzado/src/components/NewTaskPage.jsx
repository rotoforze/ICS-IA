import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export default function NewTaskPage() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    addTask({
      id: Date.now().toString(),
      title: form.title.value,
      description: form.description.value,
      status: "pending",
    });

    navigate("/dashboard");
  };

  return (
    <>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Título" required />
        <textarea name="description" placeholder="Descripción" />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}
