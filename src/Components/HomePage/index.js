import React from "react";
import HeadPage from "../HeadPage";
import HomePageContent from "../HomePageContent";
import FooterPage from "../FooterPage";

import "./index.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <HeadPage />
        <div className="d-flex flex-column justify-content-between home">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <HomePageContent />
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <FooterPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
