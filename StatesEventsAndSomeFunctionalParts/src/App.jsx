import React from "react";
import "./App.css";
import ElectronicProducts from "./components/ElectronicProducts";
import ErrMessage from "./components/ErrorMessage";

function App() {
  let productLists = [
    "Smart Phone",
    "Laptop",
    "Headphone",
    "LG TV",
    "Speaker",
    "Tablets",
  ];

  return (
    <>
      <h2 className="heading">Electronic Products</h2>
      <ErrMessage products={productLists}></ErrMessage>
      <ElectronicProducts products={productLists}></ElectronicProducts>
    </>
  );
}

export default App;
