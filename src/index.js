import { Todo } from "./todos";
import { Project } from "./project";
import DOMProjectModule from "./DOMProjectModule";

const main = () => {
    const firstProject = Project('First Project');
    firstProject.addTodo(Todo('first todo', 'this is my first todo', '1/11/22', 'high'));

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

        console.log(focusedProject);
    }

    function showTodos(todos) {
        todos.forEach(todo => {
        })
    }



    const newProjectBtn = document.querySelector('#new-project');
    newProjectBtn.addEventListener('click', readyForm);
    

    // For first project only, proceeding projects update DOM automatically from DOM module
    projects.forEach(project => DOMProjectModule.updateProjectDisplay(project.getTitle(), "project-0")); 

};

main();

