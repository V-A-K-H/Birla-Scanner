import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import HomePage from './components/HomePage/HomePage';
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
               </Routes>
      </Router>
    </>
  );
}

export default App;   
