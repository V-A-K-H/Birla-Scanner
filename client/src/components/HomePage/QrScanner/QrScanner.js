import "./QrScanner.css";
import { useState,useEffect } from "react";
import QrReader from "react-qr-scanner";
import { API } from "../../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { DecryptData } from "../../../EncryptDevice";
const QrScanner = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const {purpose}=location.state?location.state: {purpose: null};
  useEffect(() => {
    if (!purpose) {
      window.alert("Fill Purpose then come");
      navigate("/");
    }
  }, [purpose, navigate]);

  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  
  const UpdateTime=async(scanTime)=> {
    console.log("connecting backend...")
    const arr=scanTime.split("$$")
    console.log(arr)
    try {
    const ScanData={
      time:Date(arr[0]),
      purpose: purpose,
      deviceId: arr[1]
    }
      const result=await fetch(`${API}/StudentInfo`,{
        method:"PUT",
        mode: "cors",
        headers: {
          "content-type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        },
        body: JSON.stringify(ScanData)
      })
      console.log(result)
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleScan = async (scanData) => {
    setLoadingScan(true);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      UpdateTime(scanData.text)
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="App">
      <div>
        {purpose}
      </div>
      <button
        className="openscanner"
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select className="cameramode" onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}><span className="cameramodeoption">Back Camera</span></option>
            <option value={"user"}><span className="cameramodeoption">Front Camera</span></option>
          </select>
         
          <QrReader className="qrreader"
          constraints={{
            video: {  facingMode: selected==="user"? "user": {exact: "environment"} },
            audio: false
          }}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
      
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data.text}</p>}
    </div>
  );
};  
export default QrScanner;
  
