import Asset3 from "../../../src/Asset3.png";
import image from "../../../src/image.png";
import qrScan from "../../../src/qr-scan.gif";
import mockup1 from "../../../src/mockup1.png";
import mockup2 from "../../../src/mockup2.png";
import mockup4 from "../../../src/mockup4.png";
import mockup5 from "../../../src/mockup5.png";
import { useState, useEffect, useRef } from "react";
import "./landingPage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faDownload,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons you need
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import logo from "../../../src/logo.svg"

function LandingPage() {
  let whouse = localStorage.getItem("Auth");
  const navigate = useNavigate();
  useEffect(() => {
    whouse = localStorage.getItem("Auth");
    if (whouse == "user" || whouse == "admin") {
      // window.alert("not signed in")
      navigate("HomePage");
    }
  }, [whouse]);
  const userReviews = [
    {
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?",
      author: "Dr. Sandesh Tripathi",
      position: "HOD of CSE branch at Birla Institute of Applied Sciences",
    },
    {
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?",
      author: "Aryan Raj",
      position: "CSE Student at Birla Institute of Applied Sciences",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const changeReview = (direction) => {
    if (direction === "next") {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === userReviews.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? userReviews.length - 1 : prevIndex - 1
      );
    }
  };

  const currentReview = userReviews[currentReviewIndex];

  return (
    <>
      <div className="main">
        
        <div className="navigation">
          <div className="logo">
            {
              <img src={logo} />
            }
          </div>
          <button className="login">
            <Link to="signUp">Login</Link>
          </button>
        </div>
        <div className="dwarpal">DWARPAL</div>
        <div className="mainHead">
          <div className="left">
            <div className="searchBar">
              {/* <div className='searchIcon'><FontAwesomeIcon icon={faSearch} style={{width: 25, height: 25}} /></div>  */}
              <div className="searchContent">Download our App</div>
              <div className="download">
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ width: 34, height: 34 }}
                />
              </div>
            </div>
            <div className="info">
              DwarPal is a Qr-Code scanning based digital solution to ease the
              maintain the records of entrance and exit from a campus.
            </div>
            <div className="developers">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quos vero accusantium, possimus aperiam neque exercitationem magni
              fugit a, molestiae quae impedit vitae minus corporis. Quos vero
              illum modi rerum.
            </div>
          </div>
          <div className="right">
            <img src="https://c4.wallpaperflare.com/wallpaper/915/930/406/action-figures-3d-desktop-deadpool-iron-man-wallpaper-preview.jpg"></img>
          </div>
        </div>
      </div>
      <div className="appDemo">
        <img className="img1" src={mockup1} />
        <img className="img2" src={mockup2} />
        <img className="img3" src={mockup1} />
        <img className="img4" src={mockup4} />
        <img className="img5" src={mockup5} />
      </div>

      <div className="chooseUs">
        <div className="chooseUsHeader">
          <div className="chooseUsHeaderTitle">WHY CHOOSE US?</div>
          <div style={{ textAlign: "center" }}>
            We offer secure and reliable service to access and maintain the
            information about the student's entry and exit from the college
            campus.
          </div>
        </div>
        <div className="chooseUsFeature">
          <div className="features">
            <div>
              <div class="card">
                <div class="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701"
                  >
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p class="title">Qr-Scanner</p>
                <p class="text">
                  It gives you faster access mechanism than traditional methods.
                  Because, scanning Qr-Code need less time rather than writing
                  the details in the register.{" "}
                </p>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701"
                  >
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p class="title">Qr-Scanner</p>
                <p class="text">
                  It gives you faster access mechanism than traditional methods.
                  Because, scanning Qr-Code need less time rather than writing
                  the details in the register.{" "}
                </p>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701"
                  >
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p class="title">No ID Card Needed</p>
                <p class="text">
                  No need to worry about loosing ID card because no physical
                  outing card is needed when you are going for outing.
                </p>
              </div>
            </div>
          </div>
          <div className="featureAnimation">
            <img src={qrScan} />
          </div>
        </div>
        <div className="userReview">
          <div className="userReviewLeft">
            <div className="userReviewLeftTitle">
              What Our Users Say About Us
            </div>
            <div className="swipe">
              <div className="arrowLeft" onClick={() => changeReview("prev")}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ width: 48, height: 48 }}
                />
              </div>
              <div className="arrowRight" onClick={() => changeReview("next")}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ width: 48, height: 48 }}
                />
              </div>
            </div>
          </div>
          <div className="userReviewRight">
            <div className="quoteLeft">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ width: 34, height: 34 }}
              />
            </div>
            <div className="review">
              {currentReview.text}
              <div style={{ fontSize: 28, fontWeight: 700, marginTop: 10 }}>
                {currentReview.author}
              </div>
              <div>
                <b>{currentReview.position}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footerBackground">
          <div className="footer" style={{ alignSelf: "flex-end" }}>
            <div className="footerLeft">
              <div style={{ fontSize: 48, fontWeight: 700 }}>
                What Our Users Say About Us
              </div>
            </div>
            <div className="footerRight">
              <div className="raj121">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a
                praesentium officia assumenda impedit ab recusandae eum quam
                tempore, porro nisi sint reprehenderit rerum consequuntur sunt
                non ullam et magnam?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
