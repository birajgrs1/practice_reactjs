import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
 const inputElement =  useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({ type: "ADD", payload:{
      num: inputElement.current.value,
    }});
    inputElement.current.value = '';
  };
  const handleSubtraction = () => {
    dispatch({ type: "SUBTRACT", payload:{
      num: inputElement.current.value,
    }});
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success m-2"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          ref={inputElement}
          className="number-input"
          placeholder="Input Integer here..."
        />
        <button type="button" className="btn btn-info m-2" onClick={handleAddition}>
          Add
        </button>

        <button type="button" className="btn btn-danger m-2" onClick={handleSubtraction}>
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
