import React, { useState,useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './SignUp.css'
import Loader from '../MainComponents/Loader/Loader';
const SignUp = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  )
  const { email, password } = formData
  const [admin, setAdmin] = useState(false)
  // console.log(admin)
  // const { name, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, date } = { name: "kritik", phonenum: 838383838, rollnum: 22, year: 3, branch: "cse", fathername: "father", fatherphonenum: 888888888, photolink: "abc.abc", date: new Date().toLocaleString(), }
  const onchange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value }
    )
  }
  const onSubmit = async (e) => {
    const whoUse = admin ? "admin" : "user";
    console.log(email, password)
    e.preventDefault()
    // ASYNC keyword makes the followoing staement asynchronous, which means that other part of code could be executed while the async functions wait for promise resolution. AWAIT keywords waits for promise resoulution, if successful then it's following statements are executed, if promise returns false, then the execution jumps to catch block
    try {
      const result = await fetch(`${API}/SignIn`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const response = await result.json()
      console.log(response)
      if (response.jwtToken) {
        localStorage.setItem('sessionUser', response.jwtToken)
        navigate('/')

      }
    }
    catch (error) {
      console.log(error)
      window.confirm(error)
    }


  }
  return (
      <div className="mainsignup">
        <form className="form" onSubmit={(e)=> {onSubmit(e)}}>
        
          
          <p id="heading">Login</p>

          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation" >
              <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                aria-controls="pills-login" aria-selected="true">User</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                aria-controls="pills-register" aria-selected="false">Admin</a>
            </li>
          </ul>

          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
            <input autocomplete="off" placeholder="Username" name='email' className="input-field" type="text" value={email} onChange={(e) => {
              onchange(e)
            }} />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input placeholder="Password" className="input-field" name='password' value={password} onChange={(e) => {
              onchange(e)
            }} type="password" />
            <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
              </svg>
          </div>


          <button type="submit" className="button3">Sign In</button>

        </form>

      </div>
    )
  }

  export default SignUp;