import React, { useReducer } from "react";
import "./App.css";
// import ButtonDemo from "./Components/ButtonComponent";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";
import TodoItemsContext from "./store/contexts/todo-items-context";

const todoItemsReducer = (currentTodoItems, action) => {
  if (action.type === "New_Item") {
    return [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "Delete_Item") {
    return currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return currentTodoItems;
};

function App() {
  // const todoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Prepare for professional practices",
  //     dueDate: "4/11/2024",
  //   },
  // ];
  // const todoItems = [];
  // const [state, setState] = useState(initialState)

  // const [todo, setTodo] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  /*
  const handleNewTodoItems = (todoItemName, itemDueDate) => {
    // console.log(`New item added: ${todoItemName} Date: ${itemDueDate} `);

    setTodo((currentValue) => [
      ...currentValue,
      { name: todoItemName, dueDate: itemDueDate },
    ]);
  };

  const handleToDeleteItems = (todoItemName) => {
    // console.log(`${todoItemName} deleted.`);
    const updatedTodo = todo.filter((item) => item.name !== todoItemName);
    setTodo(updatedTodo);
  };
  */
 /*
  const addNewTodoItems = (todoItemName, itemDueDate) => {
    // console.log(`New item added: ${todoItemName} Date: ${itemDueDate} `);

    setTodo((currentValue) => [
      ...currentValue,
      { name: todoItemName, dueDate: itemDueDate },
    ]);
  };
  */
  const addNewTodoItems = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "New_Item",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteTodoItems = (todoItemName) => {
    // console.log(`${todoItemName} deleted.`);
    dispatchTodoItems({
      type: "Delete_Item",
      payload: { itemName: todoItemName },
    });
  };

  return (
    // <center>
    //   {/* <h2>Hello, {name}!</h2>
    //   <p>Welcome to the world of React.</p>
    //   <ButtonComponent /> */}

    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addTodoItem: addNewTodoItems,
        deleteTodoItem: deleteTodoItems,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
