import React from 'react'
import {NavLink ,  Routes, Route, Link, BrowserRouter } from "react-router-dom"

export default function Errorpage() {
  return (
    <>
    <h1>sorry for this error page not found </h1>
    <p>return to <NavLink to="/">Home page</NavLink> </p>
    
    </>
  )
}
