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
      const result = await fetch(`${API}/StudentInfo/columns/name rollnum fathername fatherphonenum branch year`, {
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
      <div className="container">
        <div className="profile">
          <img
            src="https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-smiling-eyes_1f60a.gif"
            alt="Profile Photo"
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        <div>
        <h4>Name</h4>
          <input type="text" className="textbox" placeholder={userData.name?userData.name:"mera naam"} readOnly />
          <h4>Roll Number</h4>
          <input type="text" className="textbox" placeholder={userData.rollnum?userData.rollnum:"Roll Number"} readOnly />
          <h4>Father Name</h4>
          <input
            type="text"
            className="textbox"
            placeholder={userData.fathername?userData.fathername:"Father Name"}
            readOnly
          />
          <h4>Father Mobile Number</h4>
          <input type="text" className="textbox" placeholder={userData.fatherphonenum?userData.fatherphonenum:"Father Phone Number"} readOnly />
          
          <h4>Branch</h4>
          <input type="text" className="textbox" placeholder={userData.branch?userData.branch:"branch"} readOnly />
          <h4>Year</h4>
          <input type="text" className="textbox" placeholder={userData.year?userData.year:"Year"} readOnly />
          <h4>Alternate Phone Number</h4>
          <input type="text" className="textbox" placeholder="N/a" readOnly />
        </div>
      </div>
    </body>
  );
};
export default Profile;
