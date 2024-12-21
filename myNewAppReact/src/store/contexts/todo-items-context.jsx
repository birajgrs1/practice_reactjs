import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addTodoItem: () => {},
  deleteTodoItem: () => {},
});
export default TodoItemsContext;