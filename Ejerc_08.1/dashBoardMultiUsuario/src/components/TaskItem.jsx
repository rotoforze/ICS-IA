import React from "react";
import { useAuth } from "../context/AuthContext";
import usuarios from "../data/usuarios";

const TaskItem = React.memo(({ task, onToggle, onDelete }) => {
  const { currentUser } = useAuth();

  const author = usuarios.find(u => u.id === task.authorId);

  const isOwner = currentUser.id === task.authorId;
  const isGuest = currentUser.id === null;
  const disabled = !isOwner || isGuest;

  return (
    <li style={{ opacity: disabled ? 0.5 : 1 }}>
      <input
        type="checkbox"
        checked={task.state}
        disabled={disabled}
        onChange={() => onToggle(task.id)}
      />
      {task.title} — <em>{author?.nombre}</em>
      <button disabled={disabled} onClick={() => onDelete(task.id)}>
        Borrar
      </button>
    </li>
  );
});

export default TaskItem;