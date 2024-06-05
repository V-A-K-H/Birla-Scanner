import {React, useState, useEffect} from 'react';
import './HomePage.css';
import {Link, redirect, useNavigate} from 'react-router-dom';
import {API} from '../../config';
import Loader from '../MainComponents/Loader/Loader';
import Navbar from '../MainComponents/Navbar/Navbar';
import QrGenerator from '../AdminProfile/Admin/QrGenerator';
import {AdminRoute} from '../PrivateRoute';

const HomePage = () => {
  let whoUse = localStorage.getItem('Auth');
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [purpose, setPurpose] = useState();
  const [load, setLoad] = useState(false);
  let admin = false;
  const fetchData = async () => {
    try {
      setLoad(false);
      const result = await fetch(
        `${API}/StudentInfo/columns/name phonenum year access photolink`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('sessionUser'),
          },
        },
      );
      const response = await result.json();

      setUserData(response);
    } catch (err) {
      redirect('/signup');
    }
    setLoad(true);
  };

  useEffect(() => {
    whoUse = localStorage.getItem('Auth');
    setTimeout(() => {
      fetchData();
      setLoad(true);
    }, 1125);
  }, [whoUse]);

  if (whoUse == 'admin') {
    return <AdminRoute element={<QrGenerator />} />;
  }
  if (whoUse == null) return navigate('/signup');
  if (!load || !userData)
    return (
      <>
        <Loader />
      </>
    );
  if (userData.access) {
    navigate('/qrscanner');
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
                    style={{height: '300px', width: '300px'}}
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
            onChange={e => {
              setPurpose(e.target.value);
            }}
          />

          <button
            disabled={purpose ? false : true}
            style={{backgroundColor: purpose ? '#0B2447' : 'black'}}
            className="buttonqr">
            <Link to="/qrscanner" state={{purpose: purpose}}>
              {' '}
              Open QR Scanner
            </Link>
          </button>
        </div>
        <div className="footer">
          <div className="container1">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-12 col-lg-12 mb-50">
                  <div className="footer-widget">
                    <div className="companyinfo">
                      <div className="footer-logo">
                        <img
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1717526893/Dwarpal_cnf4py.png"
                          className="img-fluid"
                          alt="logo"
                        />
                        <img
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1717526892/Dwarpal1_gp9zfr.png"
                          className="img-fluid2"
                          alt="logo"
                        />
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
                      <a href="https://www.linkedin.com/in/aryan-raj7">
                        <img
                          className="dev-photo"
                          alt="pic"
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1715939368/glmctlshecdfdqvh7dvt.jpg"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/harshit-roy">
                        <img
                          className="dev-photo"
                          alt="pic"
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1717526094/photo_2024-05-31_14-15-20_2_gj4pnr.jpg"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/kritik-srivastava">
                        <img
                          className="dev-photo"
                          alt="pic"
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1717526094/photo_2024-05-31_14-15-20_xx1rxb.jpg"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/vivekbhatt3011">
                        <img
                          className="dev-photo"
                          alt="pic"
                          src="https://res.cloudinary.com/dmlo55ukc/image/upload/v1717526094/photo_2024-05-31_14-15-19_jumgha.jpg"
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
                      <div className="col-xl-6 col-md-6 mb-30">
                        <div className="single-cta">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="cta-text">
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
