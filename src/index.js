import { Todo } from "./todo/todos";
import { Project } from "./project/project";
import DOMProjectModule from "./project/DOMProjectModule";
import DOMTodoModule from "./todo/DOMTodoModule";

import style from './style.css';

const main = (allProjects) => {    
    const projects = [Project('First Project')];
    
    if ((Object.keys(allProjects)).length > 0) {
        const projectsFromStorage = createFromStorage(allProjects);    
        projects.push(...projectsFromStorage);
    }
    
    let focusedProject = projects[0]; 


    function readyProjectForm() {
        const addProjectBtn = DOMProjectModule.getAddProjectButton();
        
        addProjectBtn.addEventListener('click', createNewProject);
        
    };
    
    function readyTodoForm() {
        const addTodoBtn = DOMTodoModule.getAddTodoBtn();
        addTodoBtn.addEventListener('click', createNewTodo);
    }

    function createNewProject() {
        let newProjectTitle = DOMProjectModule.getNewProjectTitle();

        projects.push(Project(newProjectTitle));
        storage.saveProject(newProjectTitle);
        
        DOMProjectModule.updateProjectDisplay(newProjectTitle, `project-${projects.length - 1}`);
        DOMProjectModule.hideProjectForm();
            

        addProjectListener(projects.length - 1);
    }

    function createFromStorage(projects) {
        const storageProjects = [];

        Object.keys(projects).forEach(key => {
            const projectFromStorage = Project(key);

            JSON.parse(projects[key]).forEach(todo => {
                const todoFromStorage = Todo(...todo);
                projectFromStorage.addTodo(todoFromStorage);
            });
            storageProjects.push(projectFromStorage);
        });
        

        return storageProjects;
    }

    function createNewTodo() {
        const formValues = DOMTodoModule.getTodoFormValues();
        const newTodo = Todo(...formValues);

        const projectIndex = projects.map((e) => e.getTitle()).indexOf(focusedProject.getTitle());
        
        focusedProject.addTodo(newTodo);
        
        storage.saveTodo(focusedProject.getTitle(), ...formValues);

        showTodos(focusedProject, projectIndex);
        DOMTodoModule.hideTodoForm();

    }

    function addProjectListener(projectIndex) {
        let newProject = DOMProjectModule.getProject(projectIndex);
        newProject.addEventListener('click', (e) => selectProject(e.target.id));
    }

    function selectProject (projectId) {
        let splitId = projectId.split('-')[1];

        const project = projects[splitId];


        showTodos(project, splitId);
        focusedProject = project;
    }

    function showTodos(project, projectId) {
        DOMTodoModule.clearDisplay();

        const todos = project.getTodos();

        todos.forEach((todo, index) => {
            let todoDiv = DOMTodoModule.createBasicTodoDiv(todo.getTitle(), todo.getDueDate(), todo.getDescription(), todo.getPriority()); 
            
            let editBtn = todoDiv.childNodes[4].childNodes[1];
            let deleteBtn = todoDiv.childNodes[4].childNodes[2];


            todoDiv.id = `${projectId}-${index}`;           
            
            DOMTodoModule.updateDisplay(todoDiv);
            
            editBtn.addEventListener('click', () => updateTodo(todoDiv.id));
            deleteBtn.addEventListener('click', () => deleteTodo(todoDiv.id));

        });
    }

    function updateTodo(todoId) {
        const saveBtn = DOMTodoModule.getSaveEditedTodoBtn();

        const projectId = todoId.split('-')[0];
        todoId = todoId.split('-')[1];

        saveBtn.addEventListener('click', () => {
            const newTitle = saveBtn.parentNode.childNodes[0].value;
            const newDesc = saveBtn.parentNode.childNodes[1].value;
            const newDueDate = saveBtn.parentNode.childNodes[2].value;
            const newPriority = saveBtn.parentNode.childNodes[3].value;
            
   
            let newTodo = Todo(newTitle, newDesc, newDueDate, newPriority);

            projects[projectId].getTodos()[todoId] = newTodo;

            showTodos(projects[projectId], projectId);
        });

    }

    function deleteTodo(todoId) {
        const projectId = todoId.split('-')[0];
        todoId = todoId.split('-')[1];

        projects[projectId].getTodos().splice(todoId, 1);

        showTodos(projects[projectId], projectId);
    }


    const newProjectBtn = document.querySelector('#new-project');
    newProjectBtn.addEventListener('click', readyProjectForm);
    
    const newTodoBtn = document.querySelector('#new-todo');
    newTodoBtn.addEventListener('click', readyTodoForm);
    

    projects.forEach((project, index) => {
        DOMProjectModule.updateProjectDisplay(project.getTitle(), `project-${index}`);
        addProjectListener(index);
    })
    
    showTodos(focusedProject, 0);
    

};

const storage = (function() {
    function saveProject(title) {
        localStorage.setItem(title, JSON.stringify([]));
    }

    function saveTodo(project, todoTitle, todoDesc, todoDueDate, todoPriority) {
        const storedProject = JSON.parse(localStorage.getItem(project));

        storedProject.push([todoTitle, todoDesc, todoDueDate, todoPriority]);

        localStorage.setItem(project, JSON.stringify(storedProject));
    }

    function deserializeProjects(allProjects) {
        Object.keys(allProjects).forEach(key => {
            JSON.parse(allProjects[key]);
        });

        return allProjects;
    }

    return {
        saveProject,
        saveTodo,
        deserializeProjects,
    };

})(); 

main(storage.deserializeProjects({...localStorage}));

