import React from 'react'
import { NavLink, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import randomImg from "../images/download.jpg"
export default function Login() {
  return (

    <>


      <div className='extra'>Login</div>

      <div className='box'>

        <div>

          <img src={randomImg} alt="fegrfghtht" />
          <NavLink to="/signup">Create a new Account</NavLink>
        </div>

        <form action="login" method="POST">
          <label htmlFor="">email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="email" name="email" />



          <label htmlFor="">password</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="password" name="password" />


          <button type="submit" name='signin'>Login</button>
        </form>


      </div>


    </>
  )
}
