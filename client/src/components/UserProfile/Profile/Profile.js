import { React, useState, useEffect } from "react";
import "./Profile.css";

import { Link, NavLink } from "react-router-dom";
import { API } from "../../../config";
import Loader from "../../MainComponents/Loader/Loader";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [load, setLoad] = useState(false);
  const fetchData = async () => {
    try {
      const result = await fetch(`${API}/StudentInfo/columns/name rollnum fathername fatherphonenum branch year photolink`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        },
      })
      const response = await result.json()
      setUserData(response[0])
    }
    catch (err) {

      console.log(err)
      window.alert("Signed Out")
    }
  }
  useEffect(() => {
    console.log('rendering')
    setTimeout(() => {
      fetchData()
      setLoad(true)
    }, 1125)


  }, [])
  // console.log(name) 
  if (!load || !userData) return (
    <>
      <Loader />
    </>
  )

  // if (userData) {
  //   ({ name, rollnum, fatherphonenum, userData.branch, year } = userData)
  //   console.log(name)
  // }
  return (
    <body className="profile-body">

      {/* <div className="collapse" id="navbarToggleExternalContent" >
        <div className="p-4">
          <Link to='/'><h5 className="text-white h4">Home</h5></Link>
        </div>
        <div className="p-4 active">
          <Link to='profile'><h5 className="text-white h4">Profile</h5></Link>
        </div>
        <div className="p-4">
          <Link to='/signup'><h5 className="text-white h4">SignUp</h5></Link>
        </div>

      </div>
      <nav className="navbar navbar-dark ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav> */}
      <div className="containerpro">
      <div className="photopro">
        <div className="profile">
          <img
            src={userData.photolink?userData.photolink:"photo"}
            alt="photo"
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        </div>
        <div className="informationpro">
          <div className="profileinfo">
          <h4>Name</h4>
          <input type="text" className="textbox" placeholder={userData.name?userData.name:"Name"} readOnly />
          </div>
          <div className="profileinfo">
          <h4>Roll Number</h4>
          <input type="text" className="textbox" placeholder={userData.rollnum?userData.rollnum:"Roll Number"} readOnly />
          </div>
          <div className="profileinfo">
          <h4>Father Name</h4>
          <input
            type="text"
            className="textbox"
            placeholder={userData.fathername?userData.fathername:"Father Name"}
            readOnly
          />
          </div>
          <div className="profileinfo">
          <h4>Father Mobile Number</h4>
          <input type="text" className="textbox" placeholder={userData.fatherphonenum?userData.fatherphonenum:"Father Phone Number"} readOnly />
          </div>
          <div className="profileinfo">
          <h4>Branch</h4>
          <input type="text" className="textbox" placeholder={userData.branch?userData.branch:"branch"} readOnly />
          </div>
          <div className="profileinfo">
          <h4>Year</h4>
          <input type="text" className="textbox" placeholder={userData.year?userData.year:"Year"} readOnly />
          </div>
          <div className="profileinfo">
          <h4>Alternate Phone Number</h4>
          <input type="text" className="textbox" placeholder="N/a" readOnly />
          </div>
        </div>
      </div>

      <div className="footer" >
          <div class="container1">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-12 col-lg-12 mb-50">
                  <div className="footer-widget">
                  <div className="companyinfo">
                  <div className="footer-logo">
                  
                      <img
                        src="https://drive.google.com/uc?id=1k9dYyjsqDekK0owqjR3Hpj0ok3UrrNuk"
                        className="img-fluid"
                        alt="logo"
                      />
                      <img
                        src="https://drive.google.com/uc?id=1VQm_fOAUPY-TQDLLCVVVbuM2db3fLlq8"
                        className="img-fluid2"
                        alt="logo"
                      />
                    </div>
                    <div className="footer-text">
                      <p>
                        The security system uses QR code scanning to track the
                        entry and exit of students in college, maintaining a
                        record of their in and out history for monitoring and
                        security purposes.
                      </p>
                    </div>
                    </div>
                    <div className="footer-social-icon">
                      <span>Developers</span>
                      <a href="https://www.linkedin.com/in/aryan-raj7">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=12orR1VZ_dIS2B3p7dcAdfsI_8eUA3Evi"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/harshit-roy">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=1xUlHPSPutZu-219bIaDzDYL7DsqKyb0I"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/kritik-srivastava">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=1PtrkJYwYb0StZMDte8xgE-UUN6sIi5Zi"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/vivekbhatt3011">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=1hGmBe8YlXE5OXoFCAlU9R5D_KJ4OOjZa"
                        />
                      </a>
                    </div>
                    <div className="info">
                <div className="col-xl-6 col-md-6 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>
                        Mail us
                        <br />
                        <h5>dwarpalsystem@gmail.com</h5>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="cta-text">
                      <h4>
                        Find us
                        <br />
                        <h5>B3 Top Floor BIAS Bhimtal</h5>
                      </h4>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container3">
              <div className="row">
                <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>Copyright &copy; 2023, All Right Reserved by Dwarpal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </body>
  );
};
export default Profile;
