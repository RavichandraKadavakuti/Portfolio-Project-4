import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 mt-5 order-1 order-lg-0">
          <h3>Hello</h3>
          <h2>
            I'm <span className="name-highlight">Ravichandra Kadavakuti</span>
          </h2>
          <p>
            This is Ravichandra Kadavakuti
            <span className="job-role"> React.Js Developer</span> located in
            Andhra Pradesh, looking for working around the globe.
          </p>
          <div className="d-grid">
            <button
              type="button"
              className="d-flex align-items-center justify-content-between btn btn-lg btn-warning resume-btn"
            >
              Download Resume
              <i className="fa-solid fa-circle-down"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-4 text-center order-0 order-lg-1">
          <img
            src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
            alt="profile"
            className="img-fluid rounded-circle profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
