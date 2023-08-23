import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import randomImg from '../images/download.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    console.log(email)
    let response = await fetch('http://localhost:8000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    let data = await response.json();

    if (response.status === 400 || !data) {
      window.alert('Invalid login details');
    } else {
      window.alert('Login successful');
      navigate('/');
    }
  };

  return (
    <>
      <div className='extra'>Login</div>
      <div className='box'>
        <div>
          <img src={randomImg} alt='fegrfghtht' />
          <NavLink to='/signup'>Create a new Account</NavLink>
        </div>
        <form method="POST">
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            name='email'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            name='password'
          />

          <button type='submit' onClick={loginUser}>Login</button>
        </form>
      </div>
    </>
  );
}
