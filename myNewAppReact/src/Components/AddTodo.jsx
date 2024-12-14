import React from "react";
import "./AddTodo.module.css";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = (e) => {
    // console.log(e);
    e.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
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
