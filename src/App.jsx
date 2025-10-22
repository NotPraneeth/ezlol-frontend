import { useState } from 'react'

import './App.css'
import { Landing } from './components/Landing/Landing'
import { Navbar } from './components/Navbar/Navbar'
import { RunesCard } from './components/RunesCard/RunesCard'
import axios from 'axios'
import ItemsCard from './components/ItemsCard/ItemsCard'

function App() {

  return (
    <>
      <Navbar />
      <div className='mainContent'>
        <Landing />
      </div>
    </>
  )
}

export default App

