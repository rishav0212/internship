import { useState } from 'react'
import Login from './Components/login'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login/>
    </UserContextProvider>
  )
}

export default App
