import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";

function Navbar2() {
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/"); // Navigate to the home page after logout
  };

  const handleClick = () => {
    navigate("/home")
  }

  return (
    <div className="container-fluid bg-light shadow">
      <nav className="navbar navbar-expand-sm bg-light navbar-light py-3 py-lg-3 px-0 px-lg-5 fixed-top shadow">
        <div onClick={handleClick}>
          <Logo/>
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
          className="collapse navbar-collapse justify-content"
          id="navbarCollapse"
          style={{ marginLeft: "900px" }}
        >
          <div className="ml-auto">
            <Link to="/delete" className="btn btn-danger px-4 mx-3">
              Delete
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/update" className="btn btn-secondary px-4 mx-3">
              Update
            </Link>
          </div>
          <div className="ml-auto">
            <button onClick={handleLogout} className="btn btn-warning px-4 mx-3">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
