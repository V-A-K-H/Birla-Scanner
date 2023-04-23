import { React, useState } from 'react'
import './styles.css'
const ScanConfirm = () => {
    const [time,setTime]=useState({
        hours:0,
        minutes: 0,
        seconds:0,
    })
    const targetTime = new Date();
        targetTime.setHours(18, 30, 0, 0);
        setInterval(() => {
            const currentTime = new Date();
            let timeRemaining = targetTime.getTime() - currentTime.getTime();
            if (timeRemaining < 0) {
                timeRemaining += 24 * 60 * 60 * 1000;
            }
            let hours = Math.floor(timeRemaining / (60 * 60 * 1000));
            timeRemaining -= hours * 60 * 60 * 1000;
            let minutes = Math.floor(timeRemaining / (60 * 1000));
            timeRemaining -= minutes * 60 * 1000;
            let seconds=Math.floor(timeRemaining/(1000))
            setTime((prev)=> ({
                ...prev,hours: hours,minutes:minutes,seconds:seconds
            }))
        }, 1000);
    return (
        <>
            <div className="main-div">
                <div className="opt-div" id="image"><img
                    src="https://icon-library.com/images/person-image-icon/person-image-icon-18.jpg" alt="Photo" /></div>
                <div className="opt-div" id="name">Aryan Raj</div>
                <div className="opt-div" id="timer">
                    <p>Remaining time</p>
                    <div id="countdown">{`${time.hours} Hr ${time.minutes} Min ${time.seconds} Sec`}</div>
                </div>
                <div className="opt-div" id="button"><button>Open Scanner</button></div>
            </div>
        </>
    )
}
export default ScanConfirm