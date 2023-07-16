import React from 'react'
import { NavLink, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import randomImg from "../images/download.jpg"
export default function Signup() {
  return (
    <>

      <div className='extra'>Signup</div>

      <div className='box'>



        <form action="register" method="POST">
          <label htmlFor="">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="Name" name="name" />

          <label htmlFor="">email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="email" name="email" />


          <label htmlFor="">phone</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="phone number" name="phone" />


          <label htmlFor="">profession</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="profession" name="profession" />



          <label htmlFor="">password</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="password" name="password" />

          <label htmlFor="">cpassword</label>

          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' placeholder="confirmpassword" name="cpassword" />

          <button type="submit" name='submit'>register</button>
        </form>

        <div>

          <img src={randomImg} alt="fegrfghtht" />
          <NavLink to="/login">I am already registerd</NavLink>
        </div>
      </div>

    </>
  )
}
