import TodoList from "./TodoList";

const TodoItems = ({ todoItems, onDeleteclicked }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoList
            key={item.id || index}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClicked={onDeleteclicked}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
