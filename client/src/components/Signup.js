import React, { useState } from 'react'
import { NavLink, Routes, Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import randomImg from "../images/download.jpg"
export default function Signup() {


  // now storing from data in variable using useState
  const [obj, setobj] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassword: "",
  }
  );
  let onchange = (e) => {

    const { name, value } = e.target;

    setobj((predata) => {
      return {
        ...predata,
        [name]: value,
      }

    })
  }


  let navigate = useNavigate();

  // function to send data to backend


  let postData = async (e) => {
    // to stop default behavioutr form to reload on click
    e.preventDefault();

    console.log("btn clicked")
    let { name, email, phone, work, password, cpassword } = obj;
    console.log(obj)

    let response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword})
    })
    console.log(name)


    let data = await response.json();

    console.log("response tak")

    if (response.status === 422 || !data) {
      console.log("invalid registration")
      window.alert("invalid registration")

      
    }

    else {
      window.alert("registration successfull")
      console.log("registration successfull")

      navigate("/login")


    }



  }

  return (


    <>

      <div className='extra'>Signup</div>

      <div className='box'>



        <form method="POST">
          <label htmlFor="">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.name} onChange={onchange} placeholder="Name" name="name" />

          <label htmlFor="">email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.email} onChange={onchange} placeholder="email" name="email" />


          <label htmlFor="">phone</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.phone} onChange={onchange} placeholder="phone number" name="phone" />


          <label htmlFor="">profession</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.profession} onChange={onchange} placeholder="profession" name="profession" />



          <label htmlFor="">password</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.password} onChange={onchange} placeholder="password" name="password" />

          <label htmlFor="">cpassword</label>

          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            autoComplete='off' value={obj.cpassword} onChange={onchange} placeholder="confirmpassword" name="cpassword" />


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
