import PropTypes from "prop-types";

const Counter = ({count, onIncrement, onDecrement}) => {
  
  return <div className="counter">
    <h2>Counter: {count}</h2>
    <div className="buttons">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
  </div>;
};
Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired, 
  };

export default Counter;
