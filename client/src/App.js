import React, { useState } from 'react'
import "./App.css"

import { Routes, Route, Link, BrowserRouter } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Advanceinput from './components/Advanceinput'

export default function App() {


  const [x, setx] = useState()
  let onchange = (e) => {
    console.log(e.target.value)
    setx(e.target.value)
    console.log("x is :- " + x)
  }
  return (
    <>
      {/* <Navbar />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='*' element={<Errorpage />} />
      </Routes> */}











    </>
  )
}



