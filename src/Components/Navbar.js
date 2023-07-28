import React from 'react'
import {
    Link
} from "react-router-dom";


const Navbar = (props) => {
    return (
        <div>
            <nav
                className={`navbar fixed-top navbar-expand-lg ${props.mode === "dark"
                        ? "navbar-dark bg-dark" 
                        : "navbar-light bg-light"
                    }`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WittyNewsWire</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3">
                            <input
                                className="form-check-input"
                                onClick={props.toggleMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                defaultChecked={props.mode === "dark"}
                            />
                            <label
                                className={`form-check-label ${props.mode === "dark" || props.gmode === "success" || props.bmode === "primary" ? "text-white" : "text-black"
                                    }`}
                                htmlFor="flexSwitchCheckDefault"
                            >
                                Enable Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar










