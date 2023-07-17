import React from 'react'
import randomImg from "../images/download.jpg"

export default function About() {
  return (
    <>
      <div>
        <img src={randomImg} alt="" />

        <h3>Name</h3>
        <h4>Profession</h4>

        <p>Ranking 1/10</p>



        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" id='home-tab' data-toggle="tab" aria-current="page" href="#Home" role="tab">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id='profile-tab' data-toggle="tab" aria-current="page" href="#profile" role="tab">TimeLine</a>

          </li>
        </ul>
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
