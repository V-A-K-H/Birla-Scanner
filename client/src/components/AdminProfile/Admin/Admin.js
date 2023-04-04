import { React, useState, useEffect } from "react";
import "./Admin.css";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../MainComponents/Loader/Loader";
const Admin = () => {
  useEffect(()=> {
    setTimeout(()=> {
    setLoad(true)
  },1125)
  },[])
  const [load,setLoad]=useState(false)

  if (!load) return (
    <>
    <Loader/>
    </>
  )
  return (
    <body>
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
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{width: "45px", height: "45px"}}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">+91 7895 4569 23</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">1st Year</p>
                <p className="text-muted mb-0">CSE</p>
              </td>
              <td>25/March/2023</td>
              <td>Market</td>
              <td>12:45 PM</td>
              <td>2:45 PM</td>
              <td>
                <span className="badge badge-late rounded-pill d-inline">
                  Late
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{width: "45px", height: "45px"}}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">+91 7895 4569 23</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">1st Year</p>
                <p className="text-muted mb-0">CSE</p>
              </td>
              <td>25/March/2023</td>
              <td>Market</td>
              
              <td>12:45 PM</td>
              <td>2:45 PM</td>
              <td>
                <span className="badge badge-Out rounded-pill d-inline">
                  Out
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{width: "45px", height: "45px"}}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">+91 7895 4569 23</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">1st Year</p>
                <p className="text-muted mb-0">CSE</p>
              </td>
              <td>25/March/2023</td>
              <td>Market</td>
              
              <td>12:45 PM</td>
              <td>2:45 PM</td>
              <td>
                <span className="badge badge-In rounded-pill d-inline">
                  In
                </span>
              </td>
            </tr>
            
          </tbody>
        </table>
      </main  >
      <div style={{ marginLeft: "3%", marginBottom: "2%",marginTop: "2%" }}>
        <h1>Outing History</h1>
        <button className="button button">1st Year</button>
        <button className="button button">2nd Year</button>
        <button className="button button">3rd Year</button>
        <button className="button button">4th Year</button>
      </div>
    </body>
  );
};
export default Admin;
