import { React, useState, useEffect } from "react";
import "./HomePage.css";
import {
  Link,
  NavLink,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";
import { API } from "../../config";
import Loader from "../MainComponents/Loader/Loader";
import SignUp from "../SignUp/SignUp";
import Navbar from "../MainComponents/Navbar/Navbar";
import QrGenerator from "../AdminProfile/Admin/QrGenerator";
import { AdminRoute } from "../PrivateRoute";

const HomePage = () => {
  let whoUse = localStorage.getItem("Auth");
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [purpose, setPurpose] = useState();
  const [load, setLoad] = useState(false);
  let admin = false;
  const fetchData = async () => {
    console.log(localStorage.getItem("sessionUser"));
    try {
      setLoad(false);
      const result = await fetch(
        `${API}/StudentInfo/columns/name phonenum year access photolink`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("sessionUser"),
          },
        }
      );
      const response = await result.json();
      console.log(response);

      setUserData(response[0]);
    } catch (err) {
      console.log(err);
      redirect("/signup");
    }
    setLoad(true);
  };
  console.log(whoUse);

  useEffect(() => {
    whoUse = localStorage.getItem("Auth");
    setTimeout(() => {
      fetchData();
      setLoad(true);
    }, 1125);
  }, [whoUse]);

  if (whoUse == "admin") {
    return <AdminRoute element={<QrGenerator />} />;
  }
  if (whoUse == null) return navigate("/signup");
  if (!load || !userData)
    return (
      <>
        <Loader />
      </>
    );
  if (userData.access) {
    navigate("/qrscanner");
  }
  return (
    <>
      <body className="homebody">
        <Navbar />
        <div className="container0">
          <div className="profile">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={userData.photolink}
                    alt=""
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="textbox"
            placeholder="Purpose"
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
          />
          
            <button
              disabled={purpose ? false : true}
              style={{ backgroundColor: purpose ? "#0B2447" : "black" }}
              className="buttonqr"
            >
            <Link to="qrscanner" state={{ purpose: purpose }}>
              {" "}
              Open QR Scanner
              </Link>
            </button>
          
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
                        src="https://drive.google.com/uc?id=1Rtbcsaaf63qnF5GI1rVnbz6Wzk_HxOkQ"
                        className="img-fluid"
                        alt="logo"
                      />
                      s
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
                      <a href="#">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=12orR1VZ_dIS2B3p7dcAdfsI_8eUA3Evi"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=1xUlHPSPutZu-219bIaDzDYL7DsqKyb0I"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="dev-photo"
                          src="https://drive.google.com/uc?id=1PtrkJYwYb0StZMDte8xgE-UUN6sIi5Zi"
                        />
                      </a>
                      <a href="#">
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
    </>
  );
};
export default HomePage;
