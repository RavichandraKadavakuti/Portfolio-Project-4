import React from "react";
import NavHeader from "../NavHeader";
import HomePageContent from "../HomePageContent";
import NavFooter from "../NavFooter";
import "./index.css";

const Home = () => {
  return (
    <div className="container custom-scroll-container">
      <div className="row">
        <NavHeader />
        <div
          data-aos="zoom-in-up"
          className="d-flex flex-column bg-success-subtle p-3 rounded"
        >
          <div>
            <HomePageContent />
          </div>
          <div className="my-5">
            <NavFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
