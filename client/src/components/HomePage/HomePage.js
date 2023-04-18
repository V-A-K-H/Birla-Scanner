  import { React, useState, useEffect } from "react";
  import "./HomePage.css";
  import { Link, NavLink, Navigate, redirect } from "react-router-dom";
  import { API } from "../../config";
  import Loader from "../MainComponents/Loader/Loader";
  import SignUp from "../SignUp/SignUp";
  import Navbar from "../MainComponents/Navbar/Navbar";
  import QrGenerator from "../AdminProfile/Admin/QrGenerator";

  const HomePage = () => {
    const [userData, setUserData] = useState(null);
    const [purpose,setPurpose]=useState()
    let admin = false;
    const FlipCard = (e) => {
      e.classList.toggle("flip");
    };
    const fetchData = async () => {
      console.log(localStorage.getItem('sessionUser'))
      try {
        const result = await fetch(`${API}/StudentInfo/columns/name phonenum year`, {
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
    }
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        fetchData()
        setLoad(true)
      }, 1125)
    }, [])


    if (!load || !userData) return (
      <>
        <Loader />
        <div>
          {!userData && "fetching dta"}
        </div>
      </>
    )
    // const StudentHomePage = () => {
    //   return (
       
    //   )
    // }
    const AdminHomePage = () => {
      return (
        <>
          <QrGenerator />
        </>
      )
    }
    return (
      admin
        ?
        <AdminHomePage />
        :  <>
        <body>
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
            <textarea type="text" className="textbox" placeholder="Purpose" value={purpose} onChange={(e)=> {setPurpose(e.target.value)}} />
            <Link to="qrscanner" state={{purpose: purpose }}>
              <button disabled={purpose?false: true} style={{backgroundColor: purpose?"blue": "red"}} className="buttonqr"> Open QR Scanner</button>
            </Link>
          </div>
        </body>
      </>
    );
  };
  export default HomePage;
