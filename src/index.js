import './styles.css';
import {Todo, TodoList} from './classes'
import { crearItemHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearItemHtml);




