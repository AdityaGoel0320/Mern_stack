import React, { useState } from 'react'
import { NavLink, Routes, Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import randomImg from "../images/download.jpg"
export default function Signup() {


  // now storing from data in variable using useState
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


  let handleInputs = (e) => {
    console.log(e)

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
      header: {
        "content-type": "application/json"
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
            autoComplete='off' value={User.name} onChange={handleInputs} placeholder="Name" name="name" />

          <label htmlFor="">email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.email} onChange={handleInputs} placeholder="email" name="email" />


          <label htmlFor="">phone</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.phone} onChange={handleInputs} placeholder="phone number" name="phone" />


          <label htmlFor="">profession</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.profession} onChange={handleInputs} placeholder="profession" name="profession" />



          <label htmlFor="">password</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.password} onChange={handleInputs} placeholder="password" name="password" />

          <label htmlFor="">cpassword</label>

          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={User.cpassword} onChange={handleInputs} placeholder="confirmpassword" name="cpassword" />


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
