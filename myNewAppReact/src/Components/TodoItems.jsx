import TodoList from "./TodoList";
import TodoItemsContext from "../store/contexts/todo-items-context";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems, deleteTodoItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoList
            key={index}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClicked={deleteTodoItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;