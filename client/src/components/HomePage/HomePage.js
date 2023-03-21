import {React,useState,useEffect} from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { API } from '../../config'
const FlipCard = (e) => {
    e.classList.toggle('flip')
}

const HomePage = () => {
    const URL = `${API}/SignIn`
    const [userData, setUserData] = useState(null)
    // useEffect(async () => {
    //     const res = await fetch(URL);
    //     const data = await res.json();
    //     setUserData(data)



    // }, [])

    return (
        <body>
            <nav className="navbar navbar-inverse">
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
                          <li ><Link to='signup'>SignUp</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="profile">
                    <div className="flip-card" onClick={(e) => FlipCard(e)}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                    alt="Profile Photo"
                                    style={{ height: "300px", width: "300px" }}
                                />
                            </div>
                            <div className="flip-card-back" style={{ color: "white" }}>
                                <p style={{ paddingTop: "100px" }}>
                                    <h4 style={{ lineHeight: 'normal' }}>
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
            <Link to="qrscanner">Open QR Scanner</Link>
                        </div>
        </body>
    )
}
export default HomePage;