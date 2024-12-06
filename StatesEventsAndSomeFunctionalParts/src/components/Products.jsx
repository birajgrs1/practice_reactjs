import styles from "./Products.module.css";

const Products = ({ electronicItems }) => {

  const handleEvents = (event) =>{
    console.log(event);
    alert(`${electronicItems} being bought.`);

  } 
  return (
    <li className={`${styles.productItem} list-group-item`}>
      <span className={styles.mySpan}>{electronicItems}</span>
      <button
        className={`${styles.myButton} btn btn-info`}
        onClick={(event) => handleEvents(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Products;
