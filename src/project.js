const Project = (title) => {
    const todos = [];

    const getTitle = () => title;

    const addTodo = (todo) => {
        todos.push(todo);
    };

    

    return { addTodo, getTitle };
};

export { Project }