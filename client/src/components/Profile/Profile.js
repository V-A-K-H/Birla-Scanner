import { React, useState, useEffect } from "react";
import "./Profile.css";

import { Link, NavLink } from "react-router-dom";
import { API } from "../../config";
import Loader from "../Loader/Loader";
const Profile = () => {
  const URL = `${API}/SignIn`;
  const [userData, setUserData] = useState(null);
  const [load,setLoad]=useState(false);
  useEffect(()=> {
    setTimeout(()=> {
    setLoad(true)
  },1125)
  },[])

  
  if (!load) return (
    <>
    <Loader/>
    </>
  )
  return (
    <body>
    
    <div className="collapse" id="navbarToggleExternalContent" >
        <div className="p-4">
        <Link to='/'><h5 className="text-white h4">Home</h5></Link>
        </div>
        <div className="p-4 active">
        <Link to='profile'><h5 className="text-white h4">Profile</h5></Link>
        </div>
        <div className="p-4">
        <Link to='signup'><h5 className="text-white h4">SignUp</h5></Link>
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
      </nav>
    <div className="container">
      <div className="profile">
        <img
          src="https://em-content.zobj.net/source/noto-emoji-animations/344/smiling-face-with-smiling-eyes_1f60a.gif"
          alt="Profile Photo"
          style={{height: "300px", width: "300px"}}
        />
      </div>
      <input type="text" className="textbox" placeholder="Student Name" readOnly />
      <input
        type="text"
        className="textbox"
        placeholder="Student Phone Number"
        readOnly
      />
      <input type="text" className="textbox" placeholder="Roll Number" readOnly />
      <input
        type="text"
        className="textbox"
        placeholder="Father Name"
        readOnly
      />
      <input type="text" className="textbox" placeholder="Father Phone Number" readOnly />
      <input type="text" className="textbox" placeholder="Semester" readOnly />
      
      <input type="text" className="textbox" placeholder="Year" readOnly />
	  
      <input type="text" className="textbox" placeholder="Alternate Phone Number" readOnly />
	  
    </div>
  </body>
  );
};
export default Profile;
