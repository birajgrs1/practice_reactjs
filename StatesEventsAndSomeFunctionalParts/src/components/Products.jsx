import styles from "./Products.module.css";

const Products = ({ electronicItems, handleBuyButton }) => {
  return (
    <li className={`${styles.productItem} list-group-item`}>
      <span className={styles.mySpan}>{electronicItems}</span>
      <button
        className={`${styles.myButton} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Products;
