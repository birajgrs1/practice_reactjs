import React from "react";
import './TodoList.css';


const TodoList = ({ todoName, todoDate }) => {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todo-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
