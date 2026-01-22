import { createContext, useContext, useReducer } from "react";
import tareas from "../data/tareas";

const TasksContext = createContext();

function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.task];
    case "TOGGLE":
      return state.map(task =>
        task.id === action.id
          ? { ...task, state: !task.state }
          : task
      );
    case "DELETE":
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, tareas);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);