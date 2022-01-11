export default (function DOMModule() {
    
    
    const newProjectBtn = document.querySelector('#new-project');
    const projectTitleInput = document.querySelector('#project-title');
    const projectForm = document.querySelector('#project-form');

    const updateProjectDisplay = (title) => {
        const projectContainer = document.querySelector('#project-container');

        const projectDIV = document.createElement('div');
        projectDIV.textContent = title;

        projectContainer.appendChild(projectDIV);
    };

    const displayNewProjectForm = () => projectForm.hidden = false;
    const hideProjectForm = () => {
        projectForm.hidden = true
        projectTitleInput.value = "";
    };

    const getNewProjectTitle = () => projectTitleInput.value;


    newProjectBtn.addEventListener('click', () => {
        displayNewProjectForm();

        const addProjectBtn = document.querySelector('#add');
        addProjectBtn.addEventListener('click', () => {
            updateProjectDisplay(getNewProjectTitle());
            hideProjectForm();
        });
    });
    



    return { getNewProjectTitle};
})();