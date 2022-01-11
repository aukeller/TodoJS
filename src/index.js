import { Todo } from "./todos";
import { Project } from "./project";
import DOMModule from "./DOMmethods";

const main = () => {
    const projects = [];

    const newProjectBtn = document.querySelector('#new-project');

    newProjectBtn.addEventListener('click', () => {
        const addProjectBtn = document.querySelector('#add');

        addProjectBtn.addEventListener('click', () => {
            let newProjectTitle = DOMModule.getNewProjectTitle();
            projects.push(Project(newProjectTitle));
    
        });
    });
    

};

main();

