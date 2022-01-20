import todoStyle from "./todostyle.css";
import {format} from 'date-fns';

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
        
        dueDate.textContent = `Due: ${formatDate(todoDueDate)}`;
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

        moreBtn.addEventListener('click', (e) => toggleTodoDetails(e, editBtn, description, priority));
        moreBtn.textContent = "more";

        editBtn.textContent = "edit";
        editBtn.hidden = true;
        editBtn.addEventListener('click', (e) => editTodo(e.target.parentNode.parentNode));
        
        deleteBtn.textContent = "delete";

        container.append(moreBtn, editBtn, deleteBtn);

        return container;

    };

    const toggleTodoDetails = (e, editBtn, description, priority) => {
        if (e.target.textContent == "more") {
            description.hidden = false;
            priority.hidden = false;
            editBtn.hidden = false;

            e.target.textContent = "hide";
        } else {
            description.hidden = true;
            priority.hidden = true;
            editBtn.hidden = true;

            e.target.textContent = "more";
        }

    };

    const formatDate = (date) => {
        let splitDate = date.split('-');
        return format(new Date(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2])), 'MM-dd-yyyy');
    }

    const editTodo = (todoDiv) => {
        let childNodes = Array.from(todoDiv.childNodes);
        
        let titleInput = document.createElement('input');
        titleInput.value = childNodes[0].textContent; 
        
        let descriptionInput = document.createElement('textarea');
        descriptionInput.value = childNodes[2].textContent; 
        
        let dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');

        let priorityInput = document.createElement('select');
        
        let priorityHighOption = document.createElement('option');
        let priorityMediumOption = document.createElement('option');
        let priorityLowOption = document.createElement('option');

        priorityHighOption.textContent = "high";
        priorityMediumOption.textContent = "medium";
        priorityLowOption.textContent = "low";

        priorityInput.append(priorityHighOption, priorityMediumOption, priorityLowOption);

        let saveBtn = document.createElement('button');
        saveBtn.textContent = "save";
        saveBtn.classList.add('save');

        todoDiv.innerHTML = "";
        todoDiv.append(titleInput, descriptionInput, dueDateInput, priorityInput, saveBtn);
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
    const getSaveEditedTodoBtn = () => document.querySelector('.save')
    
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
        getSaveEditedTodoBtn,

    };

})();