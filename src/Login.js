import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className='login'>
        <Link to="/">
        <img  className="login_logo" src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt=""></img>
        </Link>  

        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h4>Email or mobile number</h4>
                <input type='text' />
                <h4>Password</h4>
                <input type='password' />
                <button className='login_button'>Sign In</button>
            </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <p className='new'>New to Amazon?</p>
                <button className='create_button'>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
