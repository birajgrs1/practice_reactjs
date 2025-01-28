import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="counter-container">
      <h2 className="text-center">Counter: {count}</h2>
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          <FaPlus /> +1
        </button>

        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          <FaMinus /> -1
        </button>

        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "ADD" })}
        >
          <FaPlus /> +5
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "SUBTRACT" })}
        >
          <FaMinus /> -5
        </button>
      </div>
    </div>
  );
};

export default Counter;
