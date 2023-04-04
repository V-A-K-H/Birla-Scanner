import logo from './logo.svg';
import './App.css';

import SignUp from './components/SignUp/SignUp'
import HomePage from './components/HomePage/HomePage';
import Profile from './components/UserProfile/Profile/Profile';
import Loader from './components/MainComponents/Loader/Loader';
// import HomePage from './components/HomePage/HomePage';
// import Profile from './components/HomePage/Profile';
// import Loader from './components/HomePage/Loader/Loader';
import Admin from './components/AdminProfile/Admin/Admin';
import QrGenerator from './components/AdminProfile/Admin/QrGenerator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QrScanner from './components/HomePage/QrScanner/QrScanner';
import DataPush from './components/DataPush';
function App() {
  console.log("renderingi n app ",localStorage.getItem('sessionUser'))
  return (
    <>
      {/* <SignUp/> */}
  {/* <DataPush/>       */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="signup" element={<SignUp/>}></Route>
          <Route path="qrscanner" element={<QrScanner/>} >  </Route>
          <Route path="profile" element={<Profile/>} >  </Route>
          <Route path="loader" element={<Loader/>} >  </Route>
          <Route path="admin" element={<Admin/>} >  </Route>
          <Route path="QrGenerator" element={<QrGenerator/>} >  </Route>
               </Routes>
      </Router>
    </>
  );
}

export default App;   
