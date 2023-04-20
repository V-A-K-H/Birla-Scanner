import React, { useState,useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './SignUp.css'
import Loader from '../MainComponents/Loader/Loader';
const SignUp = () => {

  const navigate = useNavigate()
  const [visible,setVisible]=useState(false)
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
    const whoUse = admin ? "AdminSignIn" : "SignIn";
    const auth=admin?"admin": "user";
    console.log(auth,whoUse,email, password)
    e.preventDefault()
    // ASYNC keyword makes the followoing staement asynchronous, which means that other part of code could be executed while the async functions wait for promise resolution. AWAIT keywords waits for promise resoulution, if successful then it's following statements are executed, if promise returns false, then the execution jumps to catch block
    try {
      const result = await fetch(`${API}/${whoUse}`, {
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
        localStorage.setItem('Auth',auth)
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
                aria-controls="pills-register" aria-selected="false" onClick={()=> {
                  setAdmin(true)
                }}>Admin</a>
            </li>
          </ul>

          <div className="field">
          <i class="fa-solid fa-at fa-sm"></i>
            <input autocomplete="off" placeholder="Username" name='email' className="input-field" type="text" value={email} onChange={(e) => {
              onchange(e)
            }} />
          </div>
          <div className="field">
          <i class="fa-solid fa-lock fa-sm"></i>
            <input placeholder="Password" className="input-field" name='password' value={password} onChange={(e) => {
              onchange(e)
            }} type={visible?"text":"password"} />
            <i onClick={()=> {
              console.log("Icon clicked")
              setVisible((prev)=> {
                return (!prev)
              })
            }} class={visible?"fa-solid fa-eye fa-sm":"fa-solid fa-eye-slash fa-sm"}></i>
          </div>


          <button type="submit" className="button3">Sign In</button>

        </form>

      </div>
    )
  }

  export default SignUp;