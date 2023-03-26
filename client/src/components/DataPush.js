import {React} from 'react'
import StudentInfo from './StudentInfo';
import { API } from '../config';
const DataPush=()=> {

    // async (e) => {
    //     const whoUse = admin ? "admin" : "user";
    //     // ASYNC keyword makes the followoing staement asynchronous, which means that other part of code could be executed while the async functions wait for promise resolution. AWAIT keywords waits for promise resoulution, if successful then it's following statements are executed, if promise returns false, then the execution jumps to catch block
        
    
    const PushKardo=()=> {
        StudentInfo.map(async(elem,index)=> {
            console.log(index)
            try {const result = await fetch(`${API}/SignUp`, {
                method: "POST",
                mode: "cors",
                headers: {      
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(elem),
              })

              }
              catch (error) {
                console.error(error)
              }
        })
    }
    return (
        <>
        <div>
            <button onClick={()=> {
                PushKardo()
            }}>Push Kardo</button>
        </div>
        </>

    )
}

export default DataPush;