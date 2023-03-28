import "./styles.css";
import { useState } from "react";
import QrReader from "react-qr-scanner";
const QrScanner = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      console.log(new Date(scanData.timestamp*1000).toTimeString())
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
         
          <QrReader
          constraints={{
            video: { width: 1280, height: 720, facingMode: selected==="user"? "user": {exact: "environment"} },
            audio: false
          }}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "700px" }}
      
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data.text}</p>}
    </div>
  );
};  
export default QrScanner;
  
