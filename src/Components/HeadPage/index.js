import React from "react";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import "./index.css";

const HeadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-collapse bg-light shadow fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <h1 className="navbar-brand custom-logo">Portfolio</h1>
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
          className="collapse navbar-collapse justify-content-lg-end"
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
              <NavLink exact to="/more-projects" className="nav-link">
                More-Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeadPage;
