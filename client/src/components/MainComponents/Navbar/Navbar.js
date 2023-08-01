import { React } from 'react'
import { Link, NavLink, Navigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const auth = localStorage.getItem('Auth') ? localStorage.getItem('Auth') : null;

    if (auth == "user") {
        return (
            <>
                <div className="collapse" id="navbarToggleExternalContent" >
                      <div className="p-4">
                        <Link to='/'><h5 className="text-white h4"><i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>Home Page</h5></Link>
                    </div>
                    <div className="p-4">
                        <Link to='/profile'><h5 className="text-white h4" ><i class="fa-solid fa-user" style={{marginRight:"10px"}}></i>Profile</h5></Link>
                    </div>
                </div>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </>
        )
    }
    if (auth == "admin") {
        return (
            <>
                <div className="collapse" id="navbarToggleExternalContent" >
                    <div className="p-4">
                        <Link to='/admin'><h5 className="text-white h4"><i class="fa-solid fa-table" style={{marginRight:"10px"}}></i>Admin Page</h5></Link>
                    </div>
                    <div className="p-4">
                        <Link to='/QrGenerator'><h5 className="text-white h4"><i class="fa-solid fa-qrcode" style={{marginRight:"10px"}}></i>Qr Page</h5></Link>
                    </div>
                </div>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </>

        )
    }
    if (!auth) {
        return (
        <>
        Not signed in
        </>
        )
    }
}

export default Navbar;
