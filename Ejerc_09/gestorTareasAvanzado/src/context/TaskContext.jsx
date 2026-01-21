import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const initialTasks = [
    {
        id: "1",
        title: "Aprender React Router",
        description: "Rutas anidadas y layouts",
        status: "pending",
    },
    {
        id: "2",
        title: "Configurar Vite",
        description: "Proyecto inicial",
        status: "completed",
    },
];

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (task) => {
        setTasks((prev) => [...prev, task]);
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    const toggleTaskStatus = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status: task.status === "pending" ? "completed" : "pending",
                    }
                    : task
            )
        );
    };


    return (
        <TaskContext.Provider
            value={{ tasks, addTask, deleteTask, toggleTaskStatus }}
        >
            {children}
        </TaskContext.Provider>

    );
}

export function useTasks() {
    return useContext(TaskContext);
}