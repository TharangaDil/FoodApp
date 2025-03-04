import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PalceOrder from './Pages/PlaceOrder/PalceOrder'
import Footer from './components/Footer/Footer'

const App = () => {

  const [showLogin,setShowLogin] =useState(false)
  return (
    <>
    {showLogin?<Login/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/PlaceOrder' element={<PalceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
