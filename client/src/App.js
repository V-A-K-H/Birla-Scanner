import logo from './logo.svg';
import './App.css';

import SignUp from './components/SignUp/SignUp'
import HomePage from './components/HomePage/HomePage';
import Profile from './components/UserProfile/Profile/Profile';
import Loader from './components/MainComponents/Loader/Loader';
import Admin from './components/AdminProfile/Admin/Admin';
import QrGenerator from './components/AdminProfile/Admin/QrGenerator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QrScanner from './components/HomePage/QrScanner/QrScanner';
import { API } from './config';
import { useEffect } from 'react';
import Navbar from './components/MainComponents/Navbar/Navbar';
import { UserRoute,AdminRoute } from './components/PrivateRoute';
function App() {
  console.log("renderingi n app ", localStorage.getItem('sessionUser'))
  return (
    
    <>
    {/* <Navbar/> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="qrscanner" element={<UserRoute element={<QrScanner/>}/>}></Route>
            <Route path="profile" element={<UserRoute element={<Profile/>}/>} >  </Route>
            <Route path="loader" element={<Loader />} >  </Route>
            <Route path="admin" element={<AdminRoute element={<Admin/>}/>} >  </Route>
            <Route path="QrGenerator" element={<AdminRoute element={<QrGenerator/>}/>} >  </Route>
          </Routes>
        </Router>
    
    </>
  );
}

export default App;   
