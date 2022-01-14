const Todo = (title, description, dueDate, priority) => {
    
    let notes;
    
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    
    const addNote = (note) => {
        if (typeof note === 'string') {
            notes = note;
        }
    };
    
    return {
        getTitle, 
        addNote,
        getDueDate
    };
}

export { Todo };