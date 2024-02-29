import "./QrScanner.css";
import { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import { API } from "../../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { DecryptData } from "../../../EncryptDevice";
const QrScanner = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { purpose } = location.state ? location.state : { purpose: null };
  const [access, setAccess] = useState(false)
  useEffect(() => {

    const FetchAccess = async () => {
      const result = await fetch(`${API}/StudentInfo/columns/access`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        }
      })
      const response = await result.json()
      console.log(`fetchAccess response is `,response)
      if (!response.access) {
        console.log(response)
        if (!purpose) {
          window.alert("Fill Purpose then come");
          navigate("/");
        }

      }
      setAccess(response.access)

    }
    try {
      FetchAccess()
    }
    catch (err) {
      window.err(err)
    }

  }, [access])

  const [timerCount, setTimerCount] = useState(false)
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const UpdateTime = async (scanTime) => {
    console.log("connecting backend...")
    const arr = scanTime.split("$$")
    console.log(arr)
    try {
      const ScanData = {
        time: arr[0],
        purpose: purpose,
        deviceId: arr[1]
      }
      console.log(ScanData.time, typeof (ScanData.time), typeof (arr[0]))
      const result = await fetch(`${API}/StudentInfo`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "content-type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser')
        },
        body: JSON.stringify(ScanData)
      })
    }
    catch (err) {
      window.alert(err);
      console.log(err)
    }
  }
  const handleScan = async (scanData) => {

    if (scanData && scanData !== "") {
      if ((((new Date().getTime()) - (new Date(scanData.text.split("$$")[0]).getTime()))) >= 7000) {
        console.log((((new Date().getTime() / 1000) - (new Date(scanData.text.split("$$")[0]).getTime())) / 1000) <= 7)
        window.alert("Invalid / Old Qr ")
        return window.location.reload(false)
      }
      setLoadingScan(true);
      console.log(`loaded >>>`, scanData);
      UpdateTime(scanData.text)
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      return (navigate('/'))
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App" >
      <div className="purpose-show">
        Status : {access ? "I am out " : "I am in"}
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
              video: { facingMode: selected === "user" ? "user" : { exact: "environment" } },
              audio: false
            }}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
          // chooseDeviceId={()=>selected}

          />
        </>
      )}

    </div>
  );
};
export default QrScanner;

