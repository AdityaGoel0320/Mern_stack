import React, { useState } from 'react'
import { NavLink, Routes, Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import randomImg from "../images/download.jpg"
export default function Signup() {


  // now storing form data in js object using useState

  // User ==== obj
  const [User, setUser] = useState(
    {
      name: "",
      email: "",
      phone: "",
      work: "",
      password: "",
      cpassword: "",
    }
  )


  let onchange = (e) => {

    let [name , value] =  e.target  ;

    setUser({ ...User, [name]: value })
  }





  let history = useNavigate();

  // function to send data to backend


  let postData = async (e) => {

    // to stop default behavioutr form to reload on click
    e.preventDefault();
    let { name, email, phone, work, password, cpassword } = User;



    let response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword
      })
    })


    console.log(name)


    let data = await response.json();

    if (data.status === 422 || !data) {
      window.alert("invalid registration")
      console.log("invalid registration")

    }

    else {
      window.alert("registration successfull")
      console.log("registration successfull")

      history.push("/login")


    }



  }

  return (


    <>

      <div className='extra'>Signup</div>

      <div className='box'>



        <form method="POST">
          <label htmlFor="">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.name} onChange={onchange} placeholder="Name" name="name" />

          <label htmlFor="">email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.email} onChange={onchange} placeholder="email" name="email" />


          <label htmlFor="">phone</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.phone} onChange={onchange} placeholder="phone number" name="phone" />


          <label htmlFor="">profession</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.profession} onChange={onchange} placeholder="profession" name="profession" />


          <label htmlFor="">password</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.password} onChange={onchange} placeholder="password" name="password" />

          <label htmlFor="">cpassword</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.cpassword} onChange={onchange} placeholder="confirmpassword" name="cpassword" />



          <input type="submit" value="register" onClick={postData} placeholder='Register' />
        </form>

        <div>

          <img src={randomImg} alt="fegrfghtht" />
          <NavLink to="/login">I am already registerd</NavLink>
        </div>



      </div>




    </>
  )
}
