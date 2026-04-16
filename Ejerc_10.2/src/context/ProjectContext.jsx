import { createContext, useContext, useState } from "react";
import { canUpgradeState, getProjectList, getTaskList } from "../utils/api";

const ProjectContext = createContext();
export function ProjectProvider({ children }) {

    const [listaProjects, setListaProjects] = useState('');
    const [listaTasks, setListaTasks] = useState('');

    /**
     * Devuelve el último ID de la lista de projectos + 1.
     * 
     * @returns Number
     */
    const getNextProjectID = () => {
        const json = JSON.stringify(listaProjects)
        const textToFind = '"id":';
        let number = 0
        for (let i = json.lastIndexOf(textToFind) + textToFind.length; Number.parseInt(json.charAt(i)); i++) {
            number = number * 10 + Number.parseInt(json.charAt(i));
        }
        return number + 1;
    }

    /**
     * Debe recibir un objeto JS ccon title, description y state.
     * Siendo todos String y state Number. Devuelve el ID si se ha podido añadir,
     * y -1 si no se ha añadido.
     * 
     * @param {JSON} object 
     * @returns Boolean
     */
    const addProject = (object) => {
        console.log(object)
        let newList = structuredClone(listaProjects);
        const parsedObj = {
            id: getNextProjectID(),
            title: object.title || '',
            description: object.description || '',
            state: object.state || ''
        };
        newList.push(parsedObj);
        if (JSON.stringify(newList).lastIndexOf(JSON.stringify(parsedObj))) {
            setListaProjects(newList);
            return parsedObj.id;
        }
        return -1;
    }

    const getProjectFromID = (projectId) => {
        return listaProjects.filter(project => project.id == projectId);
    }
    /**
     * Si el projecto no existe, devuelve false. Devuelve true si ha podido eliminar el projecto y sus tasks.
     * 
     * @param {Number} projectId 
     * @returns Boolean
     */
    const removeProjectFromID = (projectId) => {
        const newListProjects = structuredClone(listaProjects).filter(project => project.id != projectId);
        if (newListProjects == listaProjects) return false;
        setListaProjects(newListProjects);
        const newListTasks = structuredClone(listaTasks).filter(task => task.projectId != projectId);
        setListaTasks(newListTasks);
        return true;
    }

    /**
     * Devuelve el último ID de la lista de tasks + 1.
     * 
     * @returns Number
     */
    const getNextTaskID = () => {
        const json = JSON.stringify(listaTasks);
        const textToFind = '"id":';
        let number = 0
        for (let i = json.lastIndexOf(textToFind) + textToFind.length; Number.parseInt(json.charAt(i)); i++) {
            number = number * 10 + Number.parseInt(json.charAt(i));
        }
        return number + 1;
    }

    /**
     * Debe recibir un objeto JS ccon title, description, projectId y state.
     * Siendo todos String y state y projectId Number. Devuelve true si se ha podido añadir,
     * y false si no se ha añadido.
     * 
     * @param {JSON} object 
     * @returns Boolean
     */
    const addTask = (object) => {
        console.log(object)
        let newList = structuredClone(listaTasks);
        const parsedObj = {
            id: getNextProjectID(),
            title: object.title || '',
            description: object.description || '',
            projectId: object.projectId || '',
            state: object.state || ''
        };
        newList.push(parsedObj);
        if (JSON.stringify(newList).lastIndexOf(JSON.stringify(parsedObj))) {
            setListaTasks(newList);
            return parsedObj.id;
        }
        return -1;
    }

    /**
     * Si la task no existe, devuelve false. Devuelve true si ha podido eliminar la task.
     * 
     * @param {Number} taskId 
     * @returns Boolean
     */
    const removeTaskFromID = (taskId) => {
        const newListTasks = structuredClone(listaTasks).filter(task => task.id != taskId);
        if (newListTasks == listaTasks) return false;
        setListaTasks(newListTasks);
        return true;
    }


    const getTasksFromProjectId = (projectId) => {
        return listaTasks.filter(task => task.projectId == projectId);
    }

    const goToNextState = (id, isProject = true) => {
        if (typeof isProject != 'boolean') return -1;

        if (isProject) {
            // edita el estado del project cuyo id sea id
            const updatedProjects = listaProjects.map(project => {
                if (project.id === id) {
                    if (canUpgradeState(project.state)) {
                        return { ...project, state: project.state + 1 };
                    } else return -1
                }
                return project;
            });
            setListaProjects(updatedProjects);
        } else {
            // edita el estado de la task cuyo id sea id
            const updatedTasks = listaTasks.map(task => {
                if (task.id === id) {
                    if (canUpgradeState(task.state)) {
                        return { ...task, state: task.state + 1 };
                    } else return -1
                }
                return task;
            });
            setListaTasks(updatedTasks);
        }
    }

    return (
        <ProjectContext.Provider
            value={{ listaProjects, setListaProjects, addProject, getProjectFromID, removeProjectFromID, listaTasks, setListaTasks, getNextTaskID, addTask, getTasksFromProjectId, removeTaskFromID, goToNextState }} >
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjects() {
    return useContext(ProjectContext);
}

export function loader() {
    return {
        projects: getProjectList,
        tasks: getTaskList
    };
}