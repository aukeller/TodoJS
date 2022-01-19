const Todo = (title, description, dueDate, priority) => {
    
    let notes;

    
    
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getDescription = () => description;
    const getPriority = () => priority;
    
    const addNote = (note) => {
        if (typeof note === 'string') {
            notes = note;
        }
    };
    
    return {
        getTitle, 
        addNote,
        getDueDate,
        getDescription,
        getPriority
    };
}

export { Todo };