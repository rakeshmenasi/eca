import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-collapse navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>Engineers Computer Academy</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="text-white" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/students">
                  Student Corner
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
