import { useState } from 'react';
import './App.css'
import My_button from './button'

function App() {

  // const [color, setcolor] = useState('black');

  return (
    <div >
      <div style = {{backgroundColor : 'white', borderRadius : 70 , padding : 10, boxAlign : 'center'}}>
        <My_button col = "violet" />
        <My_button col = "indigo" />
        <My_button col = "blue" />
        <My_button col = "green" />
        <My_button col = "yellow" />
        <My_button col = "orange" />
        <My_button col = "red" />
      </div>    
    
    </div>
  )
}

export default App
