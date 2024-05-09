import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"

function App() {
  
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/cart' element = {<Cart />} />
        </Routes>
      </div>

  )
}

export default App
