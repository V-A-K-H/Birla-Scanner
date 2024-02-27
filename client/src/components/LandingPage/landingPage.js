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
import logo from "../../../src/logo.svg";

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
      

{/* Hero Banner */}
<nav class="mainNav">
   <div class="mainNav__logo">DWARPAL</div>
   <div class="mainNav__links">
      <a href="" class="mainNav__link">WHY US?</a>
      <a href="" class="mainNav__link">Reviews</a>
      <a href="" class="mainNav__link">Developers</a>
      <a class="mainNav__link"><Link to="signUp">Login</Link></a>
   </div>
   <div class="mainNav__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <g data-name="Layer 2" fill="#9197AE">
            <g data-name="menu-2">
               <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
               />
               <circle cx="4" cy="12" r="1" />
               <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
               <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
               <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
            </g>
         </g>
      </svg>
   </div>
</nav>
<header class="mainHeading">
   <div class="mainHeading__content">
      <article class="mainHeading__text">
         <p class="mainHeading__preTitle">DWARPAL</p>
         <h2 class="mainHeading__title">College Entry/Exit Authenticator</h2>
         <p class="mainHeading__description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
         </p>
         <button class="cta">Download App</button>
      </article>

      <figure class="mainHeading__image">
         <div class="phone-slideshow">
  <div class="screen-mask">
    <ul class="phone-slideshow-list">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
      </figure>
   </div>
      </header>
      {/* Section End */}


      

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
      </div>
{/* Section End */}
      {/* Feedback section */}
      <div className="Feedback-section">
        <h2>What Our Users Say About Us</h2>

        <div className="timeline">
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            s
            <div className="timeline__event__icon ">
              <i className="lni-sport"></i>
            </div>
            <div className="timeline__event__date">September 1985</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">Super Mario Brothers</div>
              <div className="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              <i className="lni-sport"></i>
            </div>
            <div className="timeline__event__date">June 1986</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Super Mario Bros: The Lost Levels
              </div>
              <div className="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
              <i className="lni-sport"></i>
            </div>
            <div className="timeline__event__date">October 1988</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Super Mario Bros. 2</div>
              <div className="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i className="lni-sport"></i>
            </div>
            <div className="timeline__event__date">October 1988</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Super Mario Bros. 3</div>
              <div className="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developers Details Display */}
      <ul className="cards">
  <li>
    <a href="" className="card_developer">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>     
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card_developer">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card_developer">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>  
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card_developer">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3> 
          </div>          
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
</ul>
      {/* Section End */}

      {/* Footer */}
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default LandingPage;
