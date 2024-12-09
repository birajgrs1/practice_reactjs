import React from "react";
import "./TodoList.css";
import { MdDelete } from "react-icons/md";


const TodoList = ({ todoName, todoDate, onDeleteClicked }) => {
  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger todo-button"
              onClick={() => onDeleteClicked(todoName)}
            >
              {/* Delete */}
              <MdDelete />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
