import logo from './logo.svg';
import './App.css';

import SignUp from './components/SignUp'
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import Loader from './components/Loader/Loader';
// import HomePage from './components/HomePage/HomePage';
// import Profile from './components/HomePage/Profile';
// import Loader from './components/HomePage/Loader/Loader';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QrScanner from './components/HomePage/QrScanner/QrScanner';
function App() {
  return (
    <>
      {/* <SignUp/> */}
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="signup" element={<SignUp/>}></Route>
          <Route path="qrscanner" element={<QrScanner/>} >  </Route>
          <Route path="profile" element={<Profile/>} >  </Route>
          <Route path="loader" element={<Loader/>} >  </Route>
          <Route path="admin" element={<Admin/>} >  </Route>
               </Routes>
      </Router>
    </>
  );
}

export default App;   
