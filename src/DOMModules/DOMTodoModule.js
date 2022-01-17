export default (function DOMTodoModule() {

    const todosContainer = document.querySelector('#todos-container');
    const todoForm = document.querySelector('#todo-form');
    const newTodoBtn = document.querySelector('#new-todo');

    const titleInput = document.querySelector('#todo-title');
    const descriptionInput = document.querySelector('#description');
    const dateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');
    
    const createBasicTodoDiv = (todoTitle, todoDueDate, todoDescription, todoPriority) => {
        let todoDIV = document.createElement('div');

        let title = document.createElement('h2');
        let dueDate = document.createElement('span');  
        let description = document.createElement('p');
        let priority = document.createElement('span');

        description.hidden = true;
        priority.hidden = true;
        
        
        title.textContent = todoTitle;
        dueDate.textContent = `Due: ${todoDueDate}`;
        description.textContent = todoDescription;
        priority.textContent = todoPriority;

        
        todoDIV.append(title, dueDate, description, priority, createTodoBtns(description, priority));
        todoDIV.classList.add("todo");

        return todoDIV;
    };

    const createTodoBtns = (description, priority) => {
        const container = document.createElement('div');

        let moreBtn = document.createElement('button');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        moreBtn.addEventListener('click', (e) => toggleTodoDetails(e, description, priority));
        moreBtn.textContent = "more";

        editBtn.textContent = "edit";
        editBtn.hidden = true;
        
        deleteBtn.textContent = "delete";

        container.append(moreBtn, deleteBtn);

        return container;

    };

    const toggleTodoDetails = (e, description, priority) => {
        if (e.target.textContent == "more") {
            description.hidden = false;
            priority.hidden = false;
            e.target.textContent = "hide";
        } else {
            description.hidden = true;
            priority.hidden = true;
            e.target.textContent = "more";
        }

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