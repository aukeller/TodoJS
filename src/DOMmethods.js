export default (function DOMModule() {
    
    const projectContainer = document.createElement('div');

    const newProject = document.querySelector('#new-project');
    const projectTitleInput = document.querySelector('#project-title');


    const displayProjects = (projectTitles) => {
        projectTitles.forEach(projectTitle => {
            let projectDiv = document.createElement('div');
            projectDiv.textContent = projectTitle;

            projectContainer.appendChild(projectDiv);
            document.body.appendChild(projectContainer);
        });
    };

    const displayNewProjectForm = () => {
        const projectForm = document.querySelector('#project-form');
        projectForm.hidden = false;
    };

    const getNewProjectTitle = () => projectTitleInput.value;


    newProject.addEventListener('click', displayNewProjectForm);



    return { displayProjects, getNewProjectTitle};
})();