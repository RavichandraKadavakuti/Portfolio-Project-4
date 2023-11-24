import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";

import "./index.css";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand custom-navbar-logo">Portfolio</h1>
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
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/mini-projects" className="nav-link">
                Mini-Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
