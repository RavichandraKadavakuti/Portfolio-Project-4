import React from "react";
import "./index.css";

const FooterPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center  shadow-lg rounded my-5">
          <h1 className="contact-page-title pt-3">Contact Me</h1>
          <ul className="d-flex justify-content-around col-12 col-sm-8 col-md-6 my-3 my-lg-5">
            <li>
              <a
                href="https://www.instagram.com/369krc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands  fa-instagram contact-icons"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/7993091099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp contact-icons"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ravichandra-kadavakuti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in contact-icons"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RavichandraKadavakuti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github contact-icons"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:ravikadavakuti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-envelope contact-icons"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
