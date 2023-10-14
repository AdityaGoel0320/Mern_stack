import React, { useEffect, useState } from 'react'
import randomImg from "../images/download.jpg"
import { NavLink, useNavigate } from 'react-router-dom';

export default function About() {

  const [databseData, setdatabseData] = useState({})


  let navigate = useNavigate();
  let callAboutFnc = async () => {
    console.log("first")
    try {
      console.log("enter in about us froned section")
      let res = await fetch("http://localhost:9000/about", {
        method: "GET",
        headers: {
          Accept: "applications/json",
          "Content-Type": "applications/json"

        },
        credentials: "include"
      })


      console.log("response  = " + res)

      const data = await res.json();
      // now this data have all data formn database

      setdatabseData(data);

      console.log(data)
      if (res.status === 401) {
        // means erro in authirization
        console.log("error in authior")
        navigate("/login");

        let err = new Error("Not Auth")
        throw err;

      }


    } catch (error) {
      console.log("error in about frontend = " + error)

    }
  }
  useEffect(() => {
    callAboutFnc();

  }, [])

  return (
    <>


      <div>
        <form method='GET'></form>
        <img src={randomImg} alt="" />



        {/* <h3>Name : {databseData && databseData.name}</h3>
        <h3>Email : {databseData && databseData.email}</h3>
        <h3>phone : {databseData && databseData.phone}</h3>
        <h3>work : {databseData && databseData.work}</h3> */}
          <h3>Name : {databseData.name}</h3>
        <h3>Email : {databseData.email}</h3>
        <h3>phone : {databseData.phone}</h3>
        <h3>work : {databseData.work}</h3>
        <h4>Profession</h4>

        <h4>Profession</h4>

        {/* <p>Ranking 1/10</p>



        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" id='home-tab' data-toggle="tab" aria-current="page" href="#Home" role="tab">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id='profile-tab' data-toggle="tab" aria-current="page" href="#profile" role="tab">TimeLine</a>

          </li>
        </ul> */}
      </div>


      <div>
        <button>edit profile</button>
      </div>



      <div className="">
        {/* left side url */}
        <div>
          <a href="nfndg">Links</a> <br />
          <a href="nfndg">Links</a> <br />
          <a href="nfndg">Links</a> <br />
          <a href="nfndg">Links</a> <br />
          <a href="nfndg">Links</a> <br />
          <a href="nfndg">Links</a> <br />
        </div>


        {/* toggle data */}
        <div>
          <div id="home">
            <h1>3594549u59</h1>
          </div>
          <div id="profile">
            <h1>ifnrigti</h1>
          </div>

        </div>
      </div>
    </>
  )
}
