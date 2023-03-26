import { React, useEffect, useState } from "react";
import "./Qrpage.css";
import ReactDOM from "react-dom";
import QRCode from 'qrcode'
const Qrpage = () => {
    console.log("rendering")
    const [show,setshow]=useState(true)
    // the use effect runs the first time and build a qr at the present time and sets load to false
    // after every minute passes the qr code sets load to true and it reloads in the use effect
    // setInterval(() => {
    //     console.log("one second has passed")
    //     setLoad(true)
    // }, 50000)
    const generateQR    =async ()=> {
        var abc= setInterval(() => {
        let time = (new Date().getSeconds()).toString();
            console.log(time)
            QRCode.toCanvas(document.getElementById('canvas'), `${time}`, function (error) {
                if (error) console.error(error)
            })
            document.getElementById('canvas').style.height = "650px"
            document.getElementById('canvas').style.width = "650px"
            document.getElementById('canvas').style.marginTop = "50px"
    }, 5000)
    // this runs while js is watiting for setinterval to execute, this is the beauty of async js programming.
    console.log("waiting for timeout")
    let time = (new Date().getSeconds()).toString();
    console.log(time)
    QRCode.toCanvas(document.getElementById('canvas'), `${time}`, function (error) {
        if (error) console.error(error)

    })
    document.getElementById('canvas').style.height = "650px"
    document.getElementById('canvas').style.width = "650px"
    document.getElementById('canvas').style.marginTop = "50px"
    }
    // const generateQR = async text => {
    //     try {
    //         console.log(await QRCode.toDataURL(text))
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    return (
        <div className="qr">
            <canvas style={{display: show?"none": "block"}}id="canvas"> </canvas>
            <script src="bundle.js"></script>  
            <button style={{display: show?"block": "none"}} onClick={()=> {
                generateQR()
                setshow(false)
            }}>Chaliye shuru karte hai </button>        
        </div>
    );
};
export default Qrpage;