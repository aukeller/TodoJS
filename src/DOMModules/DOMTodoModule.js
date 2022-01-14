export default (function DOMTodoModule() {

    const todosContainer = document.querySelector('#todos-container');

    
    const createBasicTodoDiv = (todoTitle, todoDueDate) => {
        let todoDIV = document.createElement('div');

        let title = document.createElement('span');
        let dueDate = document.createElement('span');

        title.textContent = todoTitle;
        dueDate.textContent = todoDueDate;

        todoDIV.append(title, dueDate);

        return todoDIV;
    };

    const updateDisplay = (todoDiv) => todosContainer.appendChild(todoDiv);

    const clearDisplay = () => todosContainer.innerHTML = "";

    return {
        createBasicTodoDiv,
        updateDisplay,
        clearDisplay
    };

})();