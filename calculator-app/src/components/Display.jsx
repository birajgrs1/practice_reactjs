import styles from "./Display.module.css";
const Display = ({ calcValue }) => {
  return (
    <input type="text" className={styles.display} value={calcValue} readOnly />
  );
};
export default Display;
