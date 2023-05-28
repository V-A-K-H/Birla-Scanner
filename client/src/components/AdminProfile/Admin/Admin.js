

import { React, useState, useEffect } from "react";
import "./Admin.css";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../MainComponents/Loader/Loader";
import { API } from "../../../config";
const Admin = () => {
  const [studentData, setStudentData] = useState(null)
  const [year, setYear] = useState(0)
  const fetchStudentData = async () => {
    try {
      const result = await fetch(`${API}/AdminSignIn/auth/${localStorage.getItem('Auth')}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem('sessionUser'),
        },
      })
      const response = await result.json()
      const StudentArray = []
      response.map((elem) => {
        StudentArray.push(elem)
      })
      
      setStudentData(StudentArray.sort((a,b) => {
        return (
          (b.access - a.access)
        )
      }))
    }
    catch (err) {
      console.warn(err)
    }
  }
  useEffect(() => {
    // fetch data every 10 seconds
    setInterval(() => {
      fetchStudentData()
      setTimeout(() => {
        setLoad(true)
      }, 1125)
    }, 1000);
  }, [])
  
  const [load, setLoad] = useState(false)

  if (!load) return (
    <>
      <Loader />
    </>
  )
  const TableRow = () => {
    if (studentData) {
      
      // return is necessary to run the code
      return studentData.map((elem) => {
        // if (elem.year == year) { }
        const outingInfo = elem.outinginfo[Object.keys(elem.outinginfo).length - 1];
        // use new date to convert string into date object, not only Date()
        const Status = elem.access ? "out" : "In"
        
        if (elem.year == year) {
          
          return (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={elem.photolink}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{elem.name}</p>
                    <p className="text-muted mb-0">{elem.phonenum}</p>
                  </div>
                  
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{elem.year}</p>
                <p className="text-muted mb-0">{elem.branch}</p>
              </td>

              {/* <td>{Date(outingInfo.date)}</td>
              <td>{`${Date(outingInfo.entry).getHours()}:${Date(outingInfo.entry).getMinutes()}`}</td>
              <td>{`${Date(outingInfo.exit).getHours()}:${Date(outingInfo.exit).getMinutes()}`}</td> */}
              <td>{`${new Date(outingInfo.date).getDate()}-${new Date(outingInfo.date).getMonth() + 1}-${new Date(outingInfo.date).getFullYear()}`}</td>
              <td>{outingInfo.purpose}</td>
              let exit = new Date()
              let exithours =new Date(outingInfo.exit).getHours()
              if (exithours>12){
                  exithours -= 12
              }
              if(exithours <=9){
                exithours = `0${hours}`
              } 
              let exitmin = new Date(outingInfo.exit).getMinutes()
              if(exitmin <=9){
              exitmin = `0${min}`
              }
              <td>{`${exithours}:${exitmin}`}</td>
              let entry = new Date()
              let entryhours = new Date(outingInfo.exit).getHours()
              if(entryhours >12){
                entryhours -= 12
              }
              if(entryhours <=9){
                entryhours = `0${hours}`
              }
              let entrymin = new Date(outingInfo.exit).getMinutes()
              if(entrymin <=9){
                entrymin = `0${min}`
              }
              <td>{outingInfo.entry ? `${entryhours}:${entrymin}` : `---`}</td>
              
              <td>
                <span className={elem.access ? "badge badge-late rounded-pill d-inline" : "badge badge-In rounded-pill d-inline"}>
                  {Status}
                </span>
              </td>
            </tr>
          )
        }
      }
      )
    }
  }
  return (
    <body>
      
      <div style={{ marginLeft: "3%", marginBottom: "2%", marginTop: "2%" }}>
        
        <button className="button button" onClick={() => {
          setYear(1)
        }}>1st Year</button>
        <button className="button button" onClick={() => {
          setYear(2)
        }}>2nd Year</button>
        <button className="button button" onClick={() => {
          setYear(3)
        }}>3rd Year</button>
        <button className="button button" onClick={() => {
          setYear(4)
        }}>4th Year</button>
      </div>
      <main>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Date</th>
              <th>Purpose</th>
              <th>Out</th>
              <th>In</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            <TableRow />

          </tbody>
        </table>
      </main  >
      
    </body>
  );
};
export default Admin;
