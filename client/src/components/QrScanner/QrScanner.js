// // versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru
import "./styles.css";
import { React, useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Loader from "../../Loader/Loader";
// import QrReader from "react-qr-scanner";

// const QrScanner = () => {
//   const [selected, setSelected] = useState("environment");
//   const [startScan, setStartScan] = useState(false);
//   const [loadingScan, setLoadingScan] = useState(false);
//   const [data, setData] = useState("");

//   const handleScan = async (scanData) => {
//     setLoadingScan(true);
//     if (scanData && scanData !== "") {
//       console.log(`loaded >>>`, scanData);
//       console.log(new Date(scanData.timestamp*1000).toTimeString())
//       setData(scanData);
//       setStartScan(false);
//       setLoadingScan(false);
//       // setPrecScan(scanData);
//     }
//   };
//   const handleError = (err) => {
//     console.error(err);
//   };
//   return (
//     <div className="App">

//       <button className="scan"
//         onClick={() => {
//           setStartScan(!startScan);
//         }}
//       >
//         {startScan ? "Stop Scan" : "Start Scan"}
//       </button>
//       {startScan && (
//         <>

//           <QrReader
//             facingmode={selected}
//             delay={1000}
//             onError={handleError}
//             onScan={handleScan}
//             // chooseDeviceId={()=>selected}
//             style={{ width: "300px" }}
//           />
//         </>
//       )}
//       {loadingScan && <p>Loading</p>}
//       {data !== "" && <p>{data.text}</p>}
//     </div>
//   );
// };

// export default QrScanner;

const qrcodeRegionId = "readerscan";
const QrScanner = () => {
  // useEffect(() => {
  //   console.log("IN use effect");
  //   function onScanSuccess(qrCodeMessage) {
  //     html5QrCodeScanner.clear().catch((error) => {
  //       console.log(error);
  //     });
  //     document.getElementById("card-overlay").innerHTML =
  //       '<span className="resultscan">' + qrCodeMessage + "</span>";
  //   }

  //   // When scan is unsuccessful fucntion will produce error message
  //   function onScanError(errorMessage) {
  //     // Handle Scan Error
  //   }
  //   const config = {
  //     fps: 10,
  //     qrbox: { width: 250, height: 250 },
  //   };
  //   // Setting up Qr Scanner properties
  //   let html5QrCodeScanner
  //     html5QrCodeScanner = new Html5QrcodeScanner(
  //       qrcodeRegionId,
  //       config,
  //       false
  //     );

  //     html5QrCodeScanner.render(onScanSuccess, onScanError);

  //   return () => {
  //     console.log("I am in cleanup function");
  //     html5QrCodeScanner.clear().catch((error) => {
  //       console.error("Failed to clear html5QrcodeScanner. ", error);
  //     });

  //   };
  // }, []);
  const [load,setLoad]=useState(false)
  useEffect(()=> {
    setTimeout(()=> {
    setLoad(true)
  },1125)
  },[])

  useEffect(() => {
    console.log("In use effect");
    // This method will trigger user permissions
    function onScanSuccess(decodedText, decodedResult) {
      Html5Qrcode.stop().catch((error) => {
        console.log(error);
      });
      document.getElementById("card-overlay").innerHTML =
        '<span className="resultscan">' + decodedText + "</span>";
    }

    // When scan is unsuccessful fucntion will produce error message
    function onScanError(errorMessage) {
      // Handle Scan Error
    }
    let cameraId;
    const abc = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
          cameraId = devices[0].id;
        }
        const html5QrCode = new Html5Qrcode(/* element id */ qrcodeRegionId);
        html5QrCode
          .start(
            cameraId,
            {
              fps: 10, // Optional, frame per seconds for qr code scanning
              qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
            },
            (decodedText, decodedResult) => {
    
              // do something when code is read
            },
            (errorMessage) => {
              // parse error, ignore it.
            }
          )
          .catch((err) => {
            // Start failed, handle it.
          });
      } catch (error) {
        console.log(error);
      }
    };
    abc();
    // console.log(cameraId)
  }, []);
  

  if (!load) return (
    <>
    <Loader/>
    </>
  )
  return (
    <>
      <div className="card">
        <div className="card-overlay"></div>
        <div className="card-inner">
          <div id={qrcodeRegionId}></div>
          <div className="resultscan">Result goes here</div>
        </div>
      </div>
    </>
  );
};
export default QrScanner;
