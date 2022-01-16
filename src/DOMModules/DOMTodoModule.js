export default (function DOMTodoModule() {

    const todosContainer = document.querySelector('#todos-container');
    const todoForm = document.querySelector('#todo-form');
    const newTodoBtn = document.querySelector('#new-todo');

    const titleInput = document.querySelector('#todo-title');
    const descriptionInput = document.querySelector('#description');
    const dateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');
    
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

    const displayNewTodoForm = () => todoForm.hidden = false;
    const hideTodoForm = () => {
        todoForm.hidden = true
        
        titleInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
        priorityInput.value = "";
    };

    const getTodoFormValues = () => {
        return {
            title: todoForm.elements[0].value,
            description: todoForm.elements[1].value,
            dueDate: todoForm.elements[2].value,
            priority: todoForm.elements[3].value,
        };
    }


    const getAddTodoBtn = () => document.querySelector('#add-todo');
    
    newTodoBtn.addEventListener('click', () => {
        displayNewTodoForm();
    });

    return {
        createBasicTodoDiv,
        updateDisplay,
        clearDisplay,
        getAddTodoBtn,
        hideTodoForm,
        getTodoFormValues,
    };

})();