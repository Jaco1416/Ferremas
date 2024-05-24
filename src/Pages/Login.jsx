import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email Adress'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account</p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>SISI ÑAM ÑAM</p>
        </div>
      </div>
    </div>
  )
}

export default Login
