import React, { useState } from "react";
import "./App.css";
// import ButtonDemo from "./Components/ButtonComponent";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2024",
    },
    {
      name: "Prepare for professional practices",
      dueDate: "4/11/2024",
    },
  ];
  // const [state, setState] = useState(initialState)

  const [todo, setTodo] = useState(todoItems);

  const handleNewTodoItems = (todoItemName, itemDueDate) => {
    console.log(`New item added: ${todoItemName} Date: ${itemDueDate} `);

    const handleTodoItems = [
      ...todo,
      { name: todoItemName, dueDate: itemDueDate },
    ];
    setTodo(handleTodoItems);
  };

  const handleToDeleteItems = (todoItemName) => {
    console.log(`${todoItemName} deleted.`);
    const updatedTodo = todo.filter((item) => item.name !== todoItemName);
    setTodo(updatedTodo);
  };

  return (
    // <center>
    //   {/* <h2>Hello, {name}!</h2>
    //   <p>Welcome to the world of React.</p>
    //   <ButtonComponent /> */}
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewTodoItems} />
      {todo.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todo} onDeleteclicked={handleToDeleteItems}></TodoItems>
    </center>
  );
}

export default App;
