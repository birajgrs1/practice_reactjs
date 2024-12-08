import { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display';
import MyButtons from './components/ButtonContainer';

function App() {
  const [calcVal, setCalcVal] = useState("");

  const onButtonClicked = (buttonText) =>{
    // console.log(buttonText);
    if (buttonText === 'C' ){
      setCalcVal("");
    
    }
    else if( buttonText === '='){
      const result = eval(calcVal);
      setCalcVal(result);

    }else{
      const newDisplayValue = calcVal + buttonText;
      setCalcVal(newDisplayValue);
    }

  }

  return (
    <div className={styles.calculator}>
      <Display calcValue = {calcVal}></Display>
     <MyButtons onButtonClicked ={onButtonClicked}></MyButtons>
    </div>
  );
}

export default App;
