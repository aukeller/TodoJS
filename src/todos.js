// Your ‘todos’ are going to be objects that you’ll want to dynamically create, 
// which means either using factories or constructors/classes to generate them.
// Brainstorm what kind of properties your todo-items are going to have. At a 
// minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.


const Todo = (title, description, dueDate, priority) => {
    
    let notes;
    
    const getTitle = () => title;
    
    const addNote = (note) => {
        if (typeof note === 'string') {
            notes = note;
        }
    };
    
    return {
        getTitle, 
        addNote,
    };
}

export { Todo };