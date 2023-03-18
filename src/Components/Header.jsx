import React from "react";
import "./Header.css";
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="top_nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TheAnkitWebDev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink to={"/#container"} className="nav-link active" aria-current="page" href="#">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to={"/#container5"} className="nav-link active" aria-current="page" href="#">
                  Contact
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to={"/#container2"} className="nav-link active" aria-current="page" href="#">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to={"/#container4"} className="nav-link active" aria-current="page" href="#">
                  Brands
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to={"/#container1"} className="nav-link active" aria-current="page" href="#">
                  Service
                </HashLink>
              </li>
              
            </ul>
             
          </div>
        </div>
      </nav>
  );
};

export default Header;
