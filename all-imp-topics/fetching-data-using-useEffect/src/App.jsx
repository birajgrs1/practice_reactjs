import { Suspense } from "react";
import DemoFetch from "./components/DemoFetch";
import "./app.css"; 

const App = () => {
  return (
    <div>
      <h1 className="title">Product List</h1>
      <Suspense fallback={<span className="loader"></span>}>
        <DemoFetch />
      </Suspense>
    </div>
  );
};

export default App;
