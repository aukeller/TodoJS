import projectStyle from "./projectstyle.css";
import '@fortawesome/fontawesome-free/css/all.css';

export default (function DOMProjectModule() {
  
    const newProjectBtn = document.querySelector('#new-project');
    
    const projectForm = document.querySelector('#project-form');
    const projectTitleInput = document.querySelector('#project-title');
    
    const updateProjectDisplay = (title, id) => {
        const projectContainer = document.querySelector('#project-container');

        const projectDIV = document.createElement('div');
        projectDIV.textContent = title;
        projectDIV.classList.add('project');
        projectDIV.id = id;

        projectContainer.appendChild(projectDIV);
    };


    const displayNewProjectForm = () => projectForm.hidden = false;
    const hideProjectForm = () => {
        projectForm.hidden = true
        projectTitleInput.value = "";
    };

    const getNewProjectTitle = () => projectTitleInput.value;
    const getAddProjectButton = () => document.querySelector('#add');
    const getProject = (index) => document.querySelector(`#project-${index}`)
    

    newProjectBtn.addEventListener('click', () => {
        displayNewProjectForm();
    });
    
    return {getNewProjectTitle, 
            updateProjectDisplay, 
            hideProjectForm, 
            getAddProjectButton, 
            getProject
        };
})();