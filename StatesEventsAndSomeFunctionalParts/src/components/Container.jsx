// Passing Children
/*
1. children is a special prop for passing elements into components.
2. Used for flexible and reusable component designs.
3. Common in layout or container components.
4. Accessed with props.children.
5. Can be any content: strings, numbers, JSX, or components. 
6. Enhances component composability and reusabilit
*/


import styles from "./Container.module.css"

const Container = (props) => {
    return <div className={styles.myContainer}>{props.children}</div>;
  };
  
  export default Container;
  