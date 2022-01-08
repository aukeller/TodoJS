import { Todo } from "./todos";
import { Project } from "./project";
import DOMModule from "./DOMmethods";

const newTodo = Todo('hello', "world", "1/8/21", "high");

const newProject = Project("new project");

newProject.addTodo(newTodo);

DOMModule.displayProjects([newProject.getTitle()])