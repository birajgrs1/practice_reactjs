import React from 'react';
import styles from './App.module.css';
import Display from './components/Display';
import MyButtons from './components/ButtonContainer';

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
     <MyButtons></MyButtons>
    </div>
  );
}

export default App;
