import React from 'react'

export default function Contact() {
  return (
    <>

      <div className="box">

        <div className="phone small_box" >
          <h1>phone</h1>
          <h3>561545115</h3>
        </div>
        <div className="small_box" >
          <h1>email</h1>
          <h3>mndfidnfi@gmail.com</h3>
        </div>
        <div className="small_box" >
          <h1>address</h1>
          <h3>efniedbf</h3>
        </div>
      </div>



      {/* contact us form  */}

      <form>
        <h1>Get in Touch</h1>
        <input type="text" placeholder='name' name='name' required="true" />
        <input type="text" placeholder='email' name='email' required="true" />
        <input type="text" placeholder='phone number' name='phone' required="true" />
        <textarea rows="10" cols="30" placeholder='type your message' name='message' required="true"></textarea>
        <input type="submit" placeholder='send message' />
      </form>




    </>
  )
}
