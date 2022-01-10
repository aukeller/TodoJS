import { Todo } from "./todos";
import { Project } from "./project";
import DOMModule from "./DOMmethods";

const main = () => {
    const projects = [];

    const addProject = document.querySelector('#add');
    addProject.addEventListener('click', () => {
        let newProjectTitle = DOMModule.getNewProjectTitle();
        projects.push(Project(newProjectTitle));

    });

   let newProject = DOMModule.getNewProjectTitle();
   
   return { newProject };
};

let test = main();