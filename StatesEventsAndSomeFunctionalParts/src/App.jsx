import React, { useState } from "react";
import "./App.css";
import ElectronicProducts from "./components/ElectronicProducts";
import ErrMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import InputItems from "./components/InputItems";
import EventMsg from "./components/EventMsg";

function App() {
  // Using concept of useState hook
  /*
  import { useState } from "react";

  Syntax:
const [var, setVar] = useState(initialValue);

Here,
var: name of the state variable
setVar: function to manage and modify the state variable
initialValue: the first value to initialize the variable

#### Internal working of useState hook
useState() creates a new cell in the functional component’s memory object.
New state values are stored in this cell during renders.
The stack pointer points to the latest cell after each render.
Deliberate user refresh triggers stack dump and fresh allocation.
The memory cell preserves state between renders, ensuring persistence.
  */

  // let textStateArr = useState("Electronic product items entered by user."); //currentValue, method/function
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [productLists, setElectronicProductLists] = useState([
    "Smart Phone",
    "Laptop",
    "LG TV",
    "Tablets",
  ]);

  // console.log(`Current value of textState: ${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newElectronicProduct = event.target.value;
      if (newElectronicProduct.trim() !== "") {
        let newItems = [...productLists, newElectronicProduct];
        setElectronicProductLists(newItems);
        event.target.value = ""; // Clear input field after adding
      }
      // console.log(newElectronicProduct);
    }
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="heading">Electronic Products</h1>

        <ErrMessage products={productLists}></ErrMessage>
        <InputItems handleOnKeyDown={onKeyDown}></InputItems>
        <EventMsg></EventMsg>

        <ElectronicProducts products={productLists}></ElectronicProducts>
      </Container>

      {/* <Container>
        <p>
          Aboves is the list of electronic products available in our showroom
          now. Contact Us if you need: 98XXXXXXXX
        </p>
      </Container> */}
    </>
  );
}

export default App;
