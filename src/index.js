import { Todo } from "./todos";
import { Project } from "./project";
import DOMProjectModule from "./DOMModules/DOMProjectModule";
import DOMTodoModule from "./DOMModules/DOMTodoModule";

import style from './style.css';

const main = () => {
    
    let firstProject = Project('First Project');
    let firstTodo = Todo('title', 'first todo', "1/13/22", 'high');
    firstProject.addTodo(firstTodo);

    const projects = [firstProject];

    let focusedProject = projects[0]; // project currently selected


    function readyForm() {
        const addProjectBtn = DOMProjectModule.getAddProjectButton();

        addProjectBtn.addEventListener('click', createNewProject);
            
    };

    function createNewProject() {
        let newProjectTitle = DOMProjectModule.getNewProjectTitle();

        projects.push(Project(newProjectTitle));
        
        DOMProjectModule.updateProjectDisplay(newProjectTitle, `project-${projects.length - 1}`);
        DOMProjectModule.hideProjectForm();
            

        addProjectListener(projects.length - 1);
    }

    function addProjectListener(projectIndex) {
        let newProject = DOMProjectModule.getProject(projectIndex);
        newProject.addEventListener('click', (e) => selectProject(e.target.id));
    }

    function selectProject (projectId) {
        let splitId = projectId.split('-')[1];

        const project = projects[splitId];


        showTodos(project.getTodos());
        focusedProject = project;
    }

    function showTodos(todos) {
        todos.forEach(todo => {
            let todoDiv = DOMTodoModule.createBasicTodoDiv(todo.getTitle(), todo.getDueDate());
            DOMTodoModule.updateDisplay(todoDiv);

        });
    }



    const newProjectBtn = document.querySelector('#new-project');
    newProjectBtn.addEventListener('click', readyForm);
    




    
    DOMProjectModule.updateProjectDisplay(firstProject.getTitle(), `project-${projects.length - 1}`);
    addProjectListener(projects.length - 1);

};

main();

