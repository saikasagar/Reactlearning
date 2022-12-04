import React from 'react'
import { useEffect,useState } from 'react';
import{useNavigate} from 'react-router-dom';

import './style.css';
const Login = () => {

    let serverData = {
        email: "admin@gmail.com",
        password: "password"
    }
    const navigate = useNavigate();
    const [authData, setAuthData] = React.useState({});
    const login = (e) => {
        e.preventDefault()
        if (authData.email === serverData.email && authData.password === serverData.password) {
            console.log("login successful")
            navigate("/todo")
        } else {
            console.log("error")
        }
    }

  return (

    <div className=''> 
    <form >
    <label > Username </label><br></br >
    <input type = "email"
    onChange = {
        (e) => setAuthData({...authData, email: e.target.value }) } /> <br></br >
    <label > password </label><br></br >
    <input type = "password"
    onChange = {
        (e) => setAuthData({...authData, password: e.target.value }) } /> <br></br >
    <button onClick = {(e) => login(e) } > login </button><br></br >
    <label>
    <input type='checkbox' checked='checked' name='remember'/>Remember Me
    </label>
    <div className='container'>
        <button type='button' className='cancelbtn'>Cancel</button>
        <span className='psw'>Forgot<a>Password?</a></span>
    </div>
    </form>  
    </div>
  )
}

export default Login