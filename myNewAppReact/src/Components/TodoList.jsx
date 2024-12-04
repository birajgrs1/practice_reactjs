import React from "react";
import "./TodoApp.css"

const TodoApp = () => {
  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <h1>TODO App</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">4/10/2024</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Go to college</div>
          <div className="col-4">4/10/2024</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
