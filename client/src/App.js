import React , {useState} from 'react'
import "./App.css"

import { Routes, Route, Link, BrowserRouter } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'

export default function App() {

  const [x, setx] = useState(0)

  let fnc = ()=>{
    console.log("clicked")
    setx(x+1)
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


      <h1>hello</h1>

      <button onClick={fnc}>Click me {x}</button>



    </>
  )
}



