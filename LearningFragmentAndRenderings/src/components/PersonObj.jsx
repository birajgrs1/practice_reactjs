import React from "react";
import styles from "./personObj.module.css"; // Importing the CSS module

const PersonObj = (props) => {
  return (
    <>
      <br /> <p>--------------------------------------------------</p>
      <br />
      <h2 className={styles.heading}>Employee Lists</h2> 
      <ul className={styles.list}>
        {props.name.map((person) => (
          <li key={person.id} className={styles.listItem}>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PersonObj;
