import { useState,useLayoutEffect, } from 'react'

import './App.css'
import Header from './components/Header'
import { Mainpage } from './components/Mainpage'
import Cards_animated from './components/Cards_animated'
import StoneIsland from './components/StoneIsland'
function App() {
  
  return (
    <>
     <Header/>
     <Mainpage/>
     <Cards_animated/>
     <StoneIsland/>
    </>
  )
}

export default App
