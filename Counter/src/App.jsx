import './App.css'
import {useState} from 'react'


function App() {
// Not Working
  // const input_form = document.querySelector('#input-value');

  let [value, setCounter] = useState(15)

  // let value = 5;

  const inc= ()=>{
    const n = document.querySelector('#input-value').value || 0;
    document.querySelector('#input-value').value = null;

    console.log("Increased by " + n);
    setCounter(value+Number(n));
    console.log(value);
  }

  const dec = ()=>{

    const n = document.querySelector('#input-value').value || 0;
    document.querySelector('#input-value').value = null;
    console.log("Decreased by " + n);

    setCounter(value-Number(n));
    console.log(value);
  }

  return (
    
    <div>
     
        <h1>Counter</h1>
        <h2>Value   :   {value}</h2>
        <input placeholder="Type the value" id ="input-value"/><br />

        <button onClick={inc}>Inc </button>
        <button onClick={dec}>Dec</button>
    </div>

  )
}

export default App