import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar/>
    </div>
  )
}

export default App
