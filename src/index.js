import { Todo } from "./todos";
import { Project } from "./project";
import DOMModule from "./DOMmethods";

const main = () => {
    const firstProject = Project('First Project');
    firstProject.addTodo(Todo('first todo', 'this is my first todo', '1/11/22', 'high'));

    const projects = [firstProject];

    let focusedProject = projects[0]; // project currently selected


    function readyForm() {
        const addProjectBtn = DOMModule.getAddProjectButton();

        addProjectBtn.addEventListener('click', createNewProject);
            
    };

    function createNewProject() {
        let newProjectTitle = DOMModule.getNewProjectTitle();

        projects.push(Project(newProjectTitle));
        
        DOMModule.updateProjectDisplay(newProjectTitle, `project-${projects.length - 1}`);
        DOMModule.hideProjectForm();
            

        addProjectListener(projects.length - 1);
    }

    function addProjectListener(projectIndex) {
        let newProject = DOMModule.getProject(projectIndex);
        newProject.addEventListener('click', (e) => showTodos(e.target.id));
    }

    function showTodos(projectId) {
        let splitId = projectId.split('-')[1];
        
        const project = projects[splitId];
        console.log(project.getTodos());
    }



    const newProjectBtn = document.querySelector('#new-project');
    newProjectBtn.addEventListener('click', readyForm);
    

    // For first project only, proceeding projects update DOM automatically from DOM module
    projects.forEach(project => DOMModule.updateProjectDisplay(project.getTitle(), "project-0")); 

};

main();

