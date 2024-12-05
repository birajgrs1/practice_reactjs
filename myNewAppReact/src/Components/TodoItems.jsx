import TodoList from "./TodoList";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoList todoName={item.name} todoDate={item.dueDate}></TodoList>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
