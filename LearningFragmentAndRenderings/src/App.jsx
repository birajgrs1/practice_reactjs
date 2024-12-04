import React from "react";
import "./App.css";
import Demo from "./components/FragmentDemo";
import PersonObj from "./components/PersonObj";

function App() {
  let foodItems = ["Roti", "Dal", "Milk", "Green Vegetables", "Rice", "Ghee"];

  let person = [
    {
      id: 1,
      name: "Suraj",
      email: "surajexample@gmail.com",
    },
    {
      id: 2,
      name: "Abhi",
      email: "abhiexample@gmail.com",
    },

    {
      id: 3,
      name: "Anita",
      email: "anitaexample@gmail.com",
    },
  ];


  return (
    <>
      {/* Passing foodItems as props */}
      <Demo foodItems={foodItems} />
      
      <PersonObj name={person} />

    </>
  );
}

export default App;
