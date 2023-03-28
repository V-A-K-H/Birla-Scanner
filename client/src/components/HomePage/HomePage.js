import { React, useState, useEffect } from "react";
import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";
import { API } from "../../config";
import Loader from "../Loader/Loader";
const HomePage = () => {
  console.log("Rendering")
  const URL = `${API}/SignIn`;
  const [userData, setUserData] = useState(null);
  
  const FlipCard = (e) => {
    e.classList.toggle("flip");
  };
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
        <div className="p-4 active">
        <Link to='/'><h5 className="text-white h4">Home</h5></Link>
        </div>
        <div className="p-4">
        <Link to='profile'><h5 className="text-white h4">Profile</h5></Link>
        </div>
        <div className="p-4">
        <Link to='signup'><h5 className="text-white h4">SignUp</h5></Link>
        </div>
        
        <div className="p-4">
        <Link to='admin'><h5 className="text-white h4">Admin Page</h5></Link>
        </div>
        <div className="p-4">
        <Link to='Qrpage'><h5 className="text-white h4">Qr Page</h5></Link>
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
      {/* <nav classNameName="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/index.html">Home</a></li>
                            <li ><a href="/profile.html">Profile</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                          <li ></li>
                        </ul>
                    </div>
                </div>
            </nav> */}

      <div className="container">
        <div className="profile">
          <div className="flip-card" onClick={(e) => FlipCard(e)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
              <div className="flip-card-back" style={{ color: "white" }}>
                <p style={{ paddingTop: "100px" }}>
                  <h4 style={{ lineHeight: "normal" }}>
                    Name: MANGAL PANDEY PRITHVIRAJ CHAUHAN<br></br>
                    Phone No.: XXXX XXXX XX<br></br>
                    Year: 2
                  </h4>
                </p>
              </div>
            </div>
          </div>
        </div>
        <input type="text" className="textbox" placeholder="Purpose" required />
        <Link to="qrscanner">
          <button className="buttonqr"> Open QR Scanner</button>
        </Link>
      </div>
    </body>
  );
};
export default HomePage;
