import styles from "./InputItems.module.css";

const InputItems = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter electronic products..."
      className={styles.inputItems}
      onKeyDown={handleOnKeyDown} 
    />
  );
};

export default InputItems;
