import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, dispatch } = useTasks();

  const handleToggle = id => dispatch({ type: "TOGGLE", id });
  const handleDelete = id => dispatch({ type: "DELETE", id });

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}