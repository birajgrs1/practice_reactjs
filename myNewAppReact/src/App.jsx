import React from "react";
import "./App.css";
// import ButtonDemo from "./Components/ButtonComponent";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";


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
      dueDate: "4/11/2024"
    }
  ];

  return (
    // <>
    //   {/* <h2>Hello, {name}!</h2>
    //   <p>Welcome to the world of React.</p>
    //   <ButtonComponent /> */}
    // </>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>

    </center>
  );
}

export default App;
