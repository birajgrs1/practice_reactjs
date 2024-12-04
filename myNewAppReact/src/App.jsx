import React from 'react'
import './App.css'
import ButtonComponent from './Components/ButtonComponent';



function App() {
  const name = "Biraj";

  return (
    <div>
    <h2>Hello, {name}!</h2>
    <p>Welcome to the world of React.</p>

    <ButtonComponent/>
    </div>
  )
}

export default App
