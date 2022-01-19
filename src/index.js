import { Todo } from "./todo/todos";
import { Project } from "./project/project";
import DOMProjectModule from "./project/DOMProjectModule";
import DOMTodoModule from "./todo/DOMTodoModule";

import style from './style.css';

const main = () => {
    
    let firstProject = Project('First Project');
    let firstTodo = Todo('title', 'first todo', "1/13/22", 'high');
    firstProject.addTodo(firstTodo);

    const projects = [firstProject];

    let focusedProject = projects[0]; // project currently selected


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
        
        DOMProjectModule.updateProjectDisplay(newProjectTitle, `project-${projects.length - 1}`);
        DOMProjectModule.hideProjectForm();
            

        addProjectListener(projects.length - 1);
    }

    function createNewTodo() {
        const formValues = DOMTodoModule.getTodoFormValues();
        const newTodo = Todo(formValues.title, formValues.description, formValues.dueDate, formValues.priority);

        const projectIndex = projects.map((e) => e.getTitle()).indexOf(focusedProject.getTitle());
        console.log(projectIndex);
        
        focusedProject.addTodo(newTodo);

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

            console.log(deleteBtn);

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
    

    DOMProjectModule.updateProjectDisplay(firstProject.getTitle(), `project-${projects.length - 1}`);
    addProjectListener(projects.length - 1);

};

main();

