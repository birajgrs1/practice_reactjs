import styles from "./InputItems.module.css"

const InputItems = ({handleOnChange}) =>{

   
    return <input type="text"  placeholder="Enter electronic products..."  
    className={styles.inputItems}
    onChange= {handleOnChange} />;

}
export default InputItems;