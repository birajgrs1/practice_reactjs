import React, {useRef} from "react";
import "./AddTodo.module.css";
// import { useState, useRef } from "react";
import { IoAddSharp } from "react-icons/io5";

const AddTodo = ({ onNewItem }) => {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  /*
  Syntax:

const refContainer = useRef(initialValue);

   */
  // const noOfUpdates = useRef(0);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current +=1;

  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   // console.log(`Number of Updates: ${noOfUpdates.current}`);
  // };

  const handleAddButton = (e) => {
    // console.log(e);
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            //  onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success todo-button"
            // onClick={}
          >
            {/* Add */}
            <IoAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
