import styles from "./Products.module.css";

const Products = ({ electronicItems }) => {
  return (
    <li className={`${styles.productItem} list-group-item`}>
      <span className={styles.mySpan}>{electronicItems}</span>
    </li>
  );
};

export default Products;
