import React from 'react'

export default function Signup() {
  return (
    <>

      <div className='extra'>Signup</div>


      <form action="register" method="POST">
        <label htmlFor="">First Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          autoComplete='off' placeholder="firstname" name="firstname" />

        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          autoComplete='off' placeholder="lastname" name="lastname" />

        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          autoComplete='off' placeholder="email" name="email" />


        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          autoComplete='off' placeholder="password" name="password" />


        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          autoComplete='off' placeholder="confirmpassword" name="confirmpassword" />

        <button type="submit">register</button>
      </form>

    </>
  )
}
