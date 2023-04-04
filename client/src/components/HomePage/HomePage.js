import { React, useState, useEffect } from "react";
import "./HomePage.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import { API } from "../../config";
import Loader from "../MainComponents/Loader/Loader";
import SignUp from "../SignUp/SignUp";
const HomePage = () => {
  console.log("Rendering")
  const [userData, setUserData] = useState(null);
  
  const FlipCard = (e) => {
    e.classList.toggle("flip");
  };
  const fetchData=async ()=> {
    try {
      const result = await fetch(`${API}/StudentInfo/columns/name phonenum year`,{
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        }
      })
      const response=await result.json()
      setUserData(response[0])
    }
    catch (err) {
      console.log(err)
    }
  }
  const [load,setLoad]=useState(false);
  useEffect(()=> {
    setTimeout(()=> {
    fetchData()
    setLoad(true)
  },1125)
  },[])

  
  if (!load || !userData) return (
    <>
    <Loader/>
    <div>
    {!userData&& "fetching dta"}
    </div>
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
        <Link to='QrGenerator'><h5 className="text-white h4">Qr Page</h5></Link>
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
                    {`Name: ${userData.name}`}<br></br>
                    {`Phone No.: ${userData.phonenum}`}<br></br>
                    {`Year: ${userData.year}`}
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
