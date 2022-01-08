import { Todo } from "./todos";

const newTodo = Todo('hello', "world", "1/8/21", "high");
console.log(newTodo.getTitle());