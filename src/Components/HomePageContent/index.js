import React from "react";
import "./index.css";
import { TypeAnimation } from "react-type-animation";

const HomePageContent = () => {
  const myResumePath = `${process.env.PUBLIC_URL}/Resume/Ravichandra(IT) (1).pdf`;

  const currentTime = new Date().getHours();
  let greeting;
  let greetingIcon;

  if (currentTime >= 5 && currentTime < 12) {
    greeting = "Good Morning";
    greetingIcon = "./icons8-sun.gif";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon";
    greetingIcon = "./icons8-sun.gif";
  } else {
    greeting = "Good Evening";
    greetingIcon = "./icons8-night.gif";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center">
          <div className="col-12 col-lg-8 order-1 order-lg-0 p-lg-5 my-lg-5">
            <div className="custom-typing-container">
              <TypeAnimation
                sequence={[
                  `Hi ${greeting}`,
                  5000,
                  "Welcome to my portfolio.",
                  5000,
                ]}
                wrapper="span"
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>

            <div>
              <h3>
                Hello <span className="greeting">{greeting}</span>
                <img
                  src={greetingIcon}
                  alt="Sun"
                  className="greeting-icon ms-3"
                />
              </h3>
              <h2>
                I'M
                <span className="custom-name-highlight ms-2">
                  Ravichandra Kadavakuti
                </span>
              </h2>
              <p>
                This is Ravichandra Kadavakuti
                <span className="custom-job-role">
                  {" "}
                  React.Js Developer
                </span>{" "}
                located in Andhra Pradesh, looking for working around the globe.
              </p>

              <a href={myResumePath} target="-blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="btn btn-lg btn-warning custom-resume-btn"
                >
                  Resume
                  <i className="fa-solid fa-circle-down ms-5"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-center order-0 order-lg-1 my-5">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
              alt="profile"
              className="img-fluid rounded-circle profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
