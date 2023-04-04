import "./QrScanner.css";
import { useState } from "react";
import QrReader from "react-qr-scanner";
import { API } from "../../../config";

const QrScanner = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      // try {
      //   const result = await fetch(`${API}/SignIn`, {
      //     method: "POST",
      //     mode: "cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email, password }),
      //   })
  
      //   const response = await result.json()
      //   console.log(response)
      //   if (response.jwtToken) {
      //     localStorage.setItem('sessionUser', response.jwtToken)
      //     navigate('/')
  
      //   }
      // }
      //   catch (error) {
      //     console.log(error)
      //     // window.alert(error)
      //   }
      // console.log(new Date(scanData.timestamp*1000).toTimeString())
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
  
