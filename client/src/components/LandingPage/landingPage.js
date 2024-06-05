import qrScan from '../../../src/qr-scan.gif';
import aryan from '../../../src/aryan.jpg';
import kritik from '../../../src/kritik.jpg';
import vivek from '../../../src/vivekbhatt.jpg';
import roy from '../../../src/roy.jpg';
import {useState, useEffect} from 'react';
import './landingPage.css';
import {Link, useNavigate} from 'react-router-dom';

function LandingPage() {
  let whouse = localStorage.getItem('Auth');
  const navigate = useNavigate();
  useEffect(() => {
    whouse = localStorage.getItem('Auth');
    if (whouse === 'user' || whouse === 'admin') {
      // window.alert("not signed in")
      navigate('HomePage');
    }
  }, [whouse]);
  const userReviews = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?',
      author: 'Dr. Sandesh Tripathi',
      position: 'HOD of CSE branch at Birla Institute of Applied Sciences',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?',
      author: 'Aryan Raj',
      position: 'CSE Student at Birla Institute of Applied Sciences',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const changeReview = direction => {
    if (direction === 'next') {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === userReviews.length - 1 ? 0 : prevIndex + 1,
      );
    } else if (direction === 'prev') {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === 0 ? userReviews.length - 1 : prevIndex - 1,
      );
    }
  };

  const currentReview = userReviews[currentReviewIndex];

  return (
    <>
      {/* Hero Banner */}
      <nav className="mainNav">
        <div className="mainNav__logo">DWARPAL</div>
        <div className="mainNav__links">
          <a href="" className="mainNav__link">
            WHY US?
          </a>
          <a href="" className="mainNav__link">
            Reviews
          </a>
          <a href="" className="mainNav__link">
            Developers
          </a>
          <a className="mainNav__link">
            <Link to="signUp">Login</Link>
          </a>
        </div>
        <div className="mainNav__icon">
          <a className="mainNav__link">
            <Link to="signUp">Login</Link>
          </a>
        </div>
      </nav>

      <header className="mainHeading">
        <div className="mainHeading__content">
          <article className="mainHeading__text">
            <p className="mainHeading__preTitle">DWARPAL</p>
            <h2 className="mainHeading__title">
              College Entry/Exit Authenticator
            </h2>
            <p className="mainHeading__description">
              We offer secure and reliable service to access and maintain the
              information about the student's entry and exit from the college
              campus.
            </p>
            <button className="cta">Download App</button>
          </article>

          <figure className="mainHeading__image">
            <div className="phone-slideshow">
              <div className="screen-mask">
                <ul className="phone-slideshow-list">
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
      {/* Feedback section */}
      <div className="Feedback-section">
        <h2>What Our Users Say About Us</h2>

        <div className="timeline">
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon ">
              <i className="lni-sport"></i>
            </div>
            <div className="timeline__event__date">September 1985</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">Dr. Sandesh Tripathi</div>
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
              <div className="timeline__event__title">Prof. Abhay Sharma</div>
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
            <div className="timeline__event__date">May 2024</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Prof. Neeraj Bisht</div>
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
              <div className="timeline__event__title">Prof. Kaushal Bhatt </div>
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

      <div className="chooseUs">
        <div className="chooseUsHeader">
          <div className="chooseUsHeaderTitle">WHY CHOOSE US?</div>
          <div className="chooseUsHeaderText" style={{textAlign: 'center'}}>
            We offer secure and reliable service to access and maintain the
            information about the student's entry and exit from the college
            campus.
          </div>
        </div>
        <div className="chooseUsFeature">
          <div className="features">
            <div>
              <div className="card">
                <div className="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701">
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p className="title">Qr-Scanner</p>
                <p className="text">
                  It gives you faster access mechanism than traditional methods.
                  Because, scanning Qr-Code need less time rather than writing
                  the details in the register.{' '}
                </p>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701">
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p className="title">Qr-Scanner</p>
                <p className="text">
                  It gives you faster access mechanism than traditional methods.
                  Because, scanning Qr-Code need less time rather than writing
                  the details in the register.{' '}
                </p>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="icon">
                  <svg
                    height="38px"
                    width="38px"
                    version="1.1"
                    id="heart"
                    viewBox="0 0 471.701 471.701">
                    <linearGradient id="gradientColor">
                      <stop offset="5%" stop-color="#7eaaff"></stop>
                      <stop offset="95%" stop-color="#ff48fb"></stop>
                    </linearGradient>
                    <g>
                      <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                    </g>
                  </svg>
                </div>
                <p className="title">No ID Card Needed</p>
                <p className="text">
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

      {/* Developers Details Display */}
      <ul className="cards">
        <li>
          <a
            href="https://www.linkedin.com/in/aryan-raj7/"
            className="card_developer">
            <img
              src=" https://i.pinimg.com/originals/14/2c/5f/142c5ff7be07ea802d1dce8ad99ea746.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={aryan} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Aryan Raj</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/harshit-roy/"
            className="card_developer">
            <img
              src="https://i.pinimg.com/564x/07/ee/f5/07eef597414c63446b2fdc286fdb2814.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={roy} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Harshit Roy</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kritik-srivastava/"
            className="card_developer">
            <img
              src="https://i.pinimg.com/564x/eb/2c/1a/eb2c1aafdad581c560858bc9c202fd91.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={kritik} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Kritik Srivastava</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vivekbhatt3011/"
            className="card_developer">
            <img
              src="https://i.pinimg.com/564x/13/9b/76/139b76de658bcea3f735d08de7bec462.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={vivek} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Vivek Bhatt</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
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
