const Project = (title) => {
    const todos = [];

    const addTodo = (todo) => {
        todos.push(todo);
    };

    return { addTodo };
};

export { Project }