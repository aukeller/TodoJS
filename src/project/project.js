const Project = (title) => {
    const todos = [];

    const getTitle = () => title;

    const getTodos = () => todos;
    
    const addTodo = (todo) => todos.push(todo);


    

    return { addTodo, getTitle, getTodos };
};

export { Project }