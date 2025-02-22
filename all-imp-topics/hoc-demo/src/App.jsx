import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

const withCounter = (WrappedComponent) => {
  const WithCounterComponent = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
      <WrappedComponent
        {...props}
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    );
  };

  WithCounterComponent.displayName = `WithCounter(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithCounterComponent;
};

const EnhancedCounter = withCounter(Counter);

function App() {
  return (
    <div className="container">
      <h1>Higher-Order Component Demo</h1>
      <EnhancedCounter />
    </div>
  );
}

export default App;
