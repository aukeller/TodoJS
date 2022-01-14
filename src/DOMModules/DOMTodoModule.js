export default (function DOMTodoModule() {

    const createBasicTodoDiv = (todoTitle, todoDueDate) => {
        let todoDIV = document.createElement('div');

        let title = document.createElement('span');
        let dueDate = document.createElement('span');

        title.textContent = todoTitle;
        dueDate.textContent = todoDueDate;

        todoDIV.append(title, dueDate);

        return todoDIV;
    };

    const updateDisplay = (todoDiv) => {
        let todosContainer = document.querySelector('#todos-container');
        todosContainer.appendChild(todoDiv);
    }

    return {
        createBasicTodoDiv,
        updateDisplay
    };

})();