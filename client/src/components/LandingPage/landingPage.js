import image from '../../../src/image.png';
import qrScan from '../../../src/qr-scan.png';
import mockup1 from '../../../src/mockup1.png';
import mockup2 from '../../../src/mockup2.png';
import mockup4 from '../../../src/mockup4.png';
import mockup5 from '../../../src/mockup5.png';
import { useState, useEffect, useRef } from 'react';
import './landingPage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faDownload, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import { Link, Navigate, useNavigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

function LandingPage() {
    let whouse=localStorage.getItem('Auth')
    const navigate=useNavigate()
    useEffect(()=> {
        whouse=localStorage.getItem('Auth')
        if (whouse=="user") {
            // window.alert("not signed in")
            navigate('HomePage')
        }
    },[whouse])
  const userReviews = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?',
      author: 'Aryan Raj',
      position: 'CSE Student at Birla Institute of Applied Sciences',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?',
      author: 'Dr. Sandesh Tripathi',
      position: 'HOD of CSE branch at Birla Institute of Applied Sciences',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const changeReview = (direction) => {
    if (direction === 'next') {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === userReviews.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === 'prev') {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? userReviews.length - 1 : prevIndex - 1
      );
    }
  };

  const currentReview = userReviews[currentReviewIndex];

  
  return (
    <>
    <div className = 'main'>
      <div className='navigation'>
        <div className='logo'>   
          {<img src='https://drive.google.com/uc?export=view&id=1qd7rQwfIUEIrhOPP6qZvOZNujOCrmXDS'/>}
        </div>
        <button className='login'>
          <Link to = "signUp">Login</Link>
        </button>
      </div>
      <div className='dwarpal'>
          DWARPAL
      </div>
      <div className='mainHead'>
        
      <div className = 'left'>
        <div className='searchBar'>
          {/* <div className='searchIcon'><FontAwesomeIcon icon={faSearch} style={{width: 25, height: 25}} /></div>  */}
          <div className='searchContent'>Download our App</div>
          <div className='download'><FontAwesomeIcon icon={faDownload} style={{width: 34, height: 34}}/></div>
        </div>
        <div className='info'>
        DwarPal is a Qr-Code scanning based digital solution to ease the maintain the records of entrance and exit from a campus.
        </div>
        <div className='developers'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quos vero accusantium, possimus aperiam neque exercitationem magni fugit a, molestiae quae impedit vitae minus corporis. Quos vero illum modi rerum.

        </div> 
      </div> 
      <div className = 'right'>
        <img src = {image}/>
      </div>
      </div>
    </div>
    <div className='appDemo'>
        <img className= "img1" src = {mockup1}/>
        <img className= "img2" src = {mockup2}/>
        <img className= "img3" src = {mockup1}/>
        <img className= "img4" src = {mockup4}/>
        <img className= "img5" src = {mockup5}/>
    </div>
    
    <div className='chooseUs'>
      <div className='chooseUsHeader'>
        <div className='chooseUsHeaderTitle'>WHY CHOOSE US?</div>
        <div style={{ textAlign: 'center'}}>
          We offer secure and reliable service to access and maintain the information about the student's entry and exit from the college campus.
        </div>
      </div>
      <div className='chooseUsFeature'>
        <div className='featureAnimation'>
        <img src = {qrScan}/>
        </div>
        <div className='features'>
          <div className='feature1'>
          <div style={{fontSize:32, fontWeight: 700}}>Qr-Scanner</div>
            It gives you faster access mechanism than traditional methods. Because, scanning Qr-Code need less time rather than writing the details in the register. 
          </div>
          <div className='feature2'>
            <div style={{fontSize:32, fontWeight: 700}}>No ID Card Needed</div>
              No need to worry about loosing ID card because no physical outing card is needed when you are going for outing.
          </div>
          <div className='feature3'>
          <div style={{fontSize:32, fontWeight: 700}}>Online Database</div>
            College administration do not need to worry about keeping the register safe as the data will be saved in the online database.
          </div>
        </div>

      </div>
      <div className='userReview'>
        <div className='userReviewLeft'> 
          <div className='userReviewLeftTitle'>What Our Users Say About Us</div>
          <div className='swipe'>
            <div className='arrowLeft' onClick={() => changeReview('prev')}>
              <FontAwesomeIcon icon={faArrowLeft} style={{width: 48, height: 48}}/>
            </div>
            <div className='arrowRight' onClick={() => changeReview('next')}>
              <FontAwesomeIcon icon={faArrowRight} style={{width: 48, height: 48}}/>  
            </div>
          </div>
        </div>
        <div className='userReviewRight'>
          <div className='quoteLeft'><FontAwesomeIcon icon={faQuoteLeft} style={{width: 34, height:34}}/></div>
          <div className='review'>
            {currentReview.text}
            <div style={{fontSize:28, fontWeight: 700, marginTop:10}}>{currentReview.author}</div>
            <div><b>{currentReview.position}</b></div>
          </div>
        </div> 
        
      </div>
    </div> 
    <div>
      <div className='footerBackground'>
      <div className='footer' style={{alignSelf: 'flex-end'}}>
        <div className='footerLeft'>
          <div style={{fontSize:48, fontWeight: 700}}>What Our Users Say About Us</div>
        </div>
        <div className='footerRight'>
          <div className='raj121'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a praesentium officia assumenda impedit ab recusandae eum quam tempore, porro nisi sint reprehenderit rerum consequuntur sunt non ullam et magnam?
          </div>
        </div> 
        
      </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
