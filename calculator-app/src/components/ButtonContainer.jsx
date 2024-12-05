import styles from "./MyButtons.module.css";
import React from "react";

const MyButtons = () => {
  const buttonLists = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {/* 
      <button className={styles.btn}>1</button>
      <button className={styles.btn}>2</button>
      <button className={styles.btn}>+</button> 
      */}
      {buttonLists.map((button, index) => {
        return <button key={index} className={styles.btn}>{button}</button>;
      })}
    </div>
  );
};

export default MyButtons;
