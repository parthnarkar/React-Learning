import { useState } from 'react'

import './App.css'

function App() {
  //let counter = 15;

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter === 20) {
      alert("Counter will not go above 20!")
    }
    else {
      setCounter(counter + 1);
      //INTERVIEW QUESTION
      /*
        //THE BELOW, On every click it will increment by 1 only.
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        //THE BELOW, On every click it will increment by 3, similarly for decrementing
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
      */
    }

  }

  const removeValue = () => {
    if (counter === 0) {
      alert("Counter will not go below ZERO!")
    }
    else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Parth Narkar</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
