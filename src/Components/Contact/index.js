import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="bg-light-subtle d-flex flex-column align-items-center rounded shadow p-3 p-lg-5 mt-3 mt-lg-3">
          <h1>Contact Me</h1>
          <ul className="d-flex justify-content-around col-11 col-sm-6 mt-3 mt-lg-5">
            <li>
              <a
                href="https://www.instagram.com/369krc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/7993091099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ravichandra-kadavakuti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RavichandraKadavakuti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:ravikadavakuti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-envelope"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
