import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import ResumeFile from "../Assets/PDFs/ryan_hubble_resume_20210413.pdf";
import Modal from "react-bootstrap/Modal";


function Header() {
    const location = useLocation();

    const [contactInfoState, showContactInfo] = useState(false);

    const showContactModal = () => showContactInfo(true);
    const hideContactModal = () => showContactInfo(false);

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
          <li className="nav-item">
          <Link onClick={showContactModal} className="nav-link">
                Contact
            </Link>
          </li>
        </ul>
      </div>
      <Modal show={contactInfoState} onHide={hideContactModal}>
    <Modal.Header closeButton>
      <Modal.Title>Contact Info</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ul className="list-group text-center">
          <li className="list-group-item">
            <h3>(380) 201-2572</h3>

            <a
              href="tel:‪3802012572‬"
              role="button"
              className="btn btn-outline-primary mr-3"
              aria-label="Button for calling the number."
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                ></path>
              </svg>
            </a>
            <a
              href="sms://3802012572"
              role="button"
              className="btn btn-outline-primary"
              aria-label="Button for texting the number."
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-chat-dots-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="list-group-item">
            <a href="mailto:rhubble1987@gmail.com">
              <h5>Email</h5>
            </a>
          </li>
          <li className="list-group-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ryanmhubble/"
            >
              <h5>LinkedIn</h5>
            </a>
          </li>
          <li className="list-group-item">
            <a target="_blank" href="https://github.com/rhubble1987">
              <h5>GitHub</h5>
            </a>
          </li>
        </ul>
    </Modal.Body>
  </Modal>
    
  
    
    </nav>



    );
}

export default Header;