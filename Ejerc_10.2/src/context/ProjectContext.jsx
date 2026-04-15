import { createContext, useContext, useState } from "react";
import { getProjectList, getTaskList } from "../utils/api";

const ProjectContext = createContext();
export function ProjectProvider({ children }) {

    const [listaProjects, setListaProjects] = useState('');
    const [listaTasks, setListaTasks] = useState('');

    const getNextProjectID = () => {
        const json = JSON.stringify(listaProjects)
        const textToFind = '"id":';
        let number = 0
        for (let i = json.lastIndexOf(textToFind) + textToFind.length; Number.parseInt(json.charAt(i)); i++) {
            number = number * 10 + Number.parseInt(json.charAt(i));
        }
        return number + 1;
    }

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
            return true;
        }
        return false;
    }

    return (
        <ProjectContext.Provider
            value={{ listaProjects, setListaProjects, addProject, listaTasks, setListaTasks}} >
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