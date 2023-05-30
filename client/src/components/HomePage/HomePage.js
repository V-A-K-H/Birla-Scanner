import { React, useState, useEffect } from "react";
import "./HomePage.css";
import { Link, NavLink, Navigate, redirect, useNavigate } from "react-router-dom";
import { API } from "../../config";
import Loader from "../MainComponents/Loader/Loader";
import SignUp from "../SignUp/SignUp";
import Navbar from "../MainComponents/Navbar/Navbar";
import QrGenerator from "../AdminProfile/Admin/QrGenerator";
import { AdminRoute } from "../PrivateRoute";
const HomePage = () => {
  let whoUse = localStorage.getItem('Auth')
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const [purpose, setPurpose] = useState()
  const [load, setLoad] = useState(false);
  let admin = false;
  const FlipCard = (e) => {
    e.classList.toggle("flip");
  };
  const fetchData = async () => {
    console.log(localStorage.getItem('sessionUser'))
    try {
      setLoad(false)
      const result = await fetch(`${API}/StudentInfo/columns/name phonenum year access photolink`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        }
      })
      const response = await result.json()
      console.log(response)

      setUserData(response[0])
    }
    catch (err) {
      console.log(err)
      redirect('/signup')

    }
    setLoad(true)
  }
  console.log(whoUse)

  useEffect(() => {
    whoUse = localStorage.getItem('Auth')
    setTimeout(() => {
      fetchData()
      setLoad(true)
    }, 1125)
  }, [whoUse])

  if (whoUse == "admin") {
    return (
      <AdminRoute element={<QrGenerator />} />
    )
  }
  if (whoUse == null)
    return (
      navigate('/signup')
    )
  if (!load || !userData) return (
    <>
      <Loader />

    </>
  )
  if (userData.access) {
      navigate('/qrscanner')
  }
  return (
    <>
      <Navbar />
      <body className="homebody">
        <div className="container">
          <div className="profile">
            <div className="flip-card" onClick={(e) => FlipCard(e)}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={userData.photolink}
                    alt=""
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
          <textarea type="text" className="textbox" placeholder="Purpose" value={purpose} onChange={(e) => { setPurpose(e.target.value) }} />
          <Link to="qrscanner" state={{ purpose: purpose }}>
            <button disabled={purpose ? false : true} style={{ backgroundColor: purpose ? "#088395" : "black" }} className="buttonqr"> Open QR Scanner</button>
          </Link>
        </div>
        <footer class="footer">
	<div class="row full-width align-spaced">
    <div class="large-3 medium-6 small-12 columns"><img class="footer-logo" src="http://shopify.irishdealsdaily.com/images/logos/p-logo.png"></div>
    <div class="large-2 medium-3 hide-for-small-only columns">
      <h4 class="footer-heading">Categories</h4>
      <ul class="footer-links">
            <li><a href="#">What I Do</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ's</a></li>
        <ul>
    </div>
    <div class="large-2 medium-3 hide-for-small-only columns">
      <h4 class="footer-heading">Store</h4>
      <ul class="footer-links">
            <li><a href="#">What I Do</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ's</a></li>
        <ul>
    </div>
    <div class="large-5 medium-12 small-12 columns social-container">
      <a href="#"><i class="fa fa-twitter social-icon" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-instagram social-icon" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-facebook social-icon" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-google-plus social-icon" aria-hidden="true"></i></a>
    </div>
  </div>
</footer>
      </body>
    </>


  );
};
export default HomePage;
