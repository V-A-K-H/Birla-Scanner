import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { API } from '../config';
const SignUp = () => {
  // console.log(localStorage.getItem('sessionUser'))
  const navigate = useNavigate()
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  )
  const { email, password } = formData
  const [admin, setAdmin] = useState(false)
  const { name, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, date } = { name: "kritik", phonenum: 838383838, rollnum: 22, year: 3, branch: "cse", fathername: "father", fatherphonenum: 888888888, photolink: "abc.abc", date: new Date().toLocaleString(), }
  const onchange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value }
    )
  }
  const onSubmit = async (e) => {
    const whoUse = admin ? "admin" : "user";
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
      if (response.jwtToken) {
        localStorage.setItem('sessionUser', response.jwtToken)
        navigate('/')

      }
    }
      catch (error) {
        console.log(error)
        // window.alert(error)
      }


    }
  return (
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://www.birlainstitute.co.in/Pictures/img-building.webp")',
            height: 300
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)"
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <section className=" text-center text-lg-start">
                  {/* Grid container */}
                  <div className="container p-4">
                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHEpbOhIPHwF5GaApf206j0SURmNDK8zx0eA9xw_kKQ&s"
                          alt="birla-logo"
                        />
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-lg-8 col-md-12 mb-4 mb-md-0 d-none d-xl-block">
                        <p></p>
                        <h5 className="text-uppercase">
                          Birla Institute of Applied Sciences
                        </h5>
                        <h5 className="text-uppercase">
                          बिरला इंस्टीट्यूट ऑफ़ अप्लाइड साइंसेस
                        </h5>
                        <h5 className="text-uppercase">
                          Bhimtal, Distt: Nainital, Uttarakhand- 263136
                        </h5>
                        <p />
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                  </div>
                  {/* Grid container */}
                </section>
                {/* Pills navs */}
                <ul
                  className="nav nav-pills nav-justified mb-3"
                  id="ex1"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="tab-login"
                      data-mdb-toggle="pill"
                      href="#pills-login"
                      role="tab"
                      aria-controls="pills-login"
                      aria-selected="true"
                    // onClick={()=> {
                    //   setAdmin(false)
                    // }}
                    >
                      Student
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="tab-register"
                      data-mdb-toggle="pill"
                      href="#pills-register"
                      role="tab"
                      aria-controls="pills-register"
                      aria-selected="false"
                      onClick={() => {
                        setAdmin(true)
                      }}
                    >
                      Admin
                    </a>
                  </li>
                </ul>
                <form>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      id="form3Example3"
                      className="form-control"
                      onChange={(e) => onchange(e)}
                      value={email}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      onChange={onchange}
                      value={password}
                      required
                      name="password"
                      minLength={6}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {/* Submit button */}
                  <button type="submit" onClick={(e) => {
                    onSubmit(e)
                  }} className="btn btn-primary btn-block mb-4">
                    Login
                  </button>
                  {/* Register buttons */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }

  export default SignUp;