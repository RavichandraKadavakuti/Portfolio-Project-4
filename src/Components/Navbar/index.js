import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <h1 className="navbar-brand">Portfolio</h1>
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="d-lg-flex justify-content-around col-lg-3">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" exact className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
