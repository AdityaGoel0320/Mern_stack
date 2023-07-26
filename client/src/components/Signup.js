import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import randomImg from "../images/download.jpg";

export default function Signup() {
  // now storing form data in variable using useState
  const [obj, setObj] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setObj((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // function to send data to backend
  const postData = async (e) => {
    e.preventDefault();
    console.log("btn clicked");
    
    const { name, email, phone, profession, password, cpassword } = obj;

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, work: profession, password, cpassword }),
      });

      const data = await response.json();

      if (response.status === 422 || !data) {
        console.log("invalid registration");
        window.alert("invalid registration");
      } else {
        window.alert("registration successful");
        console.log("registration successful");
        navigate("/login");
      }
    } catch (error) {
      console.log("error in sending data");
    }
  };

  return (
    <>
      <div className='extra'>Signup</div>
      <div className='box'>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            autoComplete='off'
            value={obj.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
          />

          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            autoComplete='off'
            value={obj.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />

          <label htmlFor="">Phone</label>
          <input
            type="text"
            className="form-control"
            autoComplete='off'
            value={obj.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            name="phone"
          />

          <label htmlFor="">Profession</label>
          <input
            type="text"
            className="form-control"
            autoComplete='off'
            value={obj.profession}
            onChange={handleChange}
            placeholder="Profession"
            name="profession"
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            autoComplete='off'
            value={obj.password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />

          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            autoComplete='off'
            value={obj.cpassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            name="cpassword"
          />

          <input type="submit" value="Register" onClick={postData} />
        </form>

        <div>
          <img src={randomImg} alt="fegrfghtht" />
          <NavLink to="/login">I am already registered</NavLink>
        </div>
      </div>
    </>
  );
}
