export default (function DOMModule() {
    
    const projectContainer = document.createElement('div');
    
    const displayProjects = (projectTitles) => {
        projectTitles.forEach(projectTitle => {
            let projectDiv = document.createElement('div');
            projectDiv.textContent = projectTitle;

            projectContainer.appendChild(projectDiv);
            document.body.appendChild(projectContainer);
        });
    };

    return { displayProjects };
})();