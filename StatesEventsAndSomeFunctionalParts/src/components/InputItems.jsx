import styles from "./InputItems.module.css"

const InputItems = () =>{

    const handleOnChange = (event) =>{
        console.log(event.target.value)

    }
    return <input type="text"  placeholder="Enter electronic products..."  
    className={styles.inputItems}
    onChange= {handleOnChange} />;

}
export default InputItems;