import React, { useState, useEffect } from 'react'
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

import axios from "axios"

export default function App() {


  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)

      })
  }, [])


  return (




    <>

      {/* <Advanceinput />
      <Navbar />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='*' element={<Errorpage />} />
      </Routes> */}



      <h1>Axios Data fetching</h1>









    </>
  )
}



