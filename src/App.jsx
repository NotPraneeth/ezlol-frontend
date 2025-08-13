import { useState } from 'react'
import './App.css'
import { Landing } from './components/Landing/Landing'
import { Navbar } from './components/Navbar/Navbar'
import { RunesCard } from './components/RunesCard/RunesCard'
import axios from 'axios'

function App() {

  return (
    <>
      <Navbar/>
      <Landing />
    </>
  )
}

export default App
 