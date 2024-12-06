import React from "react";
import "./App.css";
import ElectronicProducts from "./components/ElectronicProducts";
import ErrMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import InputItems from "./components/InputItems";

function App() {
  let productLists = [
    "Smart Phone",
    "Laptop",
    "Headphone",
    "LG TV",
    "Speaker",
    "Tablets",
  ];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="heading">Electronic Products</h1>

        <ErrMessage products={productLists}></ErrMessage>
        <InputItems OnChange={handleOnChange}></InputItems>
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
