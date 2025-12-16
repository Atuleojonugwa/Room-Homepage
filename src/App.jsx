import { useState } from 'react'
import './App.css'
import Homepage from './Components/Homepage.jsx'
import About from './Components/About.jsx'

function App() {

  return (
    <div className=' flex flex-col h-screen w-full'>
      <Homepage /> 
      <About />
    </div>
  )
}

export default App
