import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const { currentUser } = useAuth();
  const { tasks, dispatch } = useTasks();

  const isGuest = currentUser.id === null;

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || isGuest) return;

    dispatch({
      type: "ADD",
      task: {
        id: Date.now(),
        title,
        authorId: currentUser.id,
        state: false
      }
    });

    setTitle("");
  };

  if (isGuest) {
    return <p><em>Inicia sesión para añadir tareas</em></p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button>Añadir</button>
    </form>
  );
}