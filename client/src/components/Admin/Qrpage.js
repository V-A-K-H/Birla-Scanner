import { React, useEffect, useState } from "react";
import "./Qrpage.css";
import ReactDOM from "react-dom";
import QRCode from 'qrcode'
// const Qrpage = () => {
//     const [timerId,setTimerId]=useState(null)
//     useEffect(()=> {
//         console.log("Re Rendering")
//         return ( ()=> {
            
//             console.log("Unmounting")
//             clearInterval(timerId)
            
//         }

//         )
//     },[])
//     console.log("rendering")
//     const [show,setshow]=useState(true)
//     // the use effect runs the first time and build a qr at the present time and sets load to false
//     // after every minute passes the qr code sets load to true and it reloads in the use effect
//     // setInterval(() => {
//     //     console.log("one second has passed")
//     //     setLoad(true)
//     // }, 50000)
//     const generateQR =async ()=> {
//         let abc= setInterval(() => {
//         let time = (new Date().getSeconds()).toString();
//             console.log(time)
//             QRCode.toCanvas(document.getElementById('canvas'), `${time}`, function (error) {
//                 if (error) console.error(error)
//             })
//             document.getElementById('canvas').style.height = "650px"
//             document.getElementById('canvas').style.width = "650px"
//             document.getElementById('canvas').style.marginTop = "50px"
//     }, 5000)
//     setTimerId(abc)
//     // this runs while js is watiting for setinterval to execute, this is the beauty of async js programming.
//     console.log("waiting for timeout")
//     let time = (new Date().getSeconds()).toString();
//     console.log(time)
//     QRCode.toCanvas(document.getElementById('canvas'), `${time}`, function (error) {
//         if (error) console.error(error)

//     })
//     document.getElementById('canvas').style.height = "650px"
//     document.getElementById('canvas').style.width = "650px"
//     document.getElementById('canvas').style.marginTop = "50px"
//     }
//     // const generateQR = async text => {
//     //     try {
//     //         console.log(await QRCode.toDataURL(text))
//     //     } catch (err) {
//     //         console.error(err)
//     //     }
//     // }
//     return (
//         <div className="qr">
//             <canvas style={{display: show?"none": "block"}}id="canvas"> </canvas>
//             <script src="bundle.js"></script>  
//             <button style={{display: show?"block": "none"}} onClick={()=> {
//                                 setshow(false)
//                return ( generateQR())

//             }}>Chaliye shuru karte hai</button>        
//         </div>
//     );
// };
const Qrpage = () => {
    const [timerId, setTimerId] = useState(null);
  
    useEffect(() => {
      console.log("Re Rendering");
      return () => {
        console.log("Unmounting");
        clearInterval(timerId);
      };
    }, [timerId]);
  
    console.log("rendering");
    const [show, setshow] = useState(true);

    



  
    const generateQR = async () => {
      if (timerId) clearInterval(timerId);
      const abc = setInterval(() => {
        let time = new Date().getSeconds().toString();
        console.log(time);
        QRCode.toCanvas(document.getElementById("canvas"), `${time}`, function (error) {
          if (error) console.error(error);
        });
        //media query 
    function mobileview(x){
      if(x.matches){
        document.getElementById("canvas").style.height = "41%";
        document.getElementById("canvas").style.width = "85%";
        document.getElementById("canvas").style.marginTop = "2%";
        document.getElementById("canvas").style.borderRadius = "10PX";
      }
      else{
        document.getElementById("canvas").style.height = "79%";
        document.getElementById("canvas").style.width = "41%";
        document.getElementById("canvas").style.marginTop = "2%";
      }
    }
    var x = window.matchMedia("(max-width: 700px)")
    mobileview(x);


      }, 5000);
      setTimerId(abc);
      console.log("waiting for timeout");
      let time = new Date().getSeconds().toString();
      console.log(time);
      QRCode.toCanvas(document.getElementById("canvas"), `${time}`, function (error) {
        if (error) console.error(error);
      });
      //media query 
    function mobileview(x){
      if(x.matches){
        document.getElementById("canvas").style.height = "41%";
        document.getElementById("canvas").style.width = "85%";
        document.getElementById("canvas").style.marginTop = "2%";
        document.getElementById("canvas").style.borderRadius = "15px";
      }
      else{
        document.getElementById("canvas").style.height = "79%";
        document.getElementById("canvas").style.width = "41%";
        document.getElementById("canvas").style.marginTop = "2%";
      }
    }
    var x = window.matchMedia("(max-width: 700px)")
    mobileview(x);
    };
  
    return (
      <div className="qr">
        <canvas style={{ display: show ? "none" : "block" }} id="canvas"></canvas>
        <script src="bundle.js"></script>
        <button
        className="openqr"
          style={{ display: show ? "block" : "none" }}
          onClick={() => {
            setshow(false);
            return generateQR();
          }}
        >
          open qrcode
        </button>
      </div>
    );
  };
  
export default Qrpage;