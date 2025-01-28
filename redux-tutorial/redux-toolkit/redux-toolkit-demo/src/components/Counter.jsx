import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, add, subtract } from "../store/slice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="counter-container">
      <h2 className="text-center"> Counter: {count}</h2>
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          <FaPlus /> +1
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          <FaMinus /> -1
        </button>
        <button className="btn btn-success" onClick={() => dispatch(add(5))}>
          <FaPlus /> +5
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(subtract(5))}
        >
          <FaMinus /> -5
        </button>
      </div>
    </div>
  );
};

export default Counter;
