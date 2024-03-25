import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";

function Navbar() {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/");
  }

  return (
    <div className="container-fluid bg-light shadow">
      <nav className="navbar navbar-expand-sm bg-light navbar-light py-3 py-lg-3 px-0 px-lg-5 fixed-top shadow">
        <div onClick={handleClick}>
          <Logo />
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            {/* <Link to="/" className="nav-item nav-link">
              Recruiters
            </Link>
            <Link to="/" className="nav-item nav-link">
              Facilities
            </Link>
            <Link to="/" className="nav-item nav-link">
              Anouncements
            </Link> */}
            <Link to="/" className="nav-item nav-link">
              About
            </Link>
            <Link to="/" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="login-buttons">
            <Link to="/" className="btn btn-primary px-4 mx-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary px-4">
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
