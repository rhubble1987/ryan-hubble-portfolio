import React from "react";
import { Link, useLocation } from "react-router-dom";
import ResumeFile from "../Assets/PDFs/resume2021-03-12.pdf";

function Header() {
    const location = useLocation();

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <span className="navbar-brand mb-0 h1">Ryan Hubble</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
    <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
            </Link>
          </li>
          <li className="nav-item d-none d-sm-block">
            <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                Resume
            </Link>
          </li>
          <li className="nav-item d-block d-sm-none">
          <a className="nav-link" target="_blank" href={ResumeFile}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;